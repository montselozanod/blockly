'use strict';

goog.provide('Blockly.Blocks.variables');

goog.require('Blockly.Blocks');

Blockly.Blocks['var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set")
        .appendField(new Blockly.FieldDropdown([["number", "number"], ["string", "string"], ["bool", "bool"]]), "type")
        .appendField(new Blockly.FieldTextInput("default"), "var_id");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip('');
  }
};


Blockly.Blocks['variables_exist_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("NAME"), "var_name");
    this.setOutput(true);
    this.setColour(280);
    this.setTooltip('');
  }
};
