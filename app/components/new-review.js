import Ember from 'ember';

export default Ember.Component.extend({
  addReivew: false,

  actions: {
    reviewFormShow() {
      this.set('addReview', true);
    },
    saveReview() {
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
      this.sendAction("saveReview", params);
      this.set('addReview', false);
    },
    reviewFormHide() {
      this.set('addReview', false);
    }
  }
});
