'use strict';

goog.provide('Blockly.Chabuscript.logic');

goog.require('Blockly.Chabuscript');

Blockly.Chabuscript['logic_if'] = function(block) {
  var value_if = Blockly.Chabuscript.valueToCode(block, 'IF', Blockly.Chabuscript.ORDER_ATOMIC);

  if (checkInputType(value_if, Type.BOOL)) {
    var flag = pilaO.pop();
    quadruples.push([Operation.GOTOF, flag, null, 0]);
    var jump_false = quadruples.length-1; // push pSaltos cont-1

    Blockly.Chabuscript.statementToCode(block, 'IF_DO');

    quadruples[jump_false][3] = quadruples.length;

    return '';
  }
  else {
    var message = String.format(errors['BOOL_CONDITION'], "If");
    printToShell(message, true);
  }
};

Blockly.Chabuscript['logic_if_else'] = function(block) {
  var value_if = Blockly.Chabuscript.valueToCode(block, 'IF', Blockly.Chabuscript.ORDER_ATOMIC);

  if (checkInputType(value_if, Type.BOOL)) {
    var flag = pilaO.pop();
    quadruples.push([Operation.GOTOF, flag, null, 0]);
    var jump_false = quadruples.length-1; // push pSaltos cont-1

    Blockly.Chabuscript.statementToCode(block, 'IF_DO');

    quadruples.push([Operation.GOTO, null, null, 0]);
    quadruples[jump_false][3] = quadruples.length;
    var jump = quadruples.length-1;

    Blockly.Chabuscript.statementToCode(block, 'ELSE_DO');

    quadruples[jump][3] = quadruples.length;

    return '';
  }
  else {
    var message = String.format(errors['BOOL_CONDITION'], "If");
    printToShell(message, true);
  }
};

Blockly.Chabuscript['logic_if_elsif_else'] = function(block) {

  var value_if = Blockly.Chabuscript.valueToCode(block, 'IF', Blockly.Chabuscript.ORDER_ATOMIC);

  if (checkInputType(value_if, Type.BOOL)) {
    var flag = pilaO.pop(); // valor de la condicion
    quadruples.push([Operation.GOTOF, flag, null, 0]);
    var jump_false = quadruples.length-1; // el quad que debe rellenar despues de brincar if

    Blockly.Chabuscript.statementToCode(block, 'IF_DO');

    quadruples.push([Operation.GOTO, null, null, 0]);
    quadruples[jump_false][3] = quadruples.length; // rellena GOTOF para que brinque a elsif
    var jump_if = quadruples.length-1; // el quad que debe rellenar despues de brincar elsif y else

    var value_elsif = Blockly.Chabuscript.valueToCode(block, 'ELSIF', Blockly.Chabuscript.ORDER_ATOMIC);
    if (checkInputType(value_if, Type.BOOL)) {
      flag = pilaO.pop();
      quadruples.push([Operation.GOTOF, flag, null, 0]);
      jump_false = quadruples.length-1; // el quad que debe rellenar despues de brincar elsif

      Blockly.Chabuscript.statementToCode(block, 'ELSIF_DO');

      quadruples.push([Operation.GOTO, null, null, 0]);
      quadruples[jump_false][3] = quadruples.length; // rellena GOTOF para que brinque a else
      var jump_elseif = quadruples.length-1; // el quad que debe rellenar despues de brincar else

      Blockly.Chabuscript.statementToCode(block, 'ELSE_DO');

      quadruples[jump_if][3] = quadruples.length; // a donde debe brincar despues de terminar el if
      quadruples[jump_elseif][3] = quadruples.length; // a donde debe brincar despues de terminar el elseif

      return '';
    }
    else {
      var message = String.format(errors['BOOL_CONDITION'], "Else-if");
      printToShell(message, true);
    }
  }
  else {
    var message = String.format(errors['BOOL_CONDITION'], "If");
    printToShell(message, true);
  }
};

Blockly.Chabuscript['boolean_compare_expression'] = function(block) {
  var value_left = Blockly.Chabuscript.valueToCode(block, 'left', Blockly.Chabuscript.ORDER_ATOMIC);
  var dropdown_compare = block.getFieldValue('compare');
  var value_right = Blockly.Chabuscript.valueToCode(block, 'right', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = value_left + dropdown_compare + value_right;

  var op, arg1, arg2, result;

  if (dropdown_compare == "equals") {
    op = Operation.EQL
  }
  else if (dropdown_compare == "less") {
    op = Operation.LESS
  }
  else if (dropdown_compare == "greater") {
    op = Operation.GRT
  }
  else {
    op = Operation.DIFF
  }
  var resultType = semanticCube[value_left.type][value_left.type][op];
  if(resultType != Type.ERR)
  {
    result = tmpBoolMem++;
    quadruples.push([op, value_left.address, value_right.address, result]);
    return {type: Type.BOOL, address: result};
  }else{
    //display error
    var message = String.format(errors['INCOMPATIBLE'], dropdown_compare);
  }
};

Blockly.Chabuscript['boolean_expression'] = function(block) {
  var dropdown_flag = block.getFieldValue('flag');

  if (dropdown_flag === "TRUE") {
    pilaO.push(true);
  } else {
    pilaO.push(false);
  }

  return '';
};
