'use strict';

goog.provide('Blockly.Chabuscript.loops');

goog.require('Blockly.Chabuscript');


Blockly.Chabuscript['loop_while'] = function(block) {
  var value_while_cond = Blockly.Chabuscript.valueToCode(block, 'while_cond', Blockly.Chabuscript.ORDER_ATOMIC);
  var statements_while_stmts = Blockly.Chabuscript.statementToCode(block, 'while_stmts');
  var code = 'repeat while(' + value_while_cond + ')' + statements_while_stmts + 'end;';
  return code;
};
