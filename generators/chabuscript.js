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

 /**
  * Prepend the generated code with the variable definitions.
  * @param {string} code Generated code.
  * @return {string} Completed code.
  */
  Blockly.Chabuscript.finish = function(code) {
    // Convert the definitions dictionary into a list.
    var definitions = [];
    for (var name in Blockly.Chabuscript.definitions_) {
      definitions.push(Blockly.Chabuscript.definitions_[name]);
    }
    // Clean up temporary data.
    delete Blockly.Chabuscript.definitions_;
    delete Blockly.Chabuscript.functionNames_;
    Blockly.Chabuscript.variableDB_.reset();
    return definitions.join('\n\n') + '\n\n\n' + code;
  };

  /**
   * Naked values are top-level blocks with outputs that aren't plugged into
   * anything.  A trailing semicolon is needed to make this legal.
   * @param {string} line Line of generated code.
   * @return {string} Legal line of code.
   */
  Blockly.Chabuscript.scrubNakedValue = function(line) {
    return line + ';\n';
  };

  /**
   * Encode a string as a properly escaped Chabuscript string, complete with
   * quotes.
   * @param {string} string Text to encode.
   * @return {string} Chabuscript string.
   * @private
   */
  Blockly.Chabuscript.quote_ = function(string) {
    // TODO: This is a quick hack.  Replace with goog.string.quote
    string = string.replace(/\\/g, '\\\\')
                   .replace(/\n/g, '\\\n')
                   .replace(/'/g, '\\\'');
    return '\'' + string + '\'';
  };

  /**
   * Common tasks for generating Chabuscript from blocks.
   * Handles comments for the specified block and any connected value blocks.
   * Calls any statements following this block.
   * @param {!Blockly.Block} block The current block.
   * @param {string} code The Chabuscript code created for this block.
   * @return {string} Chabuscript code with comments and subsequent blocks added.
   * @private
   */
  Blockly.Chabuscript.scrub_ = function(block, code) {
    var commentCode = '';
    // Only collect comments for blocks that aren't inline.
    if (!block.outputConnection || !block.outputConnection.targetConnection) {
      // Collect comment for this block.
      var comment = block.getCommentText();
      if (comment) {
        commentCode += Blockly.Chabuscript.prefixLines(comment, '// ') + '\n';
      }
      // Collect comments for all value arguments.
      // Don't collect comments for nested statements.
      for (var x = 0; x < block.inputList.length; x++) {
        if (block.inputList[x].type == Blockly.INPUT_VALUE) {
          var childBlock = block.inputList[x].connection.targetBlock();
          if (childBlock) {
            var comment = Blockly.Chabuscript.allNestedComments(childBlock);
            if (comment) {
              commentCode += Blockly.Chabuscript.prefixLines(comment, '// ');
            }
          }
        }
      }
    }
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = Blockly.Chabuscript.blockToCode(nextBlock);
    return commentCode + code + nextCode;
  };
