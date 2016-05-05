import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleModal() {
      this.transitionTo('repos');
    },

    createNewRepo(name) {
      this.store.createRecord('package', {
        name: name,
        url: "???",
      }).save().then(() => {
        this.transitionTo("repos");
      });
    }
  }
});
