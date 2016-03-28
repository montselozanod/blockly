'use strict';

goog.provide('Blockly.Chabuscript.drawing');

goog.require('Blockly.Chabuscript');



Blockly.Chabuscript['color'] = function(block) {
  var value_red = Blockly.JavaScript.valueToCode(block, 'red', Blockly.JavaScript.ORDER_ATOMIC);
  var value_green = Blockly.JavaScript.valueToCode(block, 'green', Blockly.JavaScript.ORDER_ATOMIC);
  var value_blue = Blockly.JavaScript.valueToCode(block, 'blue', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['draw'] = function(block) {
  var value_shape = Blockly.JavaScript.valueToCode(block, 'shape', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_point_width = Blockly.JavaScript.valueToCode(block, 'point-width', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.JavaScript['point'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



Blockly.Chabuscript['colour_rgb'] = function(block) {
  // Compose a colour from RGB components expressed as percentages.
  var red = Blockly.Chabuscript.valueToCode(block, 'RED',
      Blockly.Chabuscript.ORDER_NONE) || 0;
  var green = Blockly.Chabuscript.valueToCode(block, 'GREEN',
      Blockly.Chabuscript.ORDER_NONE) || 0;
  var blue = Blockly.Chabuscript.valueToCode(block, 'BLUE',
      Blockly.Chabuscript.ORDER_NONE) || 0;

  var code = 'color' + '(' + red + ', ' + green + ', ' + blue + ')';
  return [code, Blockly.Chabuscript.ORDER_FUNCTION_CALL];
};
