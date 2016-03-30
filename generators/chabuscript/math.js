'use strict';

goog.provide('Blockly.Chabuscript.math');

goog.require('Blockly.Chabuscript');

Blockly.JavaScript['assign'] = function(block) {
  var value_opizq = Blockly.JavaScript.valueToCode(block, 'opIzq', Blockly.JavaScript.ORDER_ATOMIC);
  var value_opder = Blockly.JavaScript.valueToCode(block, 'opDer', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
