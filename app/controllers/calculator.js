import Ember from 'ember';

export default Ember.Controller.extend({

  /**
   * Properties
   */
  result: "0",
  firstValue: "0",
  secondValue: "0",
  fancy: false,

  /**
   * Attr & Computed properties
   */
  addValueFromButtonClick: function(value) {
    Ember.Logger.debug("addValueFromButtonClick (controller): " + value);
    var currentResultValue = this.get('result');
    if (currentResultValue !== "0") {
      this.set('result', currentResultValue + value);
    } else {
      this.set('result', value);
    }

  },
  operationClicked: function(operationString) {
    Ember.Logger.debug("operationClicked (controller): " + operationString);
  },
  compute: function() {
    Ember.Logger.debug('here');
  }
});
