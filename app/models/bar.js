import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  longitude: DS.attr('number'),
  latitude: DS.attr('number'),
  neighborhood: DS.belongsTo('neighborhood', {async: true}),
  reviews: DS.hasMany('review', {async: true})
});
