'use strict';

goog.provide('Blockly.Chabuscript.loops');

goog.require('Blockly.Chabuscript');


Blockly.JavaScript['loop_while'] = function(block) {
  var value_while_cond = Blockly.JavaScript.valueToCode(block, 'while_cond', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_while_stmts = Blockly.JavaScript.statementToCode(block, 'while_stmts');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
