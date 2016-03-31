'use strict';

goog.provide('Blockly.Chabuscript.text');

goog.require('Blockly.Chabuscript');

Blockly.Chabuscript['print'] = function(block) {
  var value_print_stmt = Blockly.Chabuscript.valueToCode(block, 'print-stmt', Blockly.Chabuscript.ORDER_ATOMIC);
  // TODO: Assemble Chabuscript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.Chabuscript['print_ctestring'] = function(block) {
  var text_print_txt = block.getFieldValue('print_txt');
  // TODO: Assemble Chabuscript into code variable.
  var code = '...;\n';
  return code;
};
