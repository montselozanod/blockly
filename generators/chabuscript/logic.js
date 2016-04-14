'use strict';

goog.provide('Blockly.Chabuscript.logic');

goog.require('Blockly.Chabuscript');

Blockly.Chabuscript['logic_if'] = function(block) {
  var value_if = Blockly.Chabuscript.valueToCode(block, 'IF', Blockly.Chabuscript.ORDER_ATOMIC);
  var statements_if_do = Blockly.Chabuscript.statementToCode(block, 'IF_DO');
  var code = 'if' + value_if + statements_if_do + 'end';
  return code;
};

Blockly.Chabuscript['logic_if_else'] = function(block) {
  var value_if = Blockly.Chabuscript.valueToCode(block, 'IF', Blockly.Chabuscript.ORDER_ATOMIC);
  var statements_if_do = Blockly.Chabuscript.statementToCode(block, 'IF_DO');
  var statements_else_do = Blockly.Chabuscript.statementToCode(block, 'ELSE_DO');
  var code = 'if' + value_if + statements_if_do + 'else' + statements_else_do + 'end;';
  return code;
};

Blockly.JavaScript['logic_if_elsif_else'] = function(block) {
  var value_if = Blockly.JavaScript.valueToCode(block, 'IF', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_if_do = Blockly.JavaScript.statementToCode(block, 'IF_DO');
  var value_elsif = Blockly.JavaScript.valueToCode(block, 'ELSIF', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_elsif_do = Blockly.JavaScript.statementToCode(block, 'ELSIF_DO');
  var statements_else_do = Blockly.JavaScript.statementToCode(block, 'ELSE_DO');
  var code = 'if' + value_if + statements_if_do + 'elif' + value_elsif + statements_elsif_do + 'else' + statements_else_do + 'end;';
  return code;
};

Blockly.Chabuscript['boolean_compare_expression'] = function(block) {
  var value_left = Blockly.Chabuscript.valueToCode(block, 'left', Blockly.Chabuscript.ORDER_ATOMIC);
  var dropdown_compare = block.getFieldValue('compare');
  var value_right = Blockly.Chabuscript.valueToCode(block, 'right', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = value_left + dropdown_compare + value_right;

  return code;
};

Blockly.Chabuscript['boolean_expression'] = function(block) {
  var dropdown_flag = block.getFieldValue('flag');

  return dropdown_flag;
};
