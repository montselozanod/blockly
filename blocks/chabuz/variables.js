'use strict';

goog.provide('Blockly.Blocks.variables');

goog.require('Blockly.Blocks');

Blockly.Blocks['var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set")
        .appendField(new Blockly.FieldDropdown([["number", "number"], ["string", "string"], ["boolean", "boolean"]]), "type")
        .appendField(new Blockly.FieldTextInput("default"), "var_id");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['var_list'] = {
  init: function() {
    this.appendValueInput("set_list")
        .setCheck(["Number", "Boolean", "String"])
        .appendField("list")
        .appendField(new Blockly.FieldDropdown([["number", "number"], ["string", "string"], ["boolean", "boolean"]]), "type")
        .appendField(new Blockly.FieldTextInput("default"), "list_id");
    this.setColour(280);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
