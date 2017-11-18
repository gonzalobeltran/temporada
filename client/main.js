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
  'saltos'(txt) {
    return txt.replace(/(?:\r\n|\r|\n)/g, '<br />');
  },
  'todasLasFechas'() {
    return todasLasFechas;
  },
  'seleccion'() {
    if (this.destaca) return 'destacado';
    if (this.selec == -1) return 'oscurecido';
    if (this.selec == 2) return 'seleccionado';
  }
});

Template.main.events({
  'click .js-nuevaPropuesta'() {
    Modal.show('EditaPropuesta');
  },
  'mousedown .js-modificaPropuesta'(e) {
    console.log(e.button);
    if (e.button == 1) {
      Modal.show('EditaPropuesta', this);
    } else {
      //Modal.show('MuestraPropuesta', this);
      Meteor.call('destaca', this);
    }
  },
  'contextmenu .js-modificaPropuesta'(e) {
    return false;
  }
});
