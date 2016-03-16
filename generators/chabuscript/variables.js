/**
 * @fileoverview Generating Chabuscript for variable blocks.
 * @author mmontse.lozano@gmail.com (Quynh Neutron)
 */

 'use strict';

 goog.provide('Blockly.Chabuscript.variables');

 goog.require('Blockly.Chabuscript');

 Blockly.Chabuscript['variables_get'] = function(block) {
   // Variable getter.
   var code = Blockly.Chabuscript.variableDB_.getName(block.getFieldValue('VAR'),
       Blockly.Variables.NAME_TYPE);
   return [code, Blockly.Chabuscript.ORDER_ATOMIC];
 };
