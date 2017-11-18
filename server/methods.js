import { Meteor } from 'meteor/meteor';
import { Propuestas } from '/collections.js';

Meteor.methods({

  'destaca'(prop) {
    if (prop.destaca) {
      Propuestas.update({_id: prop._id}, {$set: {destaca: ''}});
    } else {
      Propuestas.update({}, {$set: {destaca: ''}}, {multi: true});
      Propuestas.update({_id: prop._id}, {$set: {destaca: 'destacada'}});
    }
  },

  'selecciona'(prop,fecha) {
    if (prop.selec) {
      Propuestas.update({_id: prop._id}, {$set: {selec: ''}});
    } else {
      Propuestas.update({selec: fecha}, {$set: {selec: ''}}, {multi: true});
      Propuestas.update({_id: prop._id}, {$set: {selec: fecha}});
    }
  },
});
