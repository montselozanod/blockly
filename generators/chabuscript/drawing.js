'use strict';

goog.provide('Blockly.Chabuscript.drawing');

goog.require('Blockly.Chabuscript');


Blockly.Chabuscript['color'] = function(block) {
  var value_red = Blockly.Chabuscript.valueToCode(block, 'red', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_green = Blockly.Chabuscript.valueToCode(block, 'green', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_blue = Blockly.Chabuscript.valueToCode(block, 'blue', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'color(' + value_red + ',' + value_green + ',' + value_blue + ')';

  var op = Operation.COLOR;

  if(value_red.type != Type.NUMBER)
  {
    var message = String.format(errors['INCORRECT_TYPE'], value_red, "color");
    printToShell(message, true);
  }else if(value_green.type != Type.NUMBER)
  {
    var message = String.format(errors['INCORRECT_TYPE'], value_green, "color");
    printToShell(message, true);
  }else if(value_blue.type != Type.NUMBER)
  {
    var message = String.format(errors['INCORRECT_TYPE'], value_blue, "color");
    printToShell(message, true);
  }else {
    quadruples.push([op, value_red.address, value_green.address, value_blue.address]);
    return {block: Block.COLOR};
  }
};

Blockly.Chabuscript['draw'] = function(block) {
  var value_shape = Blockly.Chabuscript.valueToCode(block, 'shape', Blockly.Chabuscript.ORDER_ATOMIC);
  var anim_val = Blockly.Chabuscript.valueToCode(block, 'anim', Blockly.Chabuscript.ORDER_ATOMIC);
  var color = Blockly.Chabuscript.valueToCode(block, 'color', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_point_width = Blockly.Chabuscript.valueToCode(block, 'point-width', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'draw shape ' + value_shape + ' ' + value_color + ' pw:' + value_point_width +';';

  if(color.block == Block.COLOR)
  {
    if(value_point_width.type == Type.NUMBER)
    {
        if('shape' in value_shape)
        {
          quadruples.push([Operation.DRAW, value_shape.shape, value_point_width.address, null]);
          return '';
        }else{
          var message = String.format(errors['SYNTAX_ERROR'], 'shape');
          printToShell(message, true);
        }
    }else{
      var message = String.format(errors['INCORRECT_TYPE_OP'], 'point-width', 'DRAW');
      printToShell(message, true);
    }
  }else{
    var message = String.format(errors['SYNTAX_ERROR'], 'color');
    printToShell(message, true);
  }
};


Blockly.Chabuscript['point'] = function(block) {
  var value_x = Blockly.Chabuscript.valueToCode(block, 'x', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_y = Blockly.Chabuscript.valueToCode(block, 'y', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'point x:' + value_x + ' y:' + value_y;

  if(value_x.type != Type.NUMBER)
  {
    var message = String.format(errors['INCORRECT_TYPE'], value_x, "point");
    printToShell(message, true);
  }else if(value_y.type!= Type.NUMBER)
  {
    var message = String.format(errors['INCORRECT_TYPE'], value_y, "point");
    printToShell(message, true);
  }else{
    quadruples.push([Operation.POINT, value_x.address, value_y.address, null]);
    return {shape: Operation.POINT, xVal:value_x.address, yVal:value_y.address};
  }
};

Blockly.Chabuscript['line'] = function(block) {
  var value_point1 = Blockly.Chabuscript.valueToCode(block, 'point1', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_point2 = Blockly.Chabuscript.valueToCode(block, 'point2', Blockly.Chabuscript.ORDER_ATOMIC);

  if(value_point1.shape === Operation.POINT && value_point2.shape === Operation.POINT)
  {
    return {shape: Operation.LINE};
  }else{
    var message = String.format(errors['SYNTAX_ERROR'], 'point');
    printToShell(message, true);
  }

};

Blockly.Chabuscript['polygon'] = function(block) {
  var value_point = Blockly.Chabuscript.valueToCode(block, 'point', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_num_sides = Blockly.Chabuscript.valueToCode(block, 'num_sides', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_side_length = Blockly.Chabuscript.valueToCode(block, 'side_length', Blockly.Chabuscript.ORDER_ATOMIC);

  if(value_point.shape === Operation.POINT)
  {
    if(value_num_sides.type == Type.NUMBER)
    {
      if(value_side_length.type == Type.NUMBER)
      {
        quadruples.push([Operation.POLYGON, value_num_sides.address, value_side_length.address, null]);
        return {shape: Operation.POLYGON};
      }else{
        var message = String.format(errors['INCOMPATIBLE'], 'polygon');
        printToShell(message, true);
      }
    }else{
      var message = String.format(errors['INCOMPATIBLE'], 'polygon');
      printToShell(message, true);
    }
  }else{
    var message = String.format(errors['SYNTAX_ERROR'], 'point');
    printToShell(message, true);
  }
};

Blockly.Chabuscript['circle'] = function(block) {
  var value_point = Blockly.Chabuscript.valueToCode(block, 'point', Blockly.Chabuscript.ORDER_ATOMIC);
  var value_radius = Blockly.Chabuscript.valueToCode(block, 'radius', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'circle at: ' + value_point + ' r:' + value_radius;

  if(value_radius.type == Type.NUMBER && value_radius.dimension == 0)
  {
      quadruples.push([Operation.CIRCLE,value_radius.address ,null , null]);
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
    quadruples.push([Operation.RECTANGLE, value_width.address,value_height.address, null]);
    return {shape: Operation.RECTANGLE};
  }else{
    var message = String.format(errors['INCOMPATIBLE'], 'rectangle. Expecting a number.');
    printToShell(message, true);
  }
};

Blockly.Chabuscript['background'] = function(block) {
  var value_color = Blockly.Chabuscript.valueToCode(block, 'color', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'background ' + value_color;
  if(value_color.block == Block.COLOR)
  {
    quadruples.push([Operation.BCK, null, null, null]);
    return '';
  }else{
    var message = String.format(errors['SYNTAX_ERROR'], 'color');
    printToShell(message, true);
  }
};

Blockly.Chabuscript['clear'] = function(block) {
  quadruples.push([Operation.CLEAR, null, null, null]);
  return '';
};

// POLYGON POINTS
// CIRCLE RADIUS
// POINT X Y
// LINE POINTX POINTY
// RECTANGLE WIDTH HEIGHT
// DRAW SHAPE WIDTH
