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
