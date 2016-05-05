import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.$('[data-toggle=offcanvas]').click(() => {
      this.$('.row-offcanvas').toggleClass('active');
    });
  }
});
