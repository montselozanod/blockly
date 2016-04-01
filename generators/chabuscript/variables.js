/**
 * @fileoverview Generating Chabuscript for variable blocks.
 * @author mmontse.lozano@gmail.com (Montse Lozano Dieck)
 */

 'use strict';

 goog.provide('Blockly.Chabuscript.variables');

 goog.require('Blockly.Chabuscript');

 Blockly.Chabuscript['var'] = function(block) {
   var dropdown_type = block.getFieldValue('type');
   var text_var_id = block.getFieldValue('var_id');
   // TODO: Assemble Chabuscript into code variable.
   var code = '...;\n';
   return code;
 };

 Blockly.Chabuscript['var_list'] = function(block) {
   var dropdown_type = block.getFieldValue('type');
   var text_list_id = block.getFieldValue('list_id');
   var value_set_list = Blockly.Chabuscript.valueToCode(block, 'set_list', Blockly.Chabuscript.ORDER_ATOMIC);
   // TODO: Assemble Chabuscript into code variable.
   var code = '...;\n';
   return code;
 };

 Blockly.Chabuscript['variables_exist_var'] = function(block) {
   var text_var_name = block.getFieldValue('var_name');
   // TODO: Assemble Chabuscript into code variable.
   var code = text_var_name;
   // TODO: Change ORDER_NONE to the correct strength.
   return [code, Blockly.Chabuscript.ORDER_NONE];
 };
