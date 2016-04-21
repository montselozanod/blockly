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

     //var size = parseInt(text_size);
     //addLocalVar(text_list_name, type, address, 1, size);

   }

   return '';
 };

 Blockly.Chabuscript['list_values'] = function(block) {
   var dropdown_param_type = block.getFieldValue('param_type');
   var text_listname_name = block.getFieldValue('listName_name');
   Blockly.Chabuscript.statementToCode(block, 'values');

   if(varIsUnique(text_list_name) && funcIsUnique(text_list_name))
   {
     addLocalVar(text_list_name, type, address, 1);
   }
   listElements = 0;
   return '';
 };

 Blockly.Chabuscript['list_item'] = function(block) {
  var text_list_item = block.getFieldValue('list_ITEM');
  // REVIEW: que pasa con la , cuando es el ultimo item
  var code = text_list_item + ',';

  listElements = listElements++;
  return code;
};

Blockly.Chabuscript['list_put'] = function(block) {
  var text_list_name = block.getFieldValue('list_name');
  var text_item = block.getFieldValue('item');
  var text_index = block.getFieldValue('index');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.Chabuscript['remove_item'] = function(block) {
  var text_list_item = block.getFieldValue('list_ITEM');
  var text_index = block.getFieldValue('index');
  // REVIEW: con gramatica
  var code = 'list' + text_list_item + 'remove' + text_index + ';';
  return code;
};
