import { Template } from 'meteor/templating';
import { Propuestas } from '/collections.js';

import './main.html';
import './EditaPropuesta.html';
import './MuestraPropuesta.js';

window.Propuestas = Propuestas;


Template.main.helpers({
  'propuestas'(fecha) {
    return Propuestas.find({fechas: fecha.value}, {sort: {nombreDelPrograma:1, selec: 1}});
  },
  'propuestaSel'(fecha) {
    let prop = Propuestas.findOne({selec: fecha.value});
    if (!prop) return {nombreDelPrograma: '*', profesor: '*'};
    return prop;
  },
  'saltos'(txt) {
    return txt.replace(/(?:\r\n|\r|\n)/g, '<br />');
  },
  'todasLasFechas'() {
    return todasLasFechas;
  },
});

Template.main.events({
  'click .js-nuevaPropuesta'() {
    Modal.show('EditaPropuesta');
  },
});

Template.Propuesta.helpers({
  'oscurecida'() {
    if (!this.sel && this.prop.selec) return 'oscurecida';
  },
  'seleccionada'() {
    if (this.prop.profesor == '*') return 'seleccionada';
    else return this.sel;
  }
});

Template.Propuesta.events({
  'click .js-destacar'() {
    Meteor.call('destaca', this.prop);
  },
  'click .js-ver'() {
    Modal.show('MuestraPropuesta', this.prop);
  },
  'click .js-editar'() {
    Modal.show('EditaPropuesta', this.prop);
  },
  'click .js-seleccionar'() {
    Meteor.call('selecciona', this.prop, this.fecha);
  },
});
