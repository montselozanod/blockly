/**
 * @fileoverview Helper functions for generating Chabuscript for blocks.
 * @author mmontse.lozano@google.com (Montse Lozano Dieck)
 */

 'use strict';

 goog.provide('Blockly.Chabuscript');

 goog.require('Blockly.Generator');

 /**
  * Chabuscript code generator.
  * @type {!Blockly.Generator}
  */
Blockly.Chabuscript = new Blockly.Generator('Chabuscript');

Blockly.Chabuscript.addReservedWords(
  '
  '
);
