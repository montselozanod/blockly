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
   // TODO: Assemble JavaScript into code variable.
   var code = '...;\n';
   return code;
 };

 Blockly.Chabuscript['list_values'] = function(block) {
   var dropdown_param_type = block.getFieldValue('param_type');
   var text_listname_name = block.getFieldValue('listName_name');
   var statements_values = Blockly.Chabuscript.statementToCode(block, 'values');
   var code = 'list' + dropdown_param_type + 'id=' + text_listname_name + '(' + statements_values + ')';

   addLocalVar(text_listname_name, type, address, 1);
   return code;
 };

 Blockly.Chabuscript['list_item'] = function(block) {
  var text_list_item = block.getFieldValue('list_ITEM');
  // REVIEW: que pasa con la , cuando es el ultimo item
  var code = text_list_item + ',';
  return code;
};

Blockly.Chabuscript['add_item'] = function(block) {
  var text_list_item = block.getFieldValue('list_ITEM');
  var text_new_item = block.getFieldValue('new_Item');
  // REVIEW: con gramatica
  var code = 'list' + text_list_item + 'add' + text_new_item + ';';
  return code;
};


Blockly.Chabuscript['remove_item'] = function(block) {
  var text_list_item = block.getFieldValue('list_ITEM');
  var text_index = block.getFieldValue('index');
  // REVIEW: con gramatica
  var code = 'list' + text_list_item + 'remove' + text_index + ';';
  return code;
};
