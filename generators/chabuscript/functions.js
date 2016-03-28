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

Blockly.JavaScript['func_params'] = function(block) {
  var dropdown_param_type = block.getFieldValue('param_type');
  var text_param_name = block.getFieldValue('param_name');
  var value_paramname = Blockly.JavaScript.valueToCode(block, 'paramName', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
