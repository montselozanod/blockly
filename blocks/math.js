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
    this.setColour(230);
    this.setTooltip('');
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
  }
};

Blockly.Blocks['random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("random number");
    this.appendValueInput("min")
        .setCheck("Number")
        .appendField("MIN:");
    this.appendValueInput("max")
        .setCheck("Number")
        .appendField("MAX:");
    this.setInputsInline(true);
    this.setOutput(true, "expression");
    this.setColour(230);
    this.setTooltip('');
  }
};

Blockly.Blocks['paren'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("expression");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(180);
    this.setTooltip('');
  }
};
