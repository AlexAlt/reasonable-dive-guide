import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "span", 
  actions: {
    update(review, params) {
      this.sendAction('update', review, params);
    },
    deleteReview(model) {
      this.sendAction('deleteReview', model);
    }
  }
});
