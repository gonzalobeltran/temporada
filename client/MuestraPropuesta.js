import { Template } from 'meteor/templating';

import './MuestraPropuesta.html';

Template.MuestraPropuesta.helpers({
  'saltos'(txt) {
    return txt.replace(/(?:\r\n|\r|\n)/g, '<br />');
  }
});
