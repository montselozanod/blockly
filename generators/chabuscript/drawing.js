'use strict';

goog.provide('Blockly.Chabuscript.drawing');

goog.require('Blockly.Chabuscript');


Blockly.Chabuscript['color'] = function(block) {
  var value_red = Blockly.Chabuscript.valueToCode(block, 'red', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_green = Blockly.Chabuscript.valueToCode(block, 'green', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_blue = Blockly.Chabuscript.valueToCode(block, 'blue', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'color(' + value_red + ',' + value_green + ',' + value_blue + ')';
  return code;
};

Blockly.Chabuscript['draw'] = function(block) {
  var value_shape = Blockly.Chabuscript.valueToCode(block, 'shape', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_color = Blockly.Chabuscript.valueToCode(block, 'color', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_point_width = Blockly.Chabuscript.valueToCode(block, 'point-width', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'draw shape ' + value_shape + ' ' + value_color + ' pw:' + value_point_width +';';
  return code;
};


Blockly.Chabuscript['point'] = function(block) {
  var value_x = Blockly.Chabuscript.valueToCode(block, 'x', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_y = Blockly.Chabuscript.valueToCode(block, 'y', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'point x:' + value_x + ' y:' + value_y;
  return code;
};

Blockly.Chabuscript['line'] = function(block) {
  var value_point1 = Blockly.Chabuscript.valueToCode(block, 'point1', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_point2 = Blockly.Chabuscript.valueToCode(block, 'point2', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'line p1:' + value_point1 + ' p2: ' + value_point2;
  return code;
};

Blockly.Chabuscript['polygon'] = function(block) {
  var value_points = Blockly.Chabuscript.valueToCode(block, 'points', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'polygon points ' + value_points;
  return code;
};


Blockly.Chabuscript['circle'] = function(block) {
  var value_point = Blockly.Chabuscript.valueToCode(block, 'point', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_radius = Blockly.Chabuscript.valueToCode(block, 'radius', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'circle at: ' + value_point + ' r:' + value_radius;
  return code;
};

Blockly.Chabuscript['rectangle'] = function(block) {
  var value_point = Blockly.Chabuscript.valueToCode(block, 'point', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_width = Blockly.Chabuscript.valueToCode(block, 'width', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_height = Blockly.Chabuscript.valueToCode(block, 'height', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'rectangle at:' + value_point + ' w:' + value_width + ' h:' + value_height;
  return code;
};

Blockly.Chabuscript['background'] = function(block) {
  var value_color = Blockly.Chabuscript.valueToCode(block, 'color', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'background ' + value_color;
  return code;
};
