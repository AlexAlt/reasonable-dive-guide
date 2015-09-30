import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  neighborhood: DS.belongsTo('neighborhood', {async: true})

});
