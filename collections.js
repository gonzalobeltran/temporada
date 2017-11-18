import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

export const Propuestas = new Mongo.Collection('propuestas');

SimpleSchema.extendOptions(['autoform']);


todasLasFechas = [
  {label:"Sacra - Programa 1", value: "sacra1", fechas: "03.04 TM / 04.04 VC"},
  {label:"Sacra - Programa 2", value: "sacra2", fechas: "10.04 TM / 11.04 VC"},
  {label:"Sacra - Programa 3", value: "sacra3", fechas: "ma 17.04 TM / 18.04 VC"},
  {label:"Sacra - Programa 4", value: "sacra4", fechas: "ma 24.04 TM / mi 25.04 VC"},
  {label:"Camara I - Programa 1", value: "camaraI1", fechas: "ju 10.05 SL / vi 11.05 ASM / sa 12.05 AM / ma 15.05 GAM"},
  {label:"Camara I - Programa 2", value: "camaraI2", fechas: "ju 17.05 SL / vi 18.05 ASM / sa 19.05 AM / ma 22.05 GAM"},
  {label:"Camara I - Programa 3", value: "camaraI3", fechas: "ju 24.05 SL / vi 25.05 ASM / sa 26.05 AM / ma 29.05 GAM"},
  {label:"Camara I - Programa 4", value: "camaraI4", fechas: "ju 31.05 SL / vi 01.06 ASM / sa 02.06 SH / ma 05.06 GAM"},
  {label:"Camara I - Programa 5", value: "camaraI5", fechas: "ju 07.06 SL / vi 08.06 ASM / sa 09.06 AM / ma 12.06 GAM"},
  {label:"Camara I - Programa 6", value: "camaraI6", fechas: "ju 14.06 SL / vi 15.06 ASM / sa 16.06 AM / ma 19.06 GAM"},
  {label:"Camara I - Programa 7", value: "camaraI7", fechas: "vi 22.06 ASM / sa 23.06 AM / ma 26.06 GAM"},
  {label:"Teclados - Programa 1", value: "teclados1", fechas: "vi 06.07 ASM / sa 07.07 SH"},
  {label:"Teclados - Programa 2", value: "teclados2", fechas: "vi 13.07 ASM / sa 14.07 AM"},
  {label:"Teclados - Programa 3", value: "teclados3", fechas: "vi 20.07 ASM / sa 21.07 AM"},
  {label:"Teclados - Programa 4", value: "teclados4", fechas: "vi 27.07 ASM / sa 28.07 SH"},
  {label:"Camara II- Programa 1", value: "camaraII1", fechas: "vi 03.08 ASM / sa 04.08 AM / ma 07.08 GAM"},
  {label:"Camara II - Programa 2", value: "camaraII2", fechas: "vi 10.08 ASM / sa 11.08 AM / ma 14.08 GAM"},
  {label:"Camara II - Programa 3", value: "camaraII3", fechas: "ju 16.08 SL / vi 17.08 ASM / sa 18.08 AM / ma 21.08 GAM"},
  {label:"Camara II - Programa 4", value: "camaraII4", fechas: "ju 23.08 SL / vi 24.08 ASM / sa 25.08 AM / ma 28.08 GAM"},
  {label:"Música Antigua - Programa 1", value: "antigua1", fechas: "ju 04.10 SL / vi 05.10 ASM / sa 06.10 AM"},
  {label:"Música Antigua - Programa 2", value: "antigua2", fechas: "ju 11.10 SL / vi 12.10 ASM / sa 13.10 AM"},
  {label:"Música Antigua - Programa 3", value: "antigua3", fechas: "ju 18.10 SL / vi 19.10 ASM / sa 20.10 AM"},
  {label:"Música Antigua - Programa 4", value: "antigua4", fechas: "ju 25.10 SL / vi 26.10 ASM / sa 27.10 AM"},
];



const propuesta = new SimpleSchema({
  _id: {
    type: String,
    optional: true,
    autoform: {
      type: 'hidden'
    }
  },
  destaca: {
    type: Boolean,
    optional: true,
    autoform: {
      type: 'hidden'
    }
  },
  selec: {
    type: Number,
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
  fechas: {
    type: Array,
    autoform: {
      type: 'select-checkbox',
      options(){
        return todasLasFechas;
      }
    }
  },
  'fechas.$': String,

});


Propuestas.attachSchema(propuesta);
