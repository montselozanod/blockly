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

   if(varIsUnique(text_var_id) && funcIsUnique(text_var_id))
   {
     var address;
     switch(dropdown_type)
     {
       case "number":
        address = numberMem++;
        break;
       case "string":
        address = stringMem++;
        break;
       case "boolean":
        address = boolMem++;
        break

     }
     addLocalVar(text_var_id, dropdown_type, address);
     var code = dropdown_type + " " + text_var_id;
     return code;
   } else {
     var message = errors['DUPLICATE_VARIABLE_NAME'];
     printToShell(message, true);
   }
 };


 Blockly.Chabuscript['variables_exist_var'] = function(block) {
   var text_var_name = block.getFieldValue('var_name');
   var code = text_var_name;
   //check that variable exists
   if(varExists(code))
   {
     return code;
   }else{
     var message = errors['UNDECLARED_VARIABLE'];
     printToShell(message, true);
   }

 };
