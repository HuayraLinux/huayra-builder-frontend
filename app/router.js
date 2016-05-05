import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('playground');
  this.route('repos', function() {
    this.route('new');
  });
  this.route('build', {path: '/build/:build_id'});
});

export default Router;
