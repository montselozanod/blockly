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
  'start,function,void,end,if,else,while,return,print,number,string,bool,list,and,or,not,set,less?,greater?,equals?, different?,color,line,shape,draw,polygon,circle,call,rectangle,point,true,false,elif,var,lambda,delete'
);

/**
 * Order of operation ENUMs.
 */

Blockly.Chabuscript.ORDER_ATOMIC = 0;
Blockly.Chabuscript.ORDER_FUNCTION_CALL = 1;
Blockly.Chabuscript.ORDER_LOGICAL_NOT = 2;
Blockly.Chabuscript.ORDER_MULTIPLICATION = 3; // *
Blockly.Chabuscript.ORDER_DIVISION = 3;       // /
Blockly.Chabuscript.ORDER_MODULUS = 3;        // %
Blockly.Chabuscript.ORDER_ADDITION = 4;       // +
Blockly.Chabuscript.ORDER_SUBTRACTION = 4;    // -
Blockly.Chabuscript.ORDER_RELATIONAL = 5;     // < <= > >=
Blockly.Chabuscript.ORDER_EQUALITY = 6;       // == != === !==
Blockly.Chabuscript.ORDER_LOGICAL_AND = 7;      // and
Blockly.Chabuscript.ORDER_LOGICAL_OR = 8;       // or
Blockly.Chabuscript.ORDER_CONDITIONAL = 9;      // if else
Blockly.Chabuscript.ORDER_LAMBDA = 10;           // lambda
Blockly.Chabuscript.ORDER_ASSIGNMENT = 11;    // = += -= *= /= %= <<= >>=
Blockly.Chabuscript.ORDER_COMMA = 12;         // ,
Blockly.Chabuscript.ORDER_NONE = 99;          // (...)
/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
 Blockly.Chabuscript.init = function(workspace){
   // Create a dictionary of definitions to be printed before the code.
   Blockly.Chabuscript.definitions_ = Object.create(null);
   // Create a dictionary mapping desired function names in definitions_
   // to actual function names (to avoid collisions with user functions).
   Blockly.Chabuscript.functionNames_ = Object.create(null);

   if (!Blockly.Chabuscript.variableDB_) {
     Blockly.Chabuscript.variableDB_ =
         new Blockly.Names(Blockly.Chabuscript.RESERVED_WORDS_);
   } else {
     Blockly.Chabuscript.variableDB_.reset();
   }

   var defvars = [];
   var variables = Blockly.Variables.allVariables(workspace);
   for (var i = 0; i < variables.length; i++) {
     defvars[i] = 'var ' +
         Blockly.Chabuscript.variableDB_.getName(variables[i],
         Blockly.Variables.NAME_TYPE) + ';';
   }
   Blockly.Chabuscript.definitions_['variables'] = defvars.join('\n');
 };
