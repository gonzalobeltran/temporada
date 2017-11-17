import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

export const Propuestas = new Mongo.Collection('propuestas');

SimpleSchema.extendOptions(['autoform']);

const propuesta = new SimpleSchema({
  _id: {
    type: String,
    optional: true,
    autoform: {
      type: 'hidden'
    }
  },
  nombreDelPrograma: String,
  profesor: String,
  integrantes: {
    type: Array,
    optional: true,
  },
  'integrantes.$': String,
  presentacion: {
    type: String,
    autoform: {
      type: 'textarea',
      label: 'Presentación del programa'
    }
  },
  requerimientos: {
    type: String,
    autoform: {
      type: 'textarea',
      label: 'Requerimientos especiales de producción'
    }
  },
  primeraParte: {
    type: String,
    autoform: {
      type: 'textarea',
      label: 'Primera parte del programa'
    }
  },
  segundaParte: {
    type: String,
    autoform: {
      type: 'textarea',
      label: 'Segunda parte del programa'
    }
  },
  duracion: String,
  

});


Propuestas.attachSchema(propuesta);
