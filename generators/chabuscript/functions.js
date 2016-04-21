'use strict';

goog.provide('Blockly.Chabuscript.functions');

goog.require('Blockly.Chabuscript');


Blockly.Chabuscript['func_block'] = function(block) {
  initMemVars();
  var startQuad = quadruples.length;
  var dropdown_type = block.getFieldValue('type');
  var text_funcname = block.getFieldValue('funcName');
  var statements_params = Blockly.Chabuscript.statementToCode(block, 'params');
  var statements_stmts = Blockly.Chabuscript.statementToCode(block, 'stmts');
  var code = 'function ' + dropdown_type + ' ' + text_funcname + 'params:(' + statements_params+'){' + statements_stmts + '} end';

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
  }else{
    var message = String.format(errors['DUPLICATE_FUNCTION_NAME'], text_funcname);
    printToShell(message, true); // we are printing an error
  }
  return code;
};

Blockly.Chabuscript['main'] = function(block) {
  initMemVars();
  var statements_maint_stmts = Blockly.Chabuscript.statementToCode(block, 'maint_stmts');
  var code = 'start {' + statements_maint_stmts + '} end';

  var startQuad = quadruples.length; // num de cuadruplo donde empieza su codigo
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
    addLocalVar(text_param_name, type, address);
    params.push(type);
  } else {
    var message = String.format(errors['DUPLICATE_VARIABLE_NAME'], text_param_name);
    printToShell(message, true);
  }
};

Blockly.Chabuscript['return_stmt'] = function(block) {
  var text_value = block.getFieldValue('value');
  var code = 'return ' + text_value + ';';

  var op = Operation.RTRN;
  result = tmpNumMem++; //TODO el result del return
  arg1 = null;
  arg2 = null;

  quadruples.push([op, result, arg1, arg2]);
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

    var dirInicio = dirProcs[text_func_name][1];

    // Check if number of params with which function is being invoked is the correct one
    if(paramNumber != funcParamNum)
    {
      var message = String.format(errors['PARAMETER_LENGTH_MISMATCH'], text_func_id, funcParamNum, paramNumber);
      printToShell(message, true); //this is an error
      return;
    }

    quadruples.push([Operation.GOSUB, dirInicio, null, null ]);
  }

  paramNumber = 0; //regresar valor a cero otra vez
  return code;
};

Blockly.Chabuscript['invokevoidfunc'] = function(block) {
  var text_func_id = block.getFieldValue('func_id');
  currentFuncName = text_func_id;
  if(funcIsUnique(text_func_name))
  {
    var message = String.format(errors['UNDECLARED_FUNCTION'], text_func_name);
    printToShell(message, true);
  }else{
    var op = Opeation.ERA;
    quadruples.push([op, text_func_id]);
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
  var expectedType = funcParams[paramNumber + 1];
  var typeAddress = checkParamType(text_param);
  var varType = typeAddress[0];
  var address = typeAddress[1];

  //check the type of the parameter
  if(expectedType != varType)
  {
    var message = String.format(errors['PARAMETER_TYPE_MISMATCH'], currentFuncName, expectedType, varType, (paramNumber +1) );
    printToShell(message, true);
    return true;
  }
  var op = Operation.PARAM;
  var pNumber = ++paramNumber;
  quadruples.push([op, address, null, pNumber]);
  return text_param;
};
