import Ember from 'ember';

var CalculatorButtonComponent = Ember.Component.extend({
  tagName: "div",
  classNames: ['calculator-button'],
  symbol: "&#61573;",
  buttonSymbol: function() {
    var v = this.get('symbol');
    return new Handlebars.SafeString(v);
  }.property('symbol')
});

export default CalculatorButtonComponent;

