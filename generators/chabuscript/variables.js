/**
 * @fileoverview Generating Chabuscript for variable blocks.
 * @author mmontse.lozano@gmail.com (Montse Lozano Dieck)
 */

 'use strict';

 goog.provide('Blockly.Chabuscript.variables');

 goog.require('Blockly.Chabuscript');

 Blockly.Chabuscript['variables_get'] = function() {
   // Variable getter.
   var code = Blockly.Chabuscript.variableDB_.getName(this.getFieldValue('VAR'),
       Blockly.Chabuscript.NAME_TYPE);
   return [code, Blockly.Chabuscript.ORDER_ATOMIC];
 };

 Blockly.Chabuscript['variables_declare'] = function() {
   // Variable setter.
   var variable_type = this.getFieldValue('TYPE');
   //checar unicidad de variable en el scope .. si no syntax error
   
   //TODO: settype to variable
   var argument0 = Blockly.Chabuscript.valueToCode(this, 'VALUE',
       Blockly.Chabuscript.ORDER_ASSIGNMENT) || '0';
   var varName = Blockly.Chabuscript.variableDB_.getName(this.getFieldValue('VAR'),
       Blockly.Variables.NAME_TYPE);
   return '';
 };

 Blockly.Chabuscript['variables_set'] = function() {
   // Variable setter.
   var argument0 = Blockly.Chabuscript.valueToCode(this, 'VALUE',
       Blockly.Chabuscript.ORDER_ASSIGNMENT) || '0';
   var varName = Blockly.Chabuscript.variableDB_.getName(this.getFieldValue('VAR'),
       Blockly.Variables.NAME_TYPE);
   return varName + ' = ' + argument0 + ';\n';
 };
