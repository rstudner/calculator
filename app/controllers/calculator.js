import Ember from 'ember';

export default Ember.Controller.extend({

  /**
   * Properties
   */
    /*
    the text field display value
     */
  resultDisplayValue: "",
  /*
  the first value provided prior to an operation
   */
  firstValue: "0",
  /*
  the second value provided after an operation
   */
  secondValue: "0",
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
    var currentResultValue = this.get('resultDisplayValue');
    if (this.get('operation')) { //was last thing done an operation?
      this.set('resultDisplayValue', '');
      this.set('operation', false);
    }
    if (currentResultValue !== "") {
      this.set('resultDisplayValue', currentResultValue + value);
    } else {
      this.set('resultDisplayValue', value);
    }
  },

  operationClicked: function(operationString) {
    Ember.Logger.debug("operationClicked (controller): " + operationString);
    this.set('operation', true);

  }
});
