'use strict';

goog.provide('Blockly.Chabuscript.text');

goog.require('Blockly.Chabuscript');

Blockly.Chabuscript['print'] = function(block) {
  var value_print_stmt = Blockly.Chabuscript.valueToCode(block, 'print-stmt', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'print' + value_print_stmt + ';';

  // the value to code should return the address number of what to print
  quadruples.push([Operation.PRINT, value_print_stmt.address, null, null]);

  return '';
};


Blockly.Chabuscript['print_ctestring'] = function(block) {
  var text_print_txt = block.getFieldValue('print_txt');
  var code = 'print' + text_print_txt + ';';

  var address = addConstant(text_print_txt);
  quadruples.push([Operation.PRINT, address, null, null]);

  return '';
};
