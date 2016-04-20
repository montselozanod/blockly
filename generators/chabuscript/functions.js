'use strict';

goog.provide('Blockly.Chabuscript.functions');

goog.require('Blockly.Chabuscript');


Blockly.Chabuscript['func_block'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var text_funcname = block.getFieldValue('funcName');
  var statements_params = Blockly.Chabuscript.statementToCode(block, 'params');
  var statements_stmts = Blockly.Chabuscript.statementToCode(block, 'stmts');
  var code = 'function ' + dropdown_type + ' ' + text_funcname + 'params:(' + statements_params+'){' + statements_stmts + '} end';

  if(funcIsUnique(text_funcname))
  {

  }else{
    var message = String.format(errors['DUPLICATE_FUNCTION_NAME'], text_funcname);
    printToShell(message, true); // we are printing an error
  }
  return code;
};

Blockly.Chabuscript['main'] = function(block) {
  var statements_maint_stmts = Blockly.Chabuscript.statementToCode(block, 'maint_stmts');
  var code = 'start {' + statements_maint_stmts + '} end';
  return code;
};


Blockly.Chabuscript['param_block'] = function(block) {
  var dropdown_param_type = block.getFieldValue('param_type');
  var text_param_name = block.getFieldValue('param_name');
  var code = dropdown_param_type + ' ' + text_param_name+ ';';
  return code;
};

Blockly.Chabuscript['return_stmt'] = function(block) {
  var text_value = block.getFieldValue('value');
  var code = 'return ' + text_value + ';';
  return code;
};

Blockly.Chabuscript['invokefuncreturn'] = function(block) {
  var text_func_name = block.getFieldValue('func_name');
  var value_params = Blockly.Chabuscript.valueToCode(block, 'params', Blockly.Chabuscript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Chabuscript['invokevoidfunc'] = function(block) {
  var text_func_id = block.getFieldValue('func_id');
  var value_name = Blockly.Chabuscript.valueToCode(block, 'NAME', Blockly.Chabuscript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Chabuscript['func_param'] = function(block) {
  var text_param = block.getFieldValue('param');
  return text_param;
};
