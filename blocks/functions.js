'use strict';

goog.provide('Blockly.Blocks.functions');

goog.require('Blockly.Blocks');


Blockly.Blocks['function'] = {
  init: function() {
    this.appendValueInput("funcSkeleton")
        .setCheck("params")
        .appendField("function")
        .appendField(new Blockly.FieldTextInput("default"), "funcName")
        .appendField("type:")
        .appendField(new Blockly.FieldDropdown([["void", "void"], ["boolean", "boolean"], ["number", "number"], ["string", "string"]]), "type")
        .appendField("params:");
    this.appendStatementInput("stmts")
        .setCheck(null)
        .appendField("do");
    this.appendValueInput("rtnVar")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("return");
    this.setColour(300);
    this.setTooltip('');
  }
};

Blockly.Blocks['main'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("start");
    this.appendStatementInput("maint_stmts")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end");
    this.setColour(300);
    this.setTooltip('');
  }
};

Blockly.Blocks['func_param'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["number", "NUMBER"], ["string", "STRING"], ["bool", "BOOL"]]), "param_type")
        .appendField(new Blockly.FieldTextInput("NAME"), "param_name");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(300);
    this.setTooltip('');
  }
};
