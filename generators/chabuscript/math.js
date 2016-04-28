'use strict';

goog.provide('Blockly.Chabuscript.math');

goog.require('Blockly.Chabuscript');

Blockly.Chabuscript['assign'] = function(block) {
  var value_opizq = Blockly.Chabuscript.valueToCode(block, 'opIzq', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_opder = Blockly.Chabuscript.valueToCode(block, 'opDer', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = value_opizq + '=' + value_opder + ';';

  var op, arg1, arg2, result;
  var resultType = semanticCube[value_opizq.type][value_opder.type][Operation.ASSIGN];

  if(resultType != Type.ERR)
  {
    op = Operation.ASSIGN;

    arg1 = value_opder.address;
    arg2 = null;
    result = value_opizq.address;

    quadruples.push([op, arg1, arg2, result]);

    return '';
  }else{
    var message = String.format(errors['INCOMPATIBLE_TYPE_OP'], getTypeStringFromEnum(value_opizq.type), getTypeStringFromEnum(value_opder.type), 'assignment.');
    printToShell(message, true);
  }

};

Blockly.Chabuscript['term'] = function(block) {
  var value_opizq = Blockly.Chabuscript.valueToCode(block, 'opIzq', Blockly.Chabuscript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_opder = Blockly.Chabuscript.valueToCode(block, 'opDer', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = value_opizq + ' ' + dropdown_op + ' ' + value_opder;

  var op, arg1, arg2, result;

  if (dropdown_op == "MULT") {
    op = Operation.MULT;
  }
  else {
    op = Operation.DIV;
  }

  arg1 = numMem++;
  arg2 = numMem++;
  result = tmpNumMem++;

  quadruples.push([op, arg1, arg2, result]);

  return {type: Type.NUMBER, address: result};
};

Blockly.Chabuscript['exp'] = function(block) {
  var value_opizq = Blockly.Chabuscript.valueToCode(block, 'opIzq', Blockly.Chabuscript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_opder = Blockly.Chabuscript.valueToCode(block, 'opDer', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = value_opizq + ' '+ dropdown_op + ' '+value_opder;

  var op, arg1, arg2, result;

  if (dropdown_op == "SUM") {
    op = Operation.SUM;
  }
  else {
    op = Operation.MINUS;
  }

  arg1 = numMem++;
  arg2 = numMem++;
  result = tmpNumMem++;

  quadruples.push([op, arg1, arg2, result]);

  return {type: Type.NUMBER, address: result};
};


Blockly.Chabuscript['random'] = function(block) {
  var value_min = Blockly.Chabuscript.valueToCode(block, 'min', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_max = Blockly.Chabuscript.valueToCode(block, 'max', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'random num min:' + value_min + ' max:' + value_max;

  var op = Operation.RND; //random
  var semanticCheckMin = (value_min.type == Type.NUMBER)?true:false;
  var semanticCheckMax = (value_max.type == Type.NUMBER)?true:false;
  if(semanticCheckMin && semanticCheckMax)
  {
    var result = tmpNumMem++;
    quadruples.push([op, value_min.address, value_max.address, result]);
    return {type: Type.NUMBER, address: result};
  }else if(!semanticCheckMin){
    var message = String.format(errors['INCORRECT_TYPE_OP'], 'min', 'random');
    printToShell(message, true);
  }else if(!semanticCheckMax)
  {
    var message = String.format(errors['INCORRECT_TYPE_OP'], 'max', 'random');
    printToShell(message, true);
  }

};


Blockly.Chabuscript['paren'] = function(block) {
  var value_expression = Blockly.Chabuscript.valueToCode(block, 'expression', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = '(' + value_expression + ')';
  return [code, Blockly.Chabuscript.ORDER_NONE];
};
