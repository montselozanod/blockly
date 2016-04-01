'use strict';

goog.provide('Blockly.Chabuscript.math');

goog.require('Blockly.Chabuscript');

Blockly.Chabuscript['assign'] = function(block) {
  var value_opizq = Blockly.Chabuscript.valueToCode(block, 'opIzq', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_opder = Blockly.Chabuscript.valueToCode(block, 'opDer', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = value_opizq + '='+value_opder+';';
  return code;
};

Blockly.Chabuscript['term'] = function(block) {
  var value_opizq = Blockly.Chabuscript.valueToCode(block, 'opIzq', Blockly.Chabuscript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_opder = Blockly.Chabuscript.valueToCode(block, 'opDer', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = value_opizq + ' '+ dropdown_op + ' '+value_opder;
  return [code, Blockly.Chabuscript.ORDER_MULTIPLICATION];
};

Blockly.Chabuscript['exp'] = function(block) {
  var value_opizq = Blockly.Chabuscript.valueToCode(block, 'opIzq', Blockly.Chabuscript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_opder = Blockly.Chabuscript.valueToCode(block, 'opDer', Blockly.Chabuscript.ORDER_ATOMIC);

  var code = value_opizq + ' '+ dropdown_op + ' '+value_opder;

  return [code, Blockly.Chabuscript.ORDER_ADDITION];
};


Blockly.Chabuscript['random'] = function(block) {
  var value_min = Blockly.Chabuscript.valueToCode(block, 'min', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_max = Blockly.Chabuscript.valueToCode(block, 'max', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'random number min:' + value_min + ' max:' + value_max;
  return [code, Blockly.Chabuscript.ORDER_NONE];
};


Blockly.JavaScript['paren'] = function(block) {
  var value_expression = Blockly.JavaScript.valueToCode(block, 'expression', Blockly.JavaScript.ORDER_ATOMIC);

  var code = '(' + value_expression + ')';

  return [code, Blockly.JavaScript.ORDER_NONE];
};
