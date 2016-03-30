'use strict';

goog.provide('Blockly.Blocks.math');

goog.require('Blockly.Blocks');

Blockly.Blocks['assign'] = {
  init: function() {
    this.appendValueInput("opIzq")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput("opDer")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
