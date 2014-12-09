import Ember from 'ember';

export default Ember.Controller.extend({

  /**
   * Properties
   */
  /*
   the text field display value
   */
  resultDisplayValue: "",

  inputs: [],
  currentOperation: null,

  /*
   if we just clicked an operation button, make this true, so the next
   numeric clicked knows to replace what is in the text field
   */
  operation: false,

  /*
   the most important property in the world.
   */
  fancy: false,

  /**
   * Attr & Computed properties
   */
  addValueFromButtonClick: function(value) {
    Ember.Logger.debug("addValueFromButtonClick (controller): " + value);
    if (this.get('operation')) { //was last thing done an operation?
      this.set('resultDisplayValue', '');
      this.set('operation', false);
    }
    var currentResultValue = this.get('resultDisplayValue');
    if (currentResultValue !== "") {
      this.set('resultDisplayValue', currentResultValue + value);
    } else {
      this.set('resultDisplayValue', value);
    }
  },

  operationClicked: function(operationString) {
    var self = this;
    Ember.Logger.debug("operationClicked (controller): " + operationString);
    this.set('operation', true);
    var currentInputs = this.get('inputs');
    var currentValue = this.get('resultDisplayValue');
    var currentOperation = this.get('currentOperation');
    Ember.$('#calculator div.result input').focus();

    if (!Ember.isNone(currentValue)) {
      currentInputs.push(currentValue);
      if (currentInputs.get('length') > 2) {
        currentInputs.shift();
      }
    }

    if (operationString === '=') { //do some computation
      //self.set('operation', false);
      if (currentInputs.get('length') === 2) {
        Ember.Logger.debug("current args: " + currentInputs);
        //actually do the math on the server
        //via arg1, arg2, operation POST
        this.set('resultDisplayValue', '');
        this.set('inputs', []);
        this.set('currentOperation', '');
        Ember.$.post('/api/compute', {
          operation: currentOperation,
          args: currentInputs
        }).then(function(result) {
          Ember.Logger.debug(result);
          self.set('resultDisplayValue', result.result);
        }).fail(function(result) {
          Ember.Logger.debug("fail!");
          self.handleFailure(result.responseJSON);
        });

      } else {
        Ember.Logger.debug('dont have 2 inputs, no equalin to be done');
        //nothing to do yet.
      }
    } else {
      Ember.Logger.debug('not an equal operation');
      this.set('currentOperation', operationString);
      this.set('resultDisplayValue', '');
    }
  },
  handleFailure: function(json) {
    Ember.Logger.debug(json);
    swal("Hey homer", json.errorText, "error");
  }
});
