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
   // TODO: checar esto
   if(varIsUnique(text_var_id))
   {

   }else{}
   var code = '...;\n';
   return code;
 };


 Blockly.Chabuscript['variables_exist_var'] = function(block) {
   var text_var_name = block.getFieldValue('var_name');
   var code = text_var_name;
   return [code, Blockly.Chabuscript.ORDER_NONE];
 };
