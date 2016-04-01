/**
 * @fileoverview Generating JavaScript for variable blocks.
 * @author mmontse.lozano@gmail.com (Montse Lozano Dieck)
 */

 'use strict';

 goog.provide('Blockly.JavaScript.lists');

 goog.require('Blockly.JavaScript');

 Blockly.JavaScript['list_values'] = function(block) {
   var dropdown_param_type = block.getFieldValue('param_type');
   var text_listname_name = block.getFieldValue('listName_name');
   var statements_values = Blockly.JavaScript.statementToCode(block, 'values');
   // TODO: Assemble JavaScript into code variable.
   var code = '...;\n';
   return code;
 };

 Blockly.JavaScript['list_item'] = function(block) {
  var text_list_item = block.getFieldValue('list_ITEM');
  // TODO: Assemble JavaScript into code variable.
  var code = text_list_item +',';
  return code;
};

Blockly.JavaScript['add_item'] = function(block) {
  var text_list_item = block.getFieldValue('list_ITEM');
  var text_new_item = block.getFieldValue('new_Item');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.JavaScript['remove_item'] = function(block) {
  var text_list_item = block.getFieldValue('list_ITEM');
  var text_index = block.getFieldValue('index');
  var code = '...;\n';
  return code;
};
