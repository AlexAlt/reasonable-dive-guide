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
    },

    update(review, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          review.set(key,params[key]);
        }
      });
      review.save().then(function(bar) {
        bar.reload();
      });
      this.transitionTo('bar');
    },
    deleteReview(model) {
      if(confirm('Are you sure you want to delete?')) {
      model.destroyRecord();
      }
    },
    deleteBar(model) {
      var review_deletions = model.get('reviews').map(function(review) {
        return review.destroyRecord();
      });

      Ember.RSVP.all(review_deletions)
        .then(function() {
          return model.destroyRecord();
      })
      this.transitionTo('index');
    },
    updateBar(bar, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          bar.set(key, params[key])
        }
      });
      bar.save();
      this.transitionTo('bar', bar);
    }
  }

});
