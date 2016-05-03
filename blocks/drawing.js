'use strict';

goog.provide('Blockly.Blocks.drawing');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.drawing.HUE = 180;

Blockly.Blocks['color'] = {
  init: function() {
    this.appendValueInput("red")
        .setCheck("Number")
        .appendField("R");
    this.appendValueInput("green")
        .setCheck("Number")
        .appendField("G");
    this.appendValueInput("blue")
        .setCheck("Number")
        .appendField("B");
    this.setInputsInline(true);
    this.setOutput(true, "color");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['circle'] = {
  init: function() {
    this.appendDummyInput();
    this.appendValueInput("point")
        .appendField("CIRCLE at point");
    this.appendValueInput("radius")
        .appendField("with radius");
    this.setInputsInline(true);
    this.setOutput(true, "shape");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['point'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y");
    this.setOutput(true, "point");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['line'] = {
  init: function() {
    this.appendValueInput("point1")
        .setCheck("point")
        .appendField("LINE from Point");
    this.appendValueInput("point2")
        .setCheck("point")
        .appendField("to Point");
    this.setInputsInline(true);
    this.setOutput(true, "shape");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['polygon'] = {
  init: function() {
    this.appendValueInput("point")
        .setCheck(null)
        .appendField("POLYGON at Point");
    this.appendValueInput("num_sides")
        .setCheck(null)
        .appendField("Number of Sides");
    this.appendValueInput("side_length")
        .setCheck(null)
        .appendField("Side Length");
    this.setOutput(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['rectangle'] = {
  init: function() {
    this.appendValueInput("point")
        .setCheck("point")
        .appendField("RECTANGLE at Point");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("Width");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("Height");
    this.setOutput(true, "shape");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['background'] = {
  init: function() {
    this.appendValueInput("color")
        .setCheck("color")
        .appendField("set background");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['draw'] = {
  init: function() {
    this.appendValueInput("shape")
        .setCheck("shape")
        .appendField("shape");
    this.appendValueInput("color")
        .setCheck("color")
        .appendField("color");
    this.appendValueInput("point-width")
        .setCheck("Number")
        .appendField("width");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
