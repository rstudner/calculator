import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:calculator/index', 'CalculatorIndexController', {
  // Specify the other units that are required for this test.
  needs: ['controller:calculator']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
