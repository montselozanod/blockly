/**
 * @fileoverview Generating Chabuscript for variable blocks.
 * @author mmontse.lozano@gmail.com (Montse Lozano Dieck)
 */

 'use strict';

 goog.provide('Blockly.Chabuscript.lists');

 goog.require('Blockly.Chabuscript');


 Blockly.Chabuscript['list_empty'] = function(block) {
   var dropdown_type = block.getFieldValue('type');
   var text_list_name = block.getFieldValue('list_name');
   var text_size = block.getFieldValue('size');

   if(varIsUnique(text_list_name) && funcIsUnique(text_list_name))
   {
     var size = parseInt(text_size);
     var type = checkListType(dropdown_type);
     var startAddress = sumAddress(type, size); //sumar a direccion las casillas del size del arreglo
     addLocalVar(text_list_name, type, startAddress, 1, size);
     return '';
   }else{
     var message = String.format(errors['DUPLICATE_VARIABLE_NAME'], text_list_name);
     printToShell(message, true);
   }


 };

 Blockly.Chabuscript['list_values'] = function(block) {
   var dropdown_param_type = block.getFieldValue('param_type');
   var text_listname_name = block.getFieldValue('listName_name');

   if(varIsUnique(text_listname_name) && funcIsUnique(text_listname_name))
   {
     var type = checkListType(dropdown_param_type);
     var startAddress = sumAddress(type, 0); //sumar a direccion las casillas del size del arreglo
     addLocalVar(text_list_name, type, startAddress, 1, 0); // size is always +1, but index starts with zero
     pOper.push(text_list_name);
     Blockly.Chabuscript.statementToCode(block, 'values');
     pOper.pop();
     addLocalVar(text_list_name, type, startAddress, 1, listElements+1); // size is always +1, but index starts with zero
     sumAddress(type, listElements+1);
     listElements = 0;
     return '';
   }else{
     var message = String.format(errors['DUPLICATE_VARIABLE_NAME'], text_listname_name);
     printToShell(message, true);
   }
 };

 Blockly.Chabuscript['list_item'] = function(block) {
  var text_list_item = block.getFieldValue('list_ITEM');
  var list_name = pOper.pop();
  var type = varTable[list_name][0];
  var op = Operation.PUT;
  var value = checkInputType(text_list_item, type);
  var valueAddress;
  if(text_list_item in varTable && varTable[text_list_item][0] == type)
  {
        //input is a variable
      valueAddress = varTable[text_item][0];
      quadruples.push([op, valueAddress, null, (indexAddress)]);
      return '';
  }else if(value != false)
  { //input is a constant
    valueAddress = addConstant(value, type);
    quadruples.push([op, valueAddress, null, (indexAddress)]);
    listElements = listElements++; //es el index empezando desde cero
    pOper.push(list_name);
    return '';
  }else{
    var message = String.format(errors['INCORRECT_TYPE'], text_item, text_list_name);
    printToShell(message, true);
  }
};

Blockly.Chabuscript['list_put'] = function(block) {
  var text_list_name = block.getFieldValue('list_name');
  var text_item = block.getFieldValue('item');
  var text_index = block.getFieldValue('index');

  var index = parseInt(text_index);
  if(validateListAccess(index, text_index, text_list_name))
  {
      var type = varTable[text_list_name][0];
      var value = checkInputType(text_item, type);
      var indexAddress = varTable[text_list_name][0] + index;
      var op = Operation.PUT;
      var valueAddress;
      if(text_item in varTable && varTable[text_item][0] == type)
      {
            //input is a variable
          valueAddress = varTable[text_item][0];
          quadruples.push([op, valueAddress, null, (indexAddress)]);
          return '';
      }
      else if(value != false)
      { //input is a constant
        valueAddress = addConstant(value, type);
        quadruples.push([op, valueAddress, null, (indexAddress)]);
        return '';
      }else{
        var message = String.format(errors['INCORRECT_TYPE'], text_item, text_list_name);
        printToShell(message, true);

      }
  }
};


Blockly.Chabuscript['remove_item'] = function(block) {
  var text_list_name = block.getFieldValue('list_ITEM');
  var text_index = block.getFieldValue('index');
  var code = 'list' + text_list_item + 'remove' + text_index + ';';

  var index = parseInt(text_index);
  if(validateListAccess(index, text_index, text_list_name))
  {
    var op = Operation.REMOVE;
    var address = varTable[text_list_name][1] + index;
    quadruples.push([op, , (address), null, null]);
    return '';
  }

};
