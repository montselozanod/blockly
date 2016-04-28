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
      if(shape in value_shape)
      {
        quadruples.push([op, inputPW[1], null, null]); //quadruple with PW
        quadruples.push([Operation.DRAW, value_shape.shape, null, null]);
      }else{
        var message = String.format(errors['SYNTAX_ERROR'], 'shape');
        printToShell(message, true);
      }
  }else{
    var message = String.format(errors['INCORRECT_TYPE_OP'], 'point-width', 'DRAW');
    printToShell(message, true);
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
    quadruples.push([Operation.POINT, x[1], y[1], null]);
    return {shape: Operation.POINT, xVal:x[1], yVal:y[1]};
  }
};

Blockly.Chabuscript['line'] = function(block) {
  var value_point1 = Blockly.Chabuscript.valueToCode(block, 'point1', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_point2 = Blockly.Chabuscript.valueToCode(block, 'point2', Blockly.Chabuscript.ORDER_ATOMIC);

  if(value_point1.shape === Shape.POINT && value_point2.shape === Shape.POINT)
  {
    return {shape: Operation.LINE};
  }else{
    var message = String.format(errors['SYNTAX_ERROR'], 'point');
    printToShell(message, true);
  }

};

Blockly.Chabuscript['polygon'] = function(block) {
  var value_points = Blockly.Chabuscript.valueToCode(block, 'points', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'polygon points ' + value_points;
  // {[op, points]}
  if(value_points.dimension == 1)
  {
    if(value_points.type == Type.NUMBER)
    {
      var op = Operation.POLYGON;
      quadruples.push([op, value_points.address, null, null]);
      return {shape: Operation.POLYGON};

    }else{
      //print incorrect type
      var message = String.format(errors['INCOMPATIBLE'], 'polygon');
      printToShell(message, true);
    }
  }else{
    var message = "Invalid type: input is not a list for operation polygon";
    printToShell(message, true);
  }

};


Blockly.Chabuscript['circle'] = function(block) {
  var value_point = Blockly.Chabuscript.valueToCode(block, 'point', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_radius = Blockly.Chabuscript.valueToCode(block, 'radius', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'circle at: ' + value_point + ' r:' + value_radius;
  var pointX = value_point.xVal;
  var pointY = value_point.yVal;

  if(value_radius.type == Type.NUMBER)
  {
      quadruples.push([Operation.CIRCLE, , value_radius.address, null]);
      return {shape: Operation.CIRCLE, radius: value_radius.address};
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

  if(value_width.type == Type.NUMBER && value_height.type == Type.NUMBER)
  {
    quadruples.push([Operation.RECTANGLE, ,value_width, value_height]);
    return {shape: Operation.RECTANGLE};
  }else{
    var message = String.format(errors['INCOMPATIBLE'], 'rectangle. Expecting a number.');
  }
};

Blockly.Chabuscript['background'] = function(block) {
  var value_color = Blockly.Chabuscript.valueToCode(block, 'color', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'background ' + value_color;
  quadruples.push([Operation.BCK, null, null, null]);
  return '';
};

// POLYGON POINTS
// CIRCLE RADIUS
// POINT X Y
// LINE POINTX POINTY
// RECTANGLE WIDTH HEIGHT
// DRAW SHAPE WIDTH
