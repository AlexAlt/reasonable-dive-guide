import DS from 'ember-data';

export default DS.Model.extend({
  tagline: DS.attr(),
  userName: DS.attr(),
  dateVisited: DS.attr(),
  reasonRating: DS.attr(),
  diveRating: DS.attr(),
  anecdotes: DS.attr(),
  happyHour: DS.attr(),
  bar: DS.belongsTo('bar', {async: true})
});
