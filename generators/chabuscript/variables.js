/**
 * @fileoverview Generating Chabuscript for variable blocks.
 * @author mmontse.lozano@gmail.com (Montse Lozano Dieck)
 */

 'use strict';

 goog.provide('Blockly.Chabuscript.variables');

 goog.require('Blockly.Chabuscript');

 Blockly.ChabuScript['var'] = function(block) {
   var dropdown_type = block.getFieldValue('type');
   var text_var_id = block.getFieldValue('var_id');
   // TODO: Assemble ChabuScript into code variable.
   var code = '...;\n';
   return code;
 };

 Blockly.ChabuScript['var_list'] = function(block) {
   var dropdown_type = block.getFieldValue('type');
   var text_list_id = block.getFieldValue('list_id');
   var value_set_list = Blockly.ChabuScript.valueToCode(block, 'set_list', Blockly.ChabuScript.ORDER_ATOMIC);
   // TODO: Assemble ChabuScript into code variable.
   var code = '...;\n';
   return code;
 };
