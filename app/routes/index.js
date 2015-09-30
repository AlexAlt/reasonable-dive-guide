import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      northwestNeighborhoods: this.store.findAll('neighborhood').then(function(neighborhoods) {
        return neighborhoods.filterBy('name', 'NorthWest');
      }),
      northeastNeighborhoods: this.store.findAll('neighborhood').then(function(neighborhoods) {
        return neighborhoods.filterBy('name', 'NorthEast');
      }),
      southwestNeighborhoods: this.store.findAll('neighborhood').then(function(neighborhoods) {
        return neighborhoods.filterBy('name', 'SouthWest');
      }),
      southeastNeighborhoods: this.store.findAll('neighborhood').then(function(neighborhoods) {
        return neighborhoods.filterBy('name', 'SouthEast');
      }),
      noPoNeighborhoods: this.store.findAll('neighborhood').then(function(neighborhoods) {
        return neighborhoods.filterBy('name', 'North Portland');
      }),
    });
  }
});
