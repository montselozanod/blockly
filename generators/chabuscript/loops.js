'use strict';

goog.provide('Blockly.Chabuscript.loops');

goog.require('Blockly.Chabuscript');


Blockly.Chabuscript['loop_while'] = function(block) {
  //var code = 'repeat while(' + value_while_cond + ')' + statements_while_stmts + 'end;';
  var jump_back = quadruples.length; // cuadruplo al que se debe de regresar en el while

  var value_while_cond = Blockly.Chabuscript.valueToCode(block, 'while_cond', Blockly.Chabuscript.ORDER_ATOMIC);

  if (value_while_cond.type == Type.BOOL) {
    var flag = pilaO.pop();
    quadruples.push([Operation.GOTOF, value_while_cond.address, null, 0]); //este si esta bien
    var jump_false = quadruples.length-1;

    Blockly.Chabuscript.statementToCode(block, 'while_stmts');

    quadruples.push([Operation.GOTO, null, null, jump_back]);
    quadruples[jump_false][3] = quadruples.length;

    return '';

  }
  else {
    var message = String.format(errors['BOOL_CONDITION'], "While");
    printToShell(message, true);
  }
};
