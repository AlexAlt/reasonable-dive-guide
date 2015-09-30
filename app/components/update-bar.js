import Ember from 'ember';

export default Ember.Component.extend({
  updateBarForm: false,

  actions: {
    barFormShow() {
      this.set('updateBarForm', true);
    },
    updateBar(bar) {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        neighborhood: this.get('neighborhood')
      }
      this.set('name', undefined);
      this.set('location', undefined);
      
      this.set('updateBarForm', false);
      this.sendAction("updateBar", bar, params);
    },
    hideBarForm() {
      this.set('updateBarForm', false);
    }
  }
});
