'use strict';

goog.provide('Blockly.JavaScript.text');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['print'] = function(block) {
  var value_print_stmt = Blockly.JavaScript.valueToCode(block, 'print-stmt', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.JavaScript['print_ctestring'] = function(block) {
  var text_print_txt = block.getFieldValue('print_txt');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
