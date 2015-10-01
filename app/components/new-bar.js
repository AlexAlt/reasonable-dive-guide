import Ember from 'ember';

export default Ember.Component.extend({
  addBar: false,

  actions: {
    barFormShow() {
      this.set('addBar', true);
    },
    saveBar() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        longitude: this.get('longitude'),
        latitude: this.get('latitude'),
        neighborhood: this.get('neighborhood')
      }
      this.sendAction("saveBar", params);
      this.set('addBar', false);
    },
    barFormHide() {
      this.set('addBar', false);
    }
  }

});
