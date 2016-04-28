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
     var type;
     switch(dropdown_type)
     {
       case "number":
        address = numberMem++;
        type = Type.NUMBER;
        break;
       case "string":
        address = stringMem++;
        type = Type.STRING;
        break;
       case "boolean":
        address = boolMem++;
        type = Type.BOOL;
        break

     }
     addLocalVar(text_var_id, type, address, 0);
     var code = dropdown_type + " " + text_var_id;
     return code;
   } else {
     var message = String.format(errors['DUPLICATE_VARIABLE_NAME'], text_var_id);
     printToShell(message, true);
   }
 };


 Blockly.Chabuscript['variables_exist_var'] = function(block) {
   var text_var_name = block.getFieldValue('var_name');
   var input = checkParamType(text_var_name);
   var dim;
   if(text_var_name in varTable)
   {
      dim = varTable[text_var_name][TableVarAccess.DIM];
   }else{
     dim = 0;
   }

   //pOper.push(input);
   return {type: input[0], address: input[1], dimension: dim};
 };
