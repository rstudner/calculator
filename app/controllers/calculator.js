import Ember from 'ember';

export default Ember.Controller.extend({

  /**
   * Properties
   */
  currentValues: [],
  result: 0,
  fancy: false,

  /**
   * Attr & Computed properties
   */

  compute: function() {

  },

  actions: {
    /**
     * Handles the clicking of particular calculator button
     * Will either be a numerical value, or an operator (not bothering in "v1" with 8.5 i.e. '.')
     *
     * @param value
     */
    scalarButtonClicked: function(value) {
      Ember.Logger.debug('scalarButtonClicked: ' + value);
      var numericalValue = parseInt(value);
      if (isNaN(numericalValue)) { //we have an operation

      } else {
        this.get('currentValues').push(numericalValue);
      }
    },
    operationButtonClicked: function(operationString) {
      Ember.Logger.debug("operationButtonClicked: " + operationString);

    },
    increaseTheFancy: function() {
      this.transitionToRoute('calculator.fancy');
    }
  }
});
