'use strict';

goog.provide('Blockly.Blocks.lists');

goog.require('Blockly.Blocks');

Blockly.Blocks['list_empty'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("list")
        .appendField(new Blockly.FieldDropdown([["number", "number"], ["string", "string"], ["boolean", "boolean"]]), "type")
        .appendField(new Blockly.FieldTextInput("NAME"), "list_name")
        .appendField("size")
        .appendField(new Blockly.FieldTextInput("VALUE"), "size");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
  }
};

Blockly.Blocks['list_values'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("list")
        .appendField(new Blockly.FieldDropdown([["number", "number"], ["string", "string"], ["boolean", "boolean"]]), "param_type")
        .appendField(new Blockly.FieldTextInput("NAME"), "listName_name");
    this.appendStatementInput("values");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
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
  }
};

Blockly.Blocks['list_put'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("in list")
        .appendField(new Blockly.FieldTextInput("NAME"), "list_name")
        .appendField("put item")
        .appendField(new Blockly.FieldTextInput("ITEM"), "item")
        .appendField("at")
        .appendField(new Blockly.FieldTextInput("INDEX"), "index");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
  }
};

  Blockly.Blocks['remove_item'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("in list")
          .appendField(new Blockly.FieldTextInput("NAME"), "list_ITEM")
          .appendField("remove item at")
          .appendField(new Blockly.FieldTextInput("INDEX"), "index");
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(90);
      this.setTooltip('');
    }
  };
