'use strict';

goog.provide('Blockly.Chabuscript.functions');

goog.require('Blockly.Chabuscript');


Blockly.Chabuscript['func_block'] = function(block) {
  initMemVars();
  var startQuad = quadruples.length;
  var dropdown_type = block.getFieldValue('type');
  var text_funcname = block.getFieldValue('funcName');
  Blockly.Chabuscript.statementToCode(block, 'params');
  Blockly.Chabuscript.statementToCode(block, 'stmts');

  if(funcIsUnique(text_funcname))
  {
    var type;
    switch(dropdown_type)
    {
      case 'void': type = Type.VOID;
        break;
      case 'number': type = Type.NUMBER;
        break;
      case 'boolean': type = Type.BOOL;
        break;
      case 'string': type = Type.STRING;
      break;
    }
    addProc(text_funcname, type, startQuad, params, 0 /* TODO NumVars del main*/ );

    quadruples.push([Operation.RET, null, null, null]); // regresar control a la funcion que invoco
    params = []; // eliminate params for next func
    return '';
  }else{
    var message = String.format(errors['DUPLICATE_FUNCTION_NAME'], text_funcname);
    printToShell(message, true); // we are printing an error
  }
};

Blockly.Chabuscript['main'] = function(block) {
  initMemVars();
  var startQuad = quadruples.length; // num de cuadruplo donde empieza su codigo

  var statements_maint_stmts = Blockly.Chabuscript.statementToCode(block, 'maint_stmts');
  var code = 'start {' + statements_maint_stmts + '} end';

  addProc('start', Type.MAIN, startQuad, [], 0 /* TODO NumVars del main*/ );

  quadruples.push([Operation.END, null, null, null]);
  return code;
};


Blockly.Chabuscript['param_block'] = function(block) {
  var dropdown_param_type = block.getFieldValue('param_type');
  var text_param_name = block.getFieldValue('param_name');
  var code = dropdown_param_type + ' ' + text_param_name+ ';';
  if(varIsUnique(text_param_name) && funcIsUnique(text_param_name))
  {
    var address;
    var type;
    switch(dropdown_param_type)
    {
      case "number":
       address = numberMem++;
       type = Type.NUMBER;
       break;
      case "string":
       address = stringMem++;
       type = Type.STRING;
       break;
      case "boolean":
       address = boolMem++;
       type = Type.BOOL;
       break

    }
    addLocalVar(text_param_name, type, address, 0);
    quadruples.push([Operation.PAR_ASSIGN, address, null, null]);
    params.push(type);
    return '';
  } else {
    var message = String.format(errors['DUPLICATE_VARIABLE_NAME'], text_param_name);
    printToShell(message, true);
  }
};

Blockly.Chabuscript['return_stmt'] = function(block) {
  var value_return_value = Blockly.Chabuscript.valueToCode(block, 'return_value', Blockly.Chabuscript.ORDER_ATOMIC);
  var code = 'return stmt;';

  var op = Operation.RTRN;
  var result = value_return_value.address;

  quadruples.push([op, result, null, null]);
  return code;
};

Blockly.Chabuscript['invokefuncreturn'] = function(block) {
  var text_func_name = block.getFieldValue('func_name');
  currentFuncName = text_func_name;
  if(funcIsUnique(text_func_name))
  {
    var message = String.format(errors['UNDECLARED_FUNCTION'], text_func_name);
    printToShell(message, true);
  }else{
    var op = Operation.ERA;
    quadruples.push([op, text_func_name, null, null]);

    var value_params = Blockly.Chabuscript.valueToCode(block, 'params', Blockly.Chabuscript.ORDER_ATOMIC); //params de funcion

    var dirInicio = dirProcs[text_func_name][DirProcAccess.QUADINI];

    // Check if number of params with which function is being invoked is the correct one
    if(paramNumber != funcParamNum)
    {
      var message = String.format(errors['PARAMETER_LENGTH_MISMATCH'], text_func_id, funcParamNum, paramNumber);
      printToShell(message, true); //this is an error
      return;
    }
    var gAddress = tmpNumMem++;
    quadruples.push([Operation.GOSUB, dirInicio, null, null ]);
    quadruples.push([Operation.ASSIGN_FUNC, text_func_name, null, gAddress]); //assign de return value of de function

    paramNumber = 0; //regresar valor a cero otra vez
    return {type: dirProcs[text_func_name][DirProcAccess.TYPE] , address: gAddress};
  }

};

Blockly.Chabuscript['invokevoidfunc'] = function(block) {
  var text_func_id = block.getFieldValue('func_id');
  currentFuncName = text_func_id;
  if(funcIsUnique(text_func_id))
  {
    var message = String.format(errors['UNDECLARED_FUNCTION'], text_func_id);
    printToShell(message, true);
  }else{
    var op = Operation.ERA;
    quadruples.push([op, text_func_id, null, null]);
    //transformar params
    var params = Blockly.Chabuscript.valueToCode(block, 'NAME', Blockly.Chabuscript.ORDER_ATOMIC); //params de funcion
    var dirInicio = dirProcs[text_func_id][1];
    var funcParamNum = getProcParams(text_func_id).length;

    // Check if number of params with which function is being invoked is the correct one
    if(paramNumber != funcParamNum)
    {
      var message = String.format(errors['PARAMETER_LENGTH_MISMATCH'], text_func_id, funcParamNum, paramNumber);
      printToShell(message, true); //this is an error
      return;
    }

    quadruples.push([Operation.GOSUB, dirInicio, null, null ]);
  }

  paramNumber = 0; //regresar valor a cero otra vez porque funcion ha terminado
  return code;
};

Blockly.Chabuscript['func_param'] = function(block) {
  var text_param = block.getFieldValue('param');
  var funcParams = getProcParams(currentFuncName);
  var expectedType = funcParams[paramNumber];
  var typeAddress = checkParamType(text_param);
  var varType = typeAddress[0];
  var address = typeAddress[1];

  //check the type of the parameter
  if(expectedType != varType)
  {
    var message = String.format(errors['PARAMETER_TYPE_MISMATCH'], currentFuncName, expectedType, varType, (paramNumber +1) );
    printToShell(message, true);
  }else{
    var op = Operation.PARAM;
    quadruples.push([op, address, null, paramNumber]);
    paramNumber++;
    Blockly.Chabuscript.valueToCode(block, 'next_param', Blockly.Chabuscript.ORDER_ATOMIC);
    return text_param;
  }
};
