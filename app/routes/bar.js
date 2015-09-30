import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('bar', params.bar_id)
  },

  actions: {
    saveReview(params){
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      params.bar.save();
    }
  }

});
