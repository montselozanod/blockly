/**
 * @fileoverview Generating Chabuscript for variable blocks.
 * @author mmontse.lozano@gmail.com (Montse Lozano Dieck)
 */

 'use strict';

 goog.provide('Blockly.Chabuscript.lists');

 goog.require('Blockly.Chabuscript');

 Blockly.Chabuscript['list_values'] = function(block) {
   var dropdown_param_type = block.getFieldValue('param_type');
   var text_listname_name = block.getFieldValue('listName_name');
   var statements_values = Blockly.Chabuscript.statementToCode(block, 'values');
   // TODO: Assemble Chabuscript into code variable.
   var code = '...;\n';
   return code;
 };

 Blockly.Chabuscript['list_item'] = function(block) {
  var text_list_item = block.getFieldValue('list_ITEM');
  // TODO: Assemble Chabuscript into code variable.
  var code = text_list_item +',';
  return code;
};

Blockly.Chabuscript['add_item'] = function(block) {
  var text_list_item = block.getFieldValue('list_ITEM');
  var text_new_item = block.getFieldValue('new_Item');
  // TODO: Assemble Chabuscript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.Chabuscript['remove_item'] = function(block) {
  var text_list_item = block.getFieldValue('list_ITEM');
  var text_index = block.getFieldValue('index');
  var code = '...;\n';
  return code;
};
