import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('neighborhood', params.neighborhood_id);
  },
  actions: {
    saveBar(params){
      var newBar = this.store.createRecord('bar', params);
      newBar.save();
      params.neighborhood.save();
    }
  }

});
