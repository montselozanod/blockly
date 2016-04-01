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
  if(funcIsUnique(text_funcname) && varIsUnique(text_funcname))
  {
    var proc = {
      'scope': 'local',
      'id': 'start',
      'type': 'void',
      'params':
    };
    addProc('main', proc);
    var code = '...;\n';
    return code;
  }else{
    console.log(errors[]
  }

};

Blockly.Chabuscript['main'] = function(block) {
  var statements_maint_stmts = Blockly.Chabuscript.statementToCode(block, 'maint_stmts');
  // TODO: Assemble Chabuscript into code variable.
  var proc = {
    'scope': 'local',
    'id': 'start',
    'type': 'void',
  };
  addProc('main', proc);
  var code = '';
  return code;
};

Blockly.JavaScript['func_param'] = function(block) {
  var dropdown_param_type = block.getFieldValue('param_type');
  var text_param_name = block.getFieldValue('param_name');
  var code = dropdown_param_type + ':' +text_param_name;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
