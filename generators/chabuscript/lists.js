/**
 * @fileoverview Generating Chabuscript for variable blocks.
 * @author mmontse.lozano@gmail.com (Montse Lozano Dieck)
 */

 'use strict';

 goog.provide('Blockly.Chabuscript.lists');

 goog.require('Blockly.Chabuscript');

 Blockly.Chabuscript['list_values'] = function(block) {
   var dropdown_param_type = block.getFieldValue('param_type');
   var text_listname_name = block.getFieldValue('listName_name');
   var statements_values = Blockly.JavaScript.statementToCode(block, 'values');
   // TODO: Assemble JavaScript into code variable.
   var code = '...;\n';
   return code;
 };

 Blockly.Chabuscript['lists_create_empty'] = function(block) {
   // Create an empty list.
   return ['[]', Blockly.Chabuscript.ORDER_ATOMIC];
 };

 Blockly.Chabuscript['lists_create_with'] = function(block) {
   // Create a list with any number of elements of any type.
   var code = new Array(block.itemCount_);
   for (var n = 0; n < block.itemCount_; n++) {
     code[n] = Blockly.Chabuscript.valueToCode(block, 'ADD' + n,
         Blockly.Chabuscript.ORDER_NONE) || 'None';
   }
   code = '[' + code.join(', ') + ']';
   return [code, Blockly.Chabuscript.ORDER_ATOMIC];
 };
