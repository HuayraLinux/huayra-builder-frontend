import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    this.store.find('build', param.build_id);
  }
});
