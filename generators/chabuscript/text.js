'use strict';

goog.provide('Blockly.Chabuscript.text');

goog.require('Blockly.Chabuscript');

Blockly.Chabuscript['print'] = function(block) {
  var value_print_stmt = Blockly.Chabuscript.valueToCode(block, 'print-stmt', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'print' + value_print_stmt + ';';
  return code;
};


Blockly.Chabuscript['print_ctestring'] = function(block) {
  var text_print_txt = block.getFieldValue('print_txt');
  var code = 'print' + text_print_txt+ ';';
  return code;
};
