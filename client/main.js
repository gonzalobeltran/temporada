import { Template } from 'meteor/templating';
import { Propuestas } from '/collections.js';

import './main.html';
import './EditaPropuesta.html';
import './MuestraPropuesta.js';

window.Propuestas = Propuestas;


Template.main.helpers({
  'propuestas'() {
    return Propuestas.find();
  },
  'saltos'(txt) {
    return txt.replace(/(?:\r\n|\r|\n)/g, '<br />');
  }
});

Template.main.events({
  'click .js-nuevaPropuesta'() {
    Modal.show('EditaPropuesta');
  },
  'mousedown .js-modificaPropuesta'(e) {
    if (e.button == 1) {
      Modal.show('EditaPropuesta', this);
    } else {
      Modal.show('MuestraPropuesta', this);
    }
  },
  'contextmenu .js-modificaPropuesta'(e) {
    return false;
  }
});
