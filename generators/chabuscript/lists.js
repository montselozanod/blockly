/**
 * @fileoverview Generating Chabuscript for variable blocks.
 * @author mmontse.lozano@gmail.com (Montse Lozano Dieck)
 */

 'use strict';

 goog.provide('Blockly.Chabuscript.lists');

 goog.require('Blockly.Chabuscript');

 Blockly.Python['lists_create_empty'] = function(block) {
   // Create an empty list.
   return ['[]', Blockly.Python.ORDER_ATOMIC];
 };

 Blockly.Python['lists_create_with'] = function(block) {
   // Create a list with any number of elements of any type.
   var code = new Array(block.itemCount_);
   for (var n = 0; n < block.itemCount_; n++) {
     code[n] = Blockly.Python.valueToCode(block, 'ADD' + n,
         Blockly.Python.ORDER_NONE) || 'None';
   }
   code = '[' + code.join(', ') + ']';
   return [code, Blockly.Python.ORDER_ATOMIC];
 };
