'use strict';

goog.provide('Blockly.Chabuscript.text');

goog.require('Blockly.Chabuscript');

Blockly.Chabuscript['print'] = function(block) {
  var value_print_stmt = Blockly.Chabuscript.valueToCode(block, 'print-stmt', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'print' + value_print_stmt + ';';

  var op, arg1, arg2, result;

  op = Operation.PRINT;
  arg1 = null;
  arg2 = null;
  // the value to code should return the address number of what to print
  quadruples.push([op, arg1, arg2, value_print_stmt]);

  return quadruples.length-1;
};


Blockly.Chabuscript['print_ctestring'] = function(block) {
  var text_print_txt = block.getFieldValue('print_txt');
  var code = 'print' + text_print_txt + ';';

  var op, arg1, arg2, result;

  op = Operation.PRINT;
  arg1 = null;
  arg2 = null;
  address = constMem++;
  constants[address] = text_print_txt;
  quadruples.push([op, arg1, arg2, address]);

  return quadruples.length-1;
};
