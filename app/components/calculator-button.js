import Ember from 'ember';


var CalculatorButtonComponent = Ember.Component.extend({
  tagName: "div",
  classNames: ['calculator-button'],
  symbol: "&#61573;",
  buttonSymbol: function() {
    var v = this.get('symbol');
    return new Ember.Handlebars.SafeString(v);
  }.property('symbol'),

  actions: {
    click: function() {
      this.sendAction('action', this.get('value'));
    }
  }
});

export default CalculatorButtonComponent;
