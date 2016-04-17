'use strict';

goog.provide('Blockly.Chabuscript.logic');

goog.require('Blockly.Chabuscript');

Blockly.Chabuscript['logic_if'] = function(block) {
  var value_if = Blockly.Chabuscript.valueToCode(block, 'IF', Blockly.Chabuscript.ORDER_ATOMIC);

  var jump_false = quadruples.length; // index of last quad
  quadruples.push([GOTOF, quadruples[value_if][3], null, 0]); // REVIEW: result from previous quad - uadruples[value_if][3]

  var statements_if_do = Blockly.Chabuscript.statementToCode(block, 'IF_DO');
  quadruples[jump_false][3] = quadruples.length; // changing gotoF

  var code = 'if' + value_if + statements_if_do + 'end';
  return code;
};

Blockly.Chabuscript['logic_if_else'] = function(block) {
  var value_if = Blockly.Chabuscript.valueToCode(block, 'IF', Blockly.Chabuscript.ORDER_ATOMIC);

  var jump_false = quadruples.length;
  var jump;
  quadruples.push([GOTOF, quadruples[value_if][3], null, 0]);

  var statements_if_do = Blockly.Chabuscript.statementToCode(block, 'IF_DO');

  jump = quadruples.length;
  quadruples.push(GOTO, null, null, 0);
  quadruples[jump_false][3] = quadruples.length;

  var statements_else_do = Blockly.Chabuscript.statementToCode(block, 'ELSE_DO');

  quadruples[jump][3] = quadruples.length;

  var code = 'if' + value_if + statements_if_do + 'else' + statements_else_do + 'end;';
  return code;
};

Blockly.Chabuscript['logic_if_elsif_else'] = function(block) {

  //REVIEW: toda la logica de los goto y gotoF de esto
  
  var value_if = Blockly.Chabuscript.valueToCode(block, 'IF', Blockly.Chabuscript.ORDER_ATOMIC);

  var jump_false = quadruples.length;
  var jump;
  quadruples.push([GOTOF, quadruples[value_if][3], null, 0]);

  var statements_if_do = Blockly.Chabuscript.statementToCode(block, 'IF_DO');
  var value_elsif = Blockly.Chabuscript.valueToCode(block, 'ELSIF', Blockly.Chabuscript.ORDER_ATOMIC);

  jump = quadruples.length;
  quadruples.push([GOTOF, quadruples[value_elsif][3], null, 0]);
  quadruples[jump_false][3] = quadruples.length;
  jump_false = quadruples.length;

  var statements_elsif_do = Blockly.Chabuscript.statementToCode(block, 'ELSIF_DO');


  jump = quadruples.length;
  quadruples.push([GOTO, null, null, 0]);
  quadruples[jump_false][3] = quadruples.length;

  var statements_else_do = Blockly.Chabuscript.statementToCode(block, 'ELSE_DO');

  quadruples[jump][3] = quadruples.length;

  var code = 'if' + value_if + statements_if_do + 'elif' + value_elsif + statements_elsif_do + 'else' + statements_else_do + 'end;';
  return code;
};

Blockly.Chabuscript['boolean_compare_expression'] = function(block) {
  var value_left = Blockly.Chabuscript.valueToCode(block, 'left', Blockly.Chabuscript.ORDER_ATOMIC);
  var dropdown_compare = block.getFieldValue('compare');
  var value_right = Blockly.Chabuscript.valueToCode(block, 'right', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = value_left + dropdown_compare + value_right;

  var quad, op, arg1, arg2, result;

  if (dropdown_compare == "equals") {
    op = Operation.EQL
  } else if (dropdown_compare == "less") {
    op = Operation.LESS
  } else if (dropdown_compare == "greater") {
    op = Operation.GRT
  } else {
    op = Operation.DIFF
  }

  arg1 = boolMem++;
  arg2 = boolMem++;
  result = tmpBoolMem++;

  quadruples.push([op, arg1, arg2, result]);

  return quadruples.length-1; // return the quadruple index
};

Blockly.Chabuscript['boolean_expression'] = function(block) {
  var dropdown_flag = block.getFieldValue('flag');

  return dropdown_flag;
};
