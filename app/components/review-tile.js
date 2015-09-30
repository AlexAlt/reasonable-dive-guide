import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(review, params) {
      this.sendAction('update', review, params);
    }
  }
});
