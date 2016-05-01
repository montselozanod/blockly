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
     addLocalVar(text_listname_name, type, startAddress, 1, 0); // size is always +1, but index starts with zero
     pOper.push(text_listname_name);
     Blockly.Chabuscript.statementToCode(block, 'values');
     pOper.pop();
     addLocalVar(text_listname_name, type, startAddress, 1, listElements); // size is always +1, but index starts with zero
     sumAddress(type, listElements);
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
  var listType = varTable[list_name][TableVarAccess.TYPE];
  var op = Operation.INITPUT;
  var value = checkInputType(text_list_item, listType);
  var valueAddress;
  var indexAddress = varTable[list_name][TableVarAccess.ADDRESS]+listElements;
  if(text_list_item in varTable && varTable[text_list_item][TableVarAccess.TYPE] == listType)
  {
        //input is a variable
      valueAddress = varTable[text_item][TableVarAccess.ADDRESS];
      quadruples.push([op, valueAddress, null, indexAddress]);
      listElements += 1; //es el index empezando desde cero
      pOper.push(list_name);
      return '';
  }else if(value[0] != false)
  { //input is a constant
    valueAddress = addConstant(value[1], listType);
    quadruples.push([op, valueAddress, null, indexAddress]);
    listElements += 1; //es el index empezando desde cero
    pOper.push(list_name);
    return '';
  }else{
    var message = String.format(errors['INCORRECT_TYPE'], text_list_item, list_name);
    printToShell(message, true);
  }
};

Blockly.Chabuscript['list_put'] = function(block) {
  var text_list_name = block.getFieldValue('list_name');
  var text_item = block.getFieldValue('item');
  var text_index = block.getFieldValue('index');

  var indexInfo = checkParamType(text_index);

  var isList = varTable[text_list_name][TableVarAccess.DIM]
  var listType = varTable[text_list_name][TableVarAccess.TYPE];
  var value = checkInputType(text_item, listType);

  if(isList == 1)
  {
    //verificar index
    if(indexInfo[0] == Type.NUMBER)
    {
      var op = Operation.VER;
      var resultIndexAdd = tmpNumMem++; //obtener una direccion temporal donde guardar la suma

      quadruples.push([op, indexInfo[1], 0, varTable[text_list_name][TableVarAccess.SIZE]]);

      op = Operation.SUM_INDEX;
      quadruples.push([op, indexInfo[1], varTable[text_list_name][TableVarAccess.ADDRESS], resultIndexAdd]);

      //verificar lo que vas agregar
      op = Operation.PUT;
      var valueAddress;
      if(text_item in varTable && varTable[text_item][TableVarAccess.TYPE] == listType)
      {
            //input is a variable
          valueAddress = varTable[text_item][TableVarAccess.ADDRESS];
          quadruples.push([op, valueAddress, null, [resultIndexAdd]]);
          return '';
      }
      else if(value[0] != false)
      {
        //input is a constant
        valueAddress = addConstant(value[1], listType);
        quadruples.push([op, valueAddress, null, [resultIndexAdd]]);
        return '';
      }else{
        var message = String.format(errors['INCORRECT_TYPE'], text_item, text_list_name);
        printToShell(message, true);
      }
    }else{
      var message = String.format(errors['INCORRECT_TYPE'], text_index, text_list_name); //index must be a number
      printToShell(message, true);
    }
  }else{
    var message = String.format(erros['INVALID_OP'], text_list_name);
    printToShell(message, true);
  }

};

Blockly.Chabuscript['list_get'] = function(block) {
  var text_list_name = block.getFieldValue('list_name');
  var text_index = block.getFieldValue('index');

  var indexInfo = checkParamType(text_index);
  var isList = varTabl[text_list_name][TableVarAccess.DIM];
  var listType = varTable[text_list_name][TableVarAccess.TYPE];

  if(isList == 1)
  {
    //check if index is a number
    if(indexInfo[0] == Type.NUMBER)
    {
      var op = Operation.VER;
      quadruples.push([op, indexInfo[1], 0, varTable[text_list_name][TableVarAccess.SIZE]]);

      op = Operation.SUM_INDEX;
      var resultIndexAdd = tmpNumMem++; //obtener una direccion temporal donde guardar la suma
      quadruples.push([op, indexInfo[1], varTable[text_list_name][TableVarAccess.ADDRESS], resultIndexAdd]);

      return {type: listType, address: [resultIndexAdd]};
    }else{
      var message = String.format(errors['INCORRECT_TYPE'], text_index, text_list_name);
      printToShell(message, true);
    }
  }else{
    var message = String.format(erros['INVALID_OP'], text_list_name);
    printToShell(message, true);
  }
};


Blockly.Chabuscript['remove_item'] = function(block) {
  var text_list_name = block.getFieldValue('list_ITEM');
  var text_index = block.getFieldValue('index');

  var indexInfo = checkParamType(text_index);

  var isList = varTable[text_list_name][TableVarAccess.DIM];
  var listType = varTable[text_list_name][TableVarAccess.TYPE];

  if(isList == 1)
  {
    //verificar index
    if(indexInfo[0] == Type.NUMBER)
    {
      var op = Operation.VER;
      quadruples.push([op, indexInfo[1], 0, varTable[text_list_name][TableVarAccess.SIZE]]);

      op = Operation.SUM_INDEX;
      var resultIndexAdd = tmpNumMem++; //obtener una direccion temporal donde guardar la suma
      quadruples.push([op, indexInfo[1], varTable[text_list_name][TableVarAccess.ADDRESS], resultIndexAdd]);

      op = Operation.REMOVE;
      quadruples.push([op, [resultIndexAdd], null, null]);
    }else{
      var message = String.format(errors['INCORRECT_TYPE'], text_index, text_list_name);
      printToShell(message, true);
    }
  }else{
    var message = String.format(erros['INVALID_OP'], text_list_name);
    printToShell(message, true);
  }

};
