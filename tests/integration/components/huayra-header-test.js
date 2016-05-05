import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('huayra-header', 'Integration | Component | huayra header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{huayra-header}}`);
  assert.ok(this.$().text().trim());
});
