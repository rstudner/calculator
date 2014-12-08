import Ember from 'ember';

export default Ember.TextField.extend({
  keyUp : function (value) {
    //this.get('controller').send('doSearch');
    var input = Ember.$(value.target);
    Ember.Logger.debug(input.val());
  }
});
