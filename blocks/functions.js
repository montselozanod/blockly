'use strict';

goog.provide('Blockly.Blocks.functions');

goog.require('Blockly.Blocks');


Blockly.Blocks['func_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("function")
        .appendField("type")
        .appendField(new Blockly.FieldDropdown([["void", "void"], ["number", "NUMBER"], ["string", "STRING"], ["bool", "BOOL"]]), "type")
        .appendField(new Blockly.FieldTextInput("NAME"), "funcName");
    this.appendStatementInput("params")
        .appendField("params:");
    this.appendStatementInput("stmts")
        .appendField("do");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("end");
    this.setInputsInline(true);
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

Blockly.Blocks['param_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["number", "NUMBER"], ["string", "STRING"], ["bool", "BOOL"]]), "param_type")
        .appendField(new Blockly.FieldTextInput("NAME"), "param_name");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(315);
    this.setTooltip('');
  }
};


Blockly.Blocks['return_stmt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("return")
        .appendField(new Blockly.FieldTextInput("VALUE"), "value");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
    this.setTooltip('');
  }
};

Blockly.Blocks['invokefuncreturn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("function name"), "func_name")
        .appendField("(");
    this.appendValueInput("params")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['invokevoidfunc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldTextInput("function name"), "func_id");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['func_param'] = {
  init: function() {
    this.appendValueInput("param_name")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("param name"), "param");
    this.setInputsInline(false);
    this.setOutput(true, "param");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
