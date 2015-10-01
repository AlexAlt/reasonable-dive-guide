import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),


  actions: {
    showMap(neighborhood, bars) {
      var container = this.$('.map-display')[0];

      var options = {
        center: this.get('map').center(neighborhood.get('latitude'), neighborhood.get('longitude')),
        zoom: 14,
      };

      var ourMap = this.get('map').findMap(container, options);

      bars.forEach(function(bar) {
        var marker = undefined;
        var lat = bar.get('latitude');
        var lng = bar.get('longitude');
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: ourMap,
          title: (bar.get('name')),
        });

        var infowindow = new google.maps.InfoWindow({
          content: marker.title
        });
        marker.addListener('click', function() {
          infowindow.open(ourMap, marker);
        });
      });
    }
  }
});
