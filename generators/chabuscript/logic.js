'use strict';

goog.provide('Blockly.Chabuscript.logic');

goog.require('Blockly.Chabuscript');

Blockly.Chabuscript['logic_if'] = function(block) {
  var value_if = Blockly.Chabuscript.valueToCode(block, 'IF', Blockly.Chabuscript.ORDER_ATOMIC);
  var statements_do = Blockly.Chabuscript.statementToCode(block, 'DO');
  // TODO: Assemble Chabuscript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Chabuscript['logic_if_else'] = function(block) {
  var value_if = Blockly.Chabuscript.valueToCode(block, 'IF', Blockly.Chabuscript.ORDER_ATOMIC);
  var statements_do = Blockly.Chabuscript.statementToCode(block, 'DO');
  var statements_name = Blockly.Chabuscript.statementToCode(block, 'NAME');
  // TODO: Assemble Chabuscript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Chabuscript['logic_if_elsif_else'] = function(block) {
  var value_if = Blockly.Chabuscript.valueToCode(block, 'IF', Blockly.Chabuscript.ORDER_ATOMIC);
  var statements_do = Blockly.Chabuscript.statementToCode(block, 'DO');
  var value_elsif = Blockly.Chabuscript.valueToCode(block, 'ELSIF', Blockly.Chabuscript.ORDER_ATOMIC);
  var statements_name = Blockly.Chabuscript.statementToCode(block, 'NAME');
  var statements_else = Blockly.Chabuscript.statementToCode(block, 'ELSE');
  // TODO: Assemble Chabuscript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Chabuscript['boolean_compare_expression'] = function(block) {
  var value_left = Blockly.Chabuscript.valueToCode(block, 'left', Blockly.Chabuscript.ORDER_ATOMIC);
  var dropdown_compare = block.getFieldValue('compare');
  var value_right = Blockly.Chabuscript.valueToCode(block, 'right', Blockly.Chabuscript.ORDER_ATOMIC);
  // TODO: Assemble Chabuscript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Chabuscript.ORDER_NONE];
};

Blockly.Chabuscript['boolean_expression'] = function(block) {
  var dropdown_flag = block.getFieldValue('flag');
  // TODO: Assemble Chabuscript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Chabuscript.ORDER_NONE];
};
