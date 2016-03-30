'use strict';

goog.provide('Blockly.Blocks.loops');

goog.require('Blockly.Blocks');

Blockly.Blocks['loop_while'] = {
  init: function() {
    this.appendValueInput("while_cond")
        .setCheck(null)
        .appendField("while");
    this.appendStatementInput("while_stmts")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
