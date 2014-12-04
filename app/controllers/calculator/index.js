import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['calculator'],

  fancy: Ember.computed.alias('controllers.calculator.fancy')
});
