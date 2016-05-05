import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('huayra-footer', 'Integration | Component | huayra footer', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{huayra-footer}}`);
  assert.equal(this.$().text().trim(), 'Huayra GNU/Linux');
});
