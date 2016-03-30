'use strict';

goog.provide('Blockly.Chabuscript.functions');

goog.require('Blockly.Chabuscript');

Blockly.Chabuscript['function'] = function(block) {
  var text_funcname = block.getFieldValue('funcName');
  var dropdown_type = block.getFieldValue('type');
  var value_funcskeleton = Blockly.Chabuscript.valueToCode(block, 'funcSkeleton', Blockly.Chabuscript.ORDER_ATOMIC);
  var statements_stmts = Blockly.Chabuscript.statementToCode(block, 'stmts');
  var value_rtnvar = Blockly.Chabuscript.valueToCode(block, 'rtnVar', Blockly.Chabuscript.ORDER_ATOMIC);
  // TODO: Assemble Chabuscript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Chabuscript['main'] = function(block) {
  var statements_maint_stmts = Blockly.Chabuscript.statementToCode(block, 'maint_stmts');
  // TODO: Assemble Chabuscript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Chabuscript['func_params'] = function(block) {
  var dropdown_param_type = block.getFieldValue('param_type');
  var text_param_name = block.getFieldValue('param_name');
  var value_paramname = Blockly.Chabuscript.valueToCode(block, 'paramName', Blockly.Chabuscript.ORDER_ATOMIC);
  // TODO: Assemble Chabuscript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Chabuscript.ORDER_NONE];
};
