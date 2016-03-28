'use strict';

goog.provide('Blockly.Chabuscript.functions');

goog.require('Blockly.Chabuscript');

Blockly.JavaScript['function'] = function(block) {
  var text_funcname = block.getFieldValue('funcName');
  var dropdown_type = block.getFieldValue('type');
  var value_funcskeleton = Blockly.JavaScript.valueToCode(block, 'funcSkeleton', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_stmts = Blockly.JavaScript.statementToCode(block, 'stmts');
  var value_rtnvar = Blockly.JavaScript.valueToCode(block, 'rtnVar', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['main'] = function(block) {
  var statements_maint_stmts = Blockly.JavaScript.statementToCode(block, 'maint_stmts');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
