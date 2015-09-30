import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('neighborhood', {path: '/neighborhood/:neighborhood_id'});
  this.route('bar', {path: '/bar/:bar_id'});
});

export default Router;
