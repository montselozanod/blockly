/**
 * @fileoverview Generating Chabuscript for variable blocks.
 * @author mmontse.lozano@gmail.com (Montse Lozano Dieck)
 */

 'use strict';

 goog.provide('Blockly.Chabuscript.lists');

 goog.require('Blockly.Chabuscript');


 Blockly.Chabuscript['list_empty'] = function(block) {
   var dropdown_type = block.getFieldValue('type');
   var text_list_name = block.getFieldValue('list_name');
   var text_size = block.getFieldValue('size');

   if(varIsUnique(text_list_name) && funcIsUnique(text_list_name))
   {
     var size = parseInt(text_size);
     var type = checkListType(dropdown_type);
     var startAddress = sumAddress(type, size); //sumar a direccion las casillas del size del arreglo
     addLocalVar(text_list_name, type, startAddress, 1, size);
     return '';
   }else{
     var message = String.format(errors['DUPLICATE_VARIABLE_NAME'], text_list_name);
     printToShell(message, true);
   }


 };

 Blockly.Chabuscript['list_values'] = function(block) {
   var dropdown_param_type = block.getFieldValue('param_type');
   var text_listname_name = block.getFieldValue('listName_name');
   Blockly.Chabuscript.statementToCode(block, 'values');

   if(varIsUnique(text_list_name) && funcIsUnique(text_list_name))
   {
     var type = checkListType(dropdown_param_type);
     var startAddress = sumAddress(type, listElements); //sumar a direccion las casillas del size del arreglo
     addLocalVar(text_list_name, type, startAddress, 1, listElements+1); // size is always +1, but index starts with zero
     listElements = 0;
     return '';
   }else{
     var message = String.format(errors['DUPLICATE_VARIABLE_NAME'], text_listname_name);
     printToShell(message, true);
   }
 };

 Blockly.Chabuscript['list_item'] = function(block) {
  var text_list_item = block.getFieldValue('list_ITEM');
  // REVIEW: que pasa con la , cuando es el ultimo item
  var code = text_list_item + ',';

  listElements = listElements++; //es el index empezando desde cero
  return '';
};

Blockly.Chabuscript['list_put'] = function(block) {
  var text_list_name = block.getFieldValue('list_name');
  var text_item = block.getFieldValue('item');
  var text_index = block.getFieldValue('index');

  var index = parseInt(text_index);
  if(validateListAccess(index, text_index, text_list_name))
  {

      //TODO check type of textItem and list type
      var op = Operation.PUT;
      quadruples.push([op, ])
      return '';
  }
};


Blockly.Chabuscript['remove_item'] = function(block) {
  var text_list_name = block.getFieldValue('list_ITEM');
  var text_index = block.getFieldValue('index');
  // REVIEW: con gramatica
  var code = 'list' + text_list_item + 'remove' + text_index + ';';

  var index = parseInt(text_index);
  if(validateListAccess(index, text_index, text_list_name))
  {
    var op = Operation.REMOVE;
    var address = varTable[text_list_name][1] + index;
    quadruples.push([op, , address, null, null]);
    return '';
  }

};
