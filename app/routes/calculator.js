import Ember from 'ember';

export default Ember.Route.extend({

  /**
   * Actions from the sub components and controllers will bubble up to this common place
   * to be handled and defined once.  Calls back to controller to do actual business logic.
   */
  actions: {
    /**
     * Handles the clicking of particular calculator button
     * Will either be a numerical value
     *
     * @param value
     */
    scalarButtonClicked: function(value) {
      Ember.Logger.debug('scalarButtonClicked (route): ' + value);
      var numericalValue = parseInt(value);

      if (!isNaN(numericalValue)) { // valid number, go ahead and bother the controller :)
        //we're going to just send the string though, since its just easier to work with
        //for concatenation purposes
        this.get('controller').addValueFromButtonClick(value);
      }
    },
    /**
     * Handles the clicking of an operation button such as +, -, x, /, = etc.
     * @param operationString
     */
    operationButtonClicked: function(operationString) {
      Ember.Logger.debug("operationButtonClicked (route): " + operationString);
      this.get('controller').operationClicked(operationString);
    },
    increaseTheFancy: function() {
      this.transitionTo('calculator.fancy');
    }
  }
});
