'use strict';

goog.provide('Blockly.Chabuscript.colour');

goog.require('Blockly.Chabuscript');

Blockly.Chabuscript['colour_picker'] = function(block) {
  // Colour picker.
  var code = '\'' + block.getFieldValue('COLOUR') + '\'';
  return [code, Blockly.Chabuscript.ORDER_ATOMIC];
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
