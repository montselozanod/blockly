'use strict';

goog.provide('Blockly.Chabuscript.drawing');

goog.require('Blockly.Chabuscript');


Blockly.Chabuscript['color'] = function(block) {
  var value_red = Blockly.Chabuscript.valueToCode(block, 'red', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_green = Blockly.Chabuscript.valueToCode(block, 'green', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_blue = Blockly.Chabuscript.valueToCode(block, 'blue', Blockly.Chabuscript.ORDER_ATOMIC);
  // TODO: Assemble Chabuscript into code variable.
  var code = 'color(' + value_red + ',' + value_green + ',' + value_blue + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Chabuscript.ORDER_NONE];
};

Blockly.Chabuscript['draw'] = function(block) {
  var value_shape = Blockly.Chabuscript.valueToCode(block, 'shape', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_color = Blockly.Chabuscript.valueToCode(block, 'color', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_point_width = Blockly.Chabuscript.valueToCode(block, 'point-width', Blockly.Chabuscript.ORDER_ATOMIC);
  // TODO: Assemble Chabuscript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.Chabuscript['point'] = function(block) {
  var value_x = Blockly.Chabuscript.valueToCode(block, 'x', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_y = Blockly.Chabuscript.valueToCode(block, 'y', Blockly.Chabuscript.ORDER_ATOMIC);
  // TODO: Assemble Chabuscript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Chabuscript.ORDER_NONE];
};

Blockly.Chabuscript['line'] = function(block) {
  var value_point1 = Blockly.Chabuscript.valueToCode(block, 'point1', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_point2 = Blockly.Chabuscript.valueToCode(block, 'point2', Blockly.Chabuscript.ORDER_ATOMIC);
  // TODO: Assemble Chabuscript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Chabuscript.ORDER_NONE];
};

Blockly.Chabuscript['polygon'] = function(block) {
  var value_points = Blockly.Chabuscript.valueToCode(block, 'points', Blockly.Chabuscript.ORDER_ATOMIC);
  // TODO: Assemble Chabuscript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Chabuscript.ORDER_NONE];
};


Blockly.Chabuscript['circle'] = function(block) {
  var value_radius = Blockly.Chabuscript.valueToCode(block, 'radius', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_name = Blockly.Chabuscript.valueToCode(block, 'NAME', Blockly.Chabuscript.ORDER_ATOMIC);
  // TODO: Assemble Chabuscript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Chabuscript.ORDER_NONE];
};


Blockly.Chabuscript['rectangle'] = function(block) {
  var value_point = Blockly.Chabuscript.valueToCode(block, 'point', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_width = Blockly.Chabuscript.valueToCode(block, 'width', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_height = Blockly.Chabuscript.valueToCode(block, 'height', Blockly.Chabuscript.ORDER_ATOMIC);
  // TODO: Assemble Chabuscript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Chabuscript.ORDER_NONE];
};

Blockly.Chabuscript['background'] = function(block) {
  var value_color = Blockly.Chabuscript.valueToCode(block, 'color', Blockly.Chabuscript.ORDER_ATOMIC);
  // TODO: Assemble Chabuscript into code variable.
  var code = '...;\n';
  return code;
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
