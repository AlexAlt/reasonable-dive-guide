import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr()
  bars: DS.hasMany('bar', {async: true})
});
