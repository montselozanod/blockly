'use strict';

goog.provide('Blockly.Blocks.text');

goog.require('Blockly.Blocks');


Blockly.Blocks['print'] = {
  init: function() {
    this.appendValueInput("print-stmt")
        .setCheck(["String", "expression"])
        .appendField("print");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(23);
    this.setTooltip('');
  }
};

Blockly.Blocks['print_ctestring'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('print"')
        .appendField(new Blockly.FieldTextInput("default"), "print_txt");
        .appendField('"')
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(23);
    this.setTooltip('');
  }
};
