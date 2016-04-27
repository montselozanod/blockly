'use strict';

goog.provide('Blockly.Chabuscript.drawing');

goog.require('Blockly.Chabuscript');


Blockly.Chabuscript['color'] = function(block) {
  var value_red = Blockly.Chabuscript.valueToCode(block, 'red', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_green = Blockly.Chabuscript.valueToCode(block, 'green', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_blue = Blockly.Chabuscript.valueToCode(block, 'blue', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'color(' + value_red + ',' + value_green + ',' + value_blue + ')';

  var red = checkParamType(value_red, Type.NUMBER);
  var green = checkParamType(value_green, Type.NUMBER);
  var blue = checkParamType(value_blue, Type.NUMBER);
  var op = Operation.COLOR;

  if(red[0] != Type.NUMBER)
  {
    var message = String.format(errors['INCORRECT_TYPE'], value_red, "color");
    printToShell(message, true);
  }else if(green[0] != Type.NUMBER)
  {
    var message = String.format(errors['INCORRECT_TYPE'], value_green, "color");
    printToShell(message, true);
  }else if(blue[0] != Type.NUMBER)
  {
    var message = String.format(errors['INCORRECT_TYPE'], value_blue, "color");
    printToShell(message, true);
  }else {
    quadruples.push([op, red[1], green[1], blue[1]]);
    return code;
  }
};

Blockly.Chabuscript['draw'] = function(block) {
  var value_shape = Blockly.Chabuscript.valueToCode(block, 'shape', Blockly.Chabuscript.ORDER_ATOMIC);
  Blockly.Chabuscript.valueToCode(block, 'color', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_point_width = Blockly.Chabuscript.valueToCode(block, 'point-width', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'draw shape ' + value_shape + ' ' + value_color + ' pw:' + value_point_width +';';

  var op = Operation.PW;
  var inputPW = checkParamType(value_point_width);
  if(inputPW[0] == Type.NUMBER)
  {
      quadruples.push([op, inputPW[1], null, null]); //quadruple with PW
  }else{

  }

  return code;
};


Blockly.Chabuscript['point'] = function(block) {
  var value_x = Blockly.Chabuscript.valueToCode(block, 'x', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_y = Blockly.Chabuscript.valueToCode(block, 'y', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'point x:' + value_x + ' y:' + value_y;
  var x = checkParamType(value_x);
  var y = checkParamType(value_y);

  if(x[0] != Type.NUMBER)
  {
    var message = String.format(errors['INCORRECT_TYPE'], value_x, "point");
    printToShell(message, true);
  }else if(y[0] != Type.NUMBER)
  {
    var message = String.format(errors['INCORRECT_TYPE'], value_y, "point");
    printToShell(message, true);
  }else{
    return {shape: Shape.POINT, xVal:x[1], yVal:y[1]};
  }
};

Blockly.Chabuscript['line'] = function(block) {
  var value_point1 = Blockly.Chabuscript.valueToCode(block, 'point1', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_point2 = Blockly.Chabuscript.valueToCode(block, 'point2', Blockly.Chabuscript.ORDER_ATOMIC);

  var p1X = value_point1.xVal;
  var p1Y = value_point1.yVal;

  var p2X = value_point2.xVal;
  var p2Y = value_point2.yVal;

  return {shape: Shape.LINE,  };
};

Blockly.Chabuscript['polygon'] = function(block) {
  var value_points = Blockly.Chabuscript.valueToCode(block, 'points', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'polygon points ' + value_points;
  // {[op, points]}
  //check list

  return {shape: Shape.POLYGON, };
};


Blockly.Chabuscript['circle'] = function(block) {
  var value_point = Blockly.Chabuscript.valueToCode(block, 'point', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_radius = Blockly.Chabuscript.valueToCode(block, 'radius', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'circle at: ' + value_point + ' r:' + value_radius;
  var pointX = value_point.xVal;
  var pointY = value_point.yVal;

  if(value_radius.type == Type.NUMBER)
  {

      return {shape: Shape.CIRCLE, radius: value_radius.address};
  }else{
    var message = String.format(errors['INCOMPATIBLE'], 'circle');
    printToShell(message, true);
  }

};

Blockly.Chabuscript['rectangle'] = function(block) {
  var value_point = Blockly.Chabuscript.valueToCode(block, 'point', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_width = Blockly.Chabuscript.valueToCode(block, 'width', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_height = Blockly.Chabuscript.valueToCode(block, 'height', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'rectangle at:' + value_point + ' w:' + value_width + ' h:' + value_height;

  var pX = value_point.xVal; //address
  var pY = value_point.yVal; //address

  return code;
};

Blockly.Chabuscript['background'] = function(block) {
  var value_color = Blockly.Chabuscript.valueToCode(block, 'color', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'background ' + value_color;
  quadruples.push([Operation.BCK, null, null, null]);
  return '';
};
