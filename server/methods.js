import { Meteor } from 'meteor/meteor';
import { Propuestas } from '/collections.js';

Meteor.methods({

  'destaca'(prop) {
    if (prop.destaca) {
      Propuestas.update({_id: prop._id}, {$set: {destaca: false}});
    } else {
      Propuestas.update({}, {$set: {destaca: false}}, {multi: true});
      Propuestas.update({_id: prop._id}, {$set: {destaca: true}});
    }
  },

});
