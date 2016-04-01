'use strict';

goog.provide('Blockly.Blocks.lists');

goog.require('Blockly.Blocks');

Blockly.Blocks['list_values'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("list")
        .appendField(new Blockly.FieldDropdown([["number", "NUMBER"], ["string", "STRING"], ["bool", "BOOL"]]), "param_type")
        .appendField(new Blockly.FieldTextInput("NAME"), "listName_name");
    this.appendStatementInput("values");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['list_item'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("item")
        .appendField(new Blockly.FieldTextInput("VALUE"), "list_ITEM");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(75);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
