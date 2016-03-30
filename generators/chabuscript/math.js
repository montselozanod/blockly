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

Blockly.JavaScript['term'] = function(block) {
  var value_opizq = Blockly.JavaScript.valueToCode(block, 'opIzq', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_opder = Blockly.JavaScript.valueToCode(block, 'opDer', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['exp'] = function(block) {
  var value_opizq = Blockly.JavaScript.valueToCode(block, 'opIzq', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_opder = Blockly.JavaScript.valueToCode(block, 'opDer', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
