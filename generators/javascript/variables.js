/**
 * @fileoverview Generating JavaScript for variable blocks.
 * @author mmontse.lozano@gmail.com (Montse Lozano Dieck)
 */

 'use strict';

 goog.provide('Blockly.JavaScript.variables');

 goog.require('Blockly.JavaScript');

 Blockly.JavaScript['var'] = function(block) {
   var dropdown_type = block.getFieldValue('type');
   var text_var_id = block.getFieldValue('var_id');

   if(varIsUnique(text_var_id))
   {

   }else{}
   var code = '...;\n';
   return code;
 };


 Blockly.JavaScript['variables_exist_var'] = function(block) {
   var text_var_name = block.getFieldValue('var_name');
   var code = text_var_name;
   return [code, Blockly.JavaScript.ORDER_NONE];
 };
