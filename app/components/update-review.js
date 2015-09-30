import Ember from 'ember';

export default Ember.Component.extend({
  updateReview: false,

  actions: {
    reviewFormShow() {
      this.set('updateReview', true);
    },
    update(review) {
      var params = {
        tagline: this.get('tagline'),
        userName: this.get('userName'),
        dateVisited: this.get('dateVisited'),
        reasonRating: this.get('reasonRating'),
        diveRating: this.get('diveRating'),
        anecdotes: this.get('anecdotes'),
        happyHour: this.get('happyHour'),
        bar: this.get('bar')
      }
      this.sendAction("update", review, params);
      this.set('updateReview', false);
    },
    updateHide() {
    this.set('updateReview', false);
    }
  }
});
