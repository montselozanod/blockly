'use strict';

goog.provide('Blockly.Chabuscript.math');

goog.require('Blockly.Chabuscript');

Blockly.Chabuscript['assign'] = function(block) {
  var value_opizq = Blockly.Chabuscript.valueToCode(block, 'opIzq', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_opder = Blockly.Chabuscript.valueToCode(block, 'opDer', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = value_opizq + '=' + value_opder + ';';

  var op, arg1, arg2, result;

  op = Operation.ASSIGN;
  arg1 = tmpNumMem++;
  arg2 = null;
  result = numMem++;

  quadruples.push([op, arg1, arg2, result]);

  return quadruples.length-1;
};

Blockly.Chabuscript['term'] = function(block) {
  var value_opizq = Blockly.Chabuscript.valueToCode(block, 'opIzq', Blockly.Chabuscript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_opder = Blockly.Chabuscript.valueToCode(block, 'opDer', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = value_opizq + ' ' + dropdown_op + ' ' + value_opder;

  var op, arg1, arg2, result;

  if (dropdown_op == "MULT") {
    op = Operation.MULT;
  }
  else {
    op = Operation.DIV;
  }

  arg1 = numMem++;
  arg2 = numMem++;
  result = tmpNumMem++;

  quadruples.push([op, arg1, arg2, result]);

  return [quadruples.length-1, Blockly.Chabuscript.ORDER_MULTIPLICATION];
};

Blockly.Chabuscript['exp'] = function(block) {
  var value_opizq = Blockly.Chabuscript.valueToCode(block, 'opIzq', Blockly.Chabuscript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_opder = Blockly.Chabuscript.valueToCode(block, 'opDer', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = value_opizq + ' '+ dropdown_op + ' '+value_opder;

  var op, arg1, arg2, result;

  if (dropdown_op == "SUM") {
    op = Operation.SUM;
  }
  else {
    op = Operation.MINUS;
  }

  arg1 = numMem++;
  arg2 = numMem++;
  result = tmpNumMem++;

  quadruples.push([op, arg1, arg2, result]);

  return [quadruples.length-1, Blockly.Chabuscript.ORDER_ADDITION];
};


Blockly.Chabuscript['random'] = function(block) {
  var value_min = Blockly.Chabuscript.valueToCode(block, 'min', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_max = Blockly.Chabuscript.valueToCode(block, 'max', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'random num min:' + value_min + ' max:' + value_max;

  var op = Operation.RND; //random
  //var min =

  //quadruples.push([op, min, max, result]);

  return [code, Blockly.Chabuscript.ORDER_NONE];
};


Blockly.Chabuscript['paren'] = function(block) {
  var value_expression = Blockly.Chabuscript.valueToCode(block, 'expression', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = '(' + value_expression + ')';
  return [code, Blockly.Chabuscript.ORDER_NONE];
};
