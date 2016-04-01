'use strict';

goog.provide('Blockly.JavaScript.math');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['assign'] = function(block) {
  var value_opizq = Blockly.JavaScript.valueToCode(block, 'opIzq', Blockly.JavaScript.ORDER_ATOMIC);
  var value_opder = Blockly.JavaScript.valueToCode(block, 'opDer', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_opizq + '='+value_opder+';';
  return code;
};

Blockly.JavaScript['term'] = function(block) {
  var value_opizq = Blockly.JavaScript.valueToCode(block, 'opIzq', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_opder = Blockly.JavaScript.valueToCode(block, 'opDer', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_opizq + ' '+ dropdown_op + ' '+value_opder;
  return [code, Blockly.JavaScript.ORDER_MULTIPLICATION];
};

Blockly.JavaScript['exp'] = function(block) {
  var value_opizq = Blockly.JavaScript.valueToCode(block, 'opIzq', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_opder = Blockly.JavaScript.valueToCode(block, 'opDer', Blockly.JavaScript.ORDER_ATOMIC);

  var code = value_opizq + ' '+ dropdown_op + ' '+value_opder;

  return [code, Blockly.JavaScript.ORDER_ADDITION];
};


Blockly.JavaScript['random'] = function(block) {
  var value_min = Blockly.JavaScript.valueToCode(block, 'min', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max = Blockly.JavaScript.valueToCode(block, 'max', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'random num min:' + value_min + ' max:' + value_max;
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['paren'] = function(block) {
  var value_expression = Blockly.JavaScript.valueToCode(block, 'expression', Blockly.JavaScript.ORDER_ATOMIC);

  var code = '(' + value_expression + ')';

  return [code, Blockly.JavaScript.ORDER_NONE];
};
