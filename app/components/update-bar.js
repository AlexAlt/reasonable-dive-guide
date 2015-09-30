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
      debugger;
      this.sendAction("updateBar", bar, params);
      this.set('updateBarForm', false);
    },
    hideBarForm() {
      this.set('updateBarForm', false);
    }
  }
});
