import { moduleForModel, test } from 'ember-qunit';

moduleForModel('build', 'Unit | Model | build', {
  // Specify the other units that are required for this test.
  needs: ['model:package']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
