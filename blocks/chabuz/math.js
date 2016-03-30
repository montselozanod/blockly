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

Blockly.Blocks['term'] = {
  init: function() {
    this.appendValueInput("opIzq")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["x", "MULT"], ["÷", "DIV"]]), "op");
    this.appendValueInput("opDer")
        .setCheck("Number");
    this.setOutput(true, "expression");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['exp'] = {
  init: function() {
    this.appendValueInput("opIzq")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+", "SUM"], ["-", "MINUS"]]), "op");
    this.appendValueInput("opDer")
        .setCheck("Number");
    this.setOutput(true, "expression");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
