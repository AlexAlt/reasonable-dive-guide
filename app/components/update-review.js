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
      this.set('tagline', undefined);
      this.set('userName', undefined);
      this.set('dateVisited', undefined);
      this.set('reasonRating', undefined);
      this.set('diveRating', undefined);
      this.set('anecdotes', undefined);
      this.set('happyHour', undefined);
    
      this.set('updateReview', false);
      this.sendAction("update", review, params);
    },
    updateHide() {
    this.set('updateReview', false);
    }
  }
});
