// Do not edit this file; automatically generated by build.py.
'use strict';

Blockly.Chabuscript=new Blockly.Generator("Chabuscript");Blockly.Chabuscript.addReservedWords("start,function,void,end,if,else,while,return,print,number,string,bool,list,and,or,not,set,less?,greater?,equals?, different?,color,line,shape,draw,polygon,circle,call,rectangle,point,true,false,elif,var,lambda,delete");Blockly.Chabuscript.ORDER_ATOMIC=0;Blockly.Chabuscript.ORDER_FUNCTION_CALL=1;Blockly.Chabuscript.ORDER_LOGICAL_NOT=2;Blockly.Chabuscript.ORDER_MULTIPLICATION=3;
Blockly.Chabuscript.ORDER_DIVISION=3;Blockly.Chabuscript.ORDER_MODULUS=3;Blockly.Chabuscript.ORDER_ADDITION=4;Blockly.Chabuscript.ORDER_SUBTRACTION=4;Blockly.Chabuscript.ORDER_RELATIONAL=5;Blockly.Chabuscript.ORDER_EQUALITY=6;Blockly.Chabuscript.ORDER_LOGICAL_AND=7;Blockly.Chabuscript.ORDER_LOGICAL_OR=8;Blockly.Chabuscript.ORDER_CONDITIONAL=9;Blockly.Chabuscript.ORDER_LAMBDA=10;Blockly.Chabuscript.ORDER_ASSIGNMENT=11;Blockly.Chabuscript.ORDER_COMMA=12;Blockly.Chabuscript.ORDER_NONE=99;
Blockly.Chabuscript.init=function(a){Blockly.Chabuscript.definitions_=Object.create(null);Blockly.Chabuscript.functionNames_=Object.create(null);Blockly.Chabuscript.variableDB_?Blockly.Chabuscript.variableDB_.reset():Blockly.Chabuscript.variableDB_=new Blockly.Names(Blockly.Chabuscript.RESERVED_WORDS_);var b=[];a=Blockly.Variables.allVariables(a);for(var c=0;c<a.length;c++)b[c]="var "+Blockly.Chabuscript.variableDB_.getName(a[c],Blockly.Variables.NAME_TYPE)+";";Blockly.Chabuscript.definitions_.variables=
b.join("\n")};Blockly.Chabuscript.finish=function(a){var b=[],c;for(c in Blockly.Chabuscript.definitions_)b.push(Blockly.Chabuscript.definitions_[c]);delete Blockly.Chabuscript.definitions_;delete Blockly.Chabuscript.functionNames_;Blockly.Chabuscript.variableDB_.reset();return b.join("\n\n")+"\n\n\n"+a};Blockly.Chabuscript.scrubNakedValue=function(a){return a+";\n"};Blockly.Chabuscript.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.Chabuscript.scrub_=function(a,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=Blockly.Chabuscript.prefixLines(d,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Chabuscript.allNestedComments(d))&&(c+=Blockly.Chabuscript.prefixLines(d,"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.Chabuscript.blockToCode(e);return c+
b+e};Blockly.Chabuscript.drawing={};
Blockly.Chabuscript.color=function(a){var b=Blockly.Chabuscript.valueToCode(a,"red",Blockly.Chabuscript.ORDER_ATOMIC),c=Blockly.Chabuscript.valueToCode(a,"green",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"blue",Blockly.Chabuscript.ORDER_ATOMIC);var d=Operation.COLOR;if(b.type!=Type.NUMBER)b=String.format(errors.INCORRECT_TYPE,b,"color"),printToShell(b,!0);else if(c.type!=Type.NUMBER)b=String.format(errors.INCORRECT_TYPE,c,"color"),printToShell(b,!0);else if(a.type!=Type.NUMBER)b=
String.format(errors.INCORRECT_TYPE,a,"color"),printToShell(b,!0);else return quadruples.push([d,b.address,c.address,a.address]),{block:Block.COLOR}};
Blockly.Chabuscript.draw=function(a){var b=Blockly.Chabuscript.valueToCode(a,"shape",Blockly.Chabuscript.ORDER_ATOMIC),c=Blockly.Chabuscript.valueToCode(a,"color",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"point-width",Blockly.Chabuscript.ORDER_ATOMIC);if(c.block==Block.COLOR)if(a.type==Type.NUMBER){if("shape"in b)return quadruples.push([Operation.DRAW,b.shape,a.address,null]),"";b=String.format(errors.SYNTAX_ERROR,"shape")}else b=String.format(errors.INCORRECT_TYPE_OP,
"point-width","DRAW");else b=String.format(errors.SYNTAX_ERROR,"color");printToShell(b,!0)};
Blockly.Chabuscript.point=function(a){var b=Blockly.Chabuscript.valueToCode(a,"x",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"y",Blockly.Chabuscript.ORDER_ATOMIC);if(b.type!=Type.NUMBER)b=String.format(errors.INCORRECT_TYPE,b,"point"),printToShell(b,!0);else if(a.type!=Type.NUMBER)b=String.format(errors.INCORRECT_TYPE,a,"point"),printToShell(b,!0);else return quadruples.push([Operation.POINT,b.address,a.address,null]),{shape:Operation.POINT,xVal:b.address,yVal:a.address}};
Blockly.Chabuscript.line=function(a){var b=Blockly.Chabuscript.valueToCode(a,"point1",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"point2",Blockly.Chabuscript.ORDER_ATOMIC);if(b.shape===Operation.POINT&&a.shape===Operation.POINT)return{shape:Operation.LINE};b=String.format(errors.SYNTAX_ERROR,"point");printToShell(b,!0)};
Blockly.Chabuscript.polygon=function(a){a=Blockly.Chabuscript.valueToCode(a,"points",Blockly.Chabuscript.ORDER_ATOMIC);if(1==a.dimension){if(a.type==Type.NUMBER)return quadruples.push([Operation.POLYGON,a.address,null,null]),{shape:Operation.POLYGON};a=String.format(errors.INCOMPATIBLE,"polygon");printToShell(a,!0)}else printToShell("Invalid type: input is not a list for operation polygon",!0)};
Blockly.Chabuscript.circle=function(a){Blockly.Chabuscript.valueToCode(a,"point",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"radius",Blockly.Chabuscript.ORDER_ATOMIC);if(a.type==Type.NUMBER&&0==a.dimension)return quadruples.push([Operation.CIRCLE,a.address,null,null]),{shape:Operation.CIRCLE,radius:a.address};a=String.format(errors.INCOMPATIBLE,"circle");printToShell(a,!0)};
Blockly.Chabuscript.rectangle=function(a){Blockly.Chabuscript.valueToCode(a,"point",Blockly.Chabuscript.ORDER_ATOMIC);var b=Blockly.Chabuscript.valueToCode(a,"width",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"height",Blockly.Chabuscript.ORDER_ATOMIC);if(b.type==Type.NUMBER&&a.type==Type.NUMBER)return quadruples.push([Operation.RECTANGLE,b.address,a.address,null]),{shape:Operation.RECTANGLE};b=String.format(errors.INCOMPATIBLE,"rectangle. Expecting a number.");printToShell(b,
!0)};Blockly.Chabuscript.background=function(a){if(Blockly.Chabuscript.valueToCode(a,"color",Blockly.Chabuscript.ORDER_ATOMIC).block==Block.COLOR)return quadruples.push([Operation.BCK,null,null,null]),"";a=String.format(errors.SYNTAX_ERROR,"color");printToShell(a,!0)};Blockly.Chabuscript.functions={};
Blockly.Chabuscript.func_block=function(a){initMemVars();var b=quadruples.length,c=a.getFieldValue("type"),d=a.getFieldValue("funcName");Blockly.Chabuscript.statementToCode(a,"params");if(funcIsUnique(d)){var e;switch(c){case "void":e=Type.VOID;break;case "number":e=Type.NUMBER;break;case "boolean":e=Type.BOOL;break;case "string":e=Type.STRING}addProc(d,e,b,params,0);Blockly.Chabuscript.statementToCode(a,"stmts");quadruples.push([Operation.RET,null,null,null]);params=[];return""}a=String.format(errors.DUPLICATE_FUNCTION_NAME,
d);printToShell(a,!0)};Blockly.Chabuscript.main=function(a){initMemVars();var b=quadruples.length;a="start {"+Blockly.Chabuscript.statementToCode(a,"maint_stmts")+"} end";addProc("start",Type.MAIN,b,[],0);quadruples.push([Operation.END,null,null,null]);return a};
Blockly.Chabuscript.param_block=function(a){var b=a.getFieldValue("param_type");a=a.getFieldValue("param_name");if(varIsUnique(a)&&funcIsUnique(a)){var c,d;switch(b){case "number":c=numberMem++;d=Type.NUMBER;break;case "string":c=stringMem++;d=Type.STRING;break;case "boolean":c=boolMem++,d=Type.BOOL}addLocalVar(a,d,c,0);quadruples.push([Operation.PAR_ASSIGN,c,null,null]);params.push(d);return""}b=String.format(errors.DUPLICATE_VARIABLE_NAME,a);printToShell(b,!0)};
Blockly.Chabuscript.return_stmt=function(a){a=Blockly.Chabuscript.valueToCode(a,"return_value",Blockly.Chabuscript.ORDER_ATOMIC);quadruples.push([Operation.RTRN,a.address,null,null]);return"return stmt;"};
Blockly.Chabuscript.invokefuncreturn=function(a){var b=a.getFieldValue("func_name");currentFuncName=b;if(funcIsUnique(b))b=String.format(errors.UNDECLARED_FUNCTION,b),printToShell(b,!0);else{quadruples.push([Operation.ERA,b,null,null]);Blockly.Chabuscript.valueToCode(a,"params",Blockly.Chabuscript.ORDER_ATOMIC);a=dirProcs[b][DirProcAccess.QUADINI];var c=getProcParams(b).length;if(paramNumber!=c)b=String.format(errors.PARAMETER_LENGTH_MISMATCH,b,c,paramNumber),printToShell(b,!0);else return c=tmpNumMem++,
quadruples.push([Operation.GOSUB,a,null,null]),quadruples.push([Operation.ASSIGN_FUNC,b,null,c]),paramNumber=0,{type:dirProcs[b][DirProcAccess.TYPE],address:c}}};
Blockly.Chabuscript.invokevoidfunc=function(a){var b=a.getFieldValue("func_id");currentFuncName=b;if(funcIsUnique(b))b=String.format(errors.UNDECLARED_FUNCTION,b),printToShell(b,!0);else{quadruples.push([Operation.ERA,b,null,null]);Blockly.Chabuscript.valueToCode(a,"NAME",Blockly.Chabuscript.ORDER_ATOMIC);a=dirProcs[b][1];var c=getProcParams(b).length;if(paramNumber!=c){b=String.format(errors.PARAMETER_LENGTH_MISMATCH,b,c,paramNumber);printToShell(b,!0);return}quadruples.push([Operation.GOSUB,a,null,
null])}paramNumber=0;return code};Blockly.Chabuscript.func_param=function(a){var b=a.getFieldValue("param"),c=getProcParams(currentFuncName)[paramNumber],d=checkParamType(b),e=d[0],d=d[1];if(c!=e)a=String.format(errors.PARAMETER_TYPE_MISMATCH,currentFuncName,c,e,paramNumber+1),printToShell(a,!0);else return quadruples.push([Operation.PARAM,d,null,paramNumber]),paramNumber++,Blockly.Chabuscript.valueToCode(a,"next_param",Blockly.Chabuscript.ORDER_ATOMIC),b};Blockly.Chabuscript.lists={};Blockly.Chabuscript.list_empty=function(a){var b=a.getFieldValue("type"),c=a.getFieldValue("list_name");a=a.getFieldValue("size");if(varIsUnique(c)&&funcIsUnique(c)){a=parseInt(a);var b=checkListType(b),d=sumAddress(b,a);addLocalVar(c,b,d,1,a);return""}c=String.format(errors.DUPLICATE_VARIABLE_NAME,c);printToShell(c,!0)};
Blockly.Chabuscript.list_values=function(a){var b=a.getFieldValue("param_type"),c=a.getFieldValue("listName_name");if(varIsUnique(c)&&funcIsUnique(c)){var b=checkListType(b),d=sumAddress(b,0);addLocalVar(c,b,d,1,0);pOper.push(c);Blockly.Chabuscript.statementToCode(a,"values");pOper.pop();addLocalVar(c,b,d,1,listElements);sumAddress(b,listElements);listElements=0;return""}a=String.format(errors.DUPLICATE_VARIABLE_NAME,c);printToShell(a,!0)};
Blockly.Chabuscript.list_item=function(a){var b=a.getFieldValue("list_ITEM");a=pOper.pop();var c=varTable[a][TableVarAccess.TYPE],d=Operation.INITPUT,e=checkInputType(b,c),f=varTable[a][TableVarAccess.ADDRESS]+listElements;if(b in varTable&&varTable[b][TableVarAccess.TYPE]==c)return b=varTable[text_item][TableVarAccess.ADDRESS],quadruples.push([d,b,null,f]),listElements+=1,pOper.push(a),"";if(0!=e[0])return b=addConstant(e[1],c),quadruples.push([d,b,null,f]),listElements+=1,pOper.push(a),"";a=String.format(errors.INCORRECT_TYPE,
b,a);printToShell(a,!0)};
Blockly.Chabuscript.list_put=function(a){var b=a.getFieldValue("list_name"),c=a.getFieldValue("item"),d=a.getFieldValue("index");a=checkParamType(d);var e=varTable[b][TableVarAccess.DIM],f=varTable[b][TableVarAccess.TYPE],g=checkInputType(c,f);if(1==e)if(a[0]==Type.NUMBER){d=Operation.VER;e=tmpNumMem++;quadruples.push([d,a[1],0,varTable[b][TableVarAccess.SIZE]]);d=Operation.SUM_INDEX;quadruples.push([d,a[1],varTable[b][TableVarAccess.ADDRESS],e]);d=Operation.PUT;if(c in varTable&&varTable[c][TableVarAccess.TYPE]==
f)return b=varTable[c][TableVarAccess.ADDRESS],quadruples.push([d,b,null,[e]]),"";if(0!=g[0])return b=addConstant(g[1],f),quadruples.push([d,b,null,[e]]),"";b=String.format(errors.INCORRECT_TYPE,c,b)}else b=String.format(errors.INCORRECT_TYPE,d,b);else b=String.format(erros.INVALID_OP,b);printToShell(b,!0)};
Blockly.Chabuscript.list_get=function(a){var b=a.getFieldValue("list_name"),c=a.getFieldValue("index");a=checkParamType(c);var d=varTable[b][TableVarAccess.TYPE];if(1==varTable[b][TableVarAccess.DIM]){if(a[0]==Type.NUMBER){c=Operation.VER;quadruples.push([c,a[1],0,varTable[b][TableVarAccess.SIZE]]);var c=Operation.SUM_INDEX,e=tmpNumMem++;quadruples.push([c,a[1],varTable[b][TableVarAccess.ADDRESS],e]);return{type:d,address:[e]}}b=String.format(errors.INCORRECT_TYPE,c,b)}else b=String.format(erros.INVALID_OP,
b);printToShell(b,!0)};
Blockly.Chabuscript.remove_item=function(a){var b=a.getFieldValue("list_ITEM"),c=a.getFieldValue("index");a=checkParamType(c);if(1==varTable[b][TableVarAccess.DIM])if(a[0]==Type.NUMBER){c=Operation.VER;quadruples.push([c,a[1],0,varTable[b][TableVarAccess.SIZE]]);var c=Operation.SUM_INDEX,d=tmpNumMem++;quadruples.push([c,a[1],varTable[b][TableVarAccess.ADDRESS],d]);c=Operation.REMOVE;quadruples.push([c,[d],null,null])}else b=String.format(errors.INCORRECT_TYPE,c,b),printToShell(b,!0);else b=String.format(erros.INVALID_OP,
b),printToShell(b,!0)};Blockly.Chabuscript.logic={};Blockly.Chabuscript.logic_if=function(a){var b=Blockly.Chabuscript.valueToCode(a,"IF",Blockly.Chabuscript.ORDER_ATOMIC);if(b.type==Type.BOOL)return pilaO.pop(),quadruples.push([Operation.GOTOF,b.address,null,0]),b=quadruples.length-1,Blockly.Chabuscript.statementToCode(a,"IF_DO"),quadruples[b][3]=quadruples.length,"";a=String.format(errors.BOOL_CONDITION,"If");printToShell(a,!0)};
Blockly.Chabuscript.logic_if_else=function(a){var b=Blockly.Chabuscript.valueToCode(a,"IF",Blockly.Chabuscript.ORDER_ATOMIC);if(b.type==Type.BOOL)return pilaO.pop(),quadruples.push([Operation.GOTOF,b.address,null,0]),b=quadruples.length-1,Blockly.Chabuscript.statementToCode(a,"IF_DO"),quadruples.push([Operation.GOTO,null,null,0]),quadruples[b][3]=quadruples.length,b=quadruples.length-1,Blockly.Chabuscript.statementToCode(a,"ELSE_DO"),quadruples[b][3]=quadruples.length,"";a=String.format(errors.BOOL_CONDITION,
"If");printToShell(a,!0)};
Blockly.Chabuscript.logic_if_elsif_else=function(a){var b=Blockly.Chabuscript.valueToCode(a,"IF",Blockly.Chabuscript.ORDER_ATOMIC);if(b.type==Type.BOOL){pilaO.pop();quadruples.push([Operation.GOTOF,b.address,null,0]);var c=quadruples.length-1;Blockly.Chabuscript.statementToCode(a,"IF_DO");quadruples.push([Operation.GOTO,null,null,0]);quadruples[c][3]=quadruples.length;b=quadruples.length-1;c=Blockly.Chabuscript.valueToCode(a,"ELSIF",Blockly.Chabuscript.ORDER_ATOMIC);if(c.type==Type.BOOL)return pilaO.pop(),
quadruples.push([Operation.GOTOF,c.address,null,0]),c=quadruples.length-1,Blockly.Chabuscript.statementToCode(a,"ELSIF_DO"),quadruples.push([Operation.GOTO,null,null,0]),quadruples[c][3]=quadruples.length,c=quadruples.length-1,Blockly.Chabuscript.statementToCode(a,"ELSE_DO"),quadruples[b][3]=quadruples.length,quadruples[c][3]=quadruples.length,"";a=String.format(errors.BOOL_CONDITION,"Else-if")}else a=String.format(errors.BOOL_CONDITION,"If");printToShell(a,!0)};
Blockly.Chabuscript.boolean_compare_expression=function(a){var b=Blockly.Chabuscript.valueToCode(a,"left",Blockly.Chabuscript.ORDER_ATOMIC),c=a.getFieldValue("compare");a=Blockly.Chabuscript.valueToCode(a,"right",Blockly.Chabuscript.ORDER_ATOMIC);var d;d="equals"==c?Operation.EQL:"less"==c?Operation.LESS:"greater"==c?Operation.GRT:Operation.DIFF;if(semanticCube[b.type][a.type][d]!=Type.ERR)return c=tmpBoolMem++,quadruples.push([d,b.address,a.address,c]),{type:Type.BOOL,address:c};b=String.format(errors.INCOMPATIBLE,
c);printToShell(b,!0)};Blockly.Chabuscript.boolean_expression=function(a){"TRUE"===a.getFieldValue("flag")?pilaO.push(!0):pilaO.push(!1);return""};Blockly.Chabuscript.loops={};Blockly.Chabuscript.loop_while=function(a){var b=quadruples.length,c=Blockly.Chabuscript.valueToCode(a,"while_cond",Blockly.Chabuscript.ORDER_ATOMIC);if(c.type==Type.BOOL)return pilaO.pop(),quadruples.push([Operation.GOTOF,c.address,null,0]),c=quadruples.length-1,Blockly.Chabuscript.statementToCode(a,"while_stmts"),quadruples.push([Operation.GOTO,null,null,b]),quadruples[c][3]=quadruples.length,"";a=String.format(errors.BOOL_CONDITION,"While");printToShell(a,!0)};Blockly.Chabuscript.math={};
Blockly.Chabuscript.assign=function(a){var b=Blockly.Chabuscript.valueToCode(a,"opIzq",Blockly.Chabuscript.ORDER_ATOMIC),c=Blockly.Chabuscript.valueToCode(a,"opDer",Blockly.Chabuscript.ORDER_ATOMIC);if(semanticCube[b.type][c.type][Operation.ASSIGN]!=Type.ERR)return a=Operation.ASSIGN,c=c.address,b=b.address,quadruples.push([a,c,null,b]),"";b=String.format(errors.INCOMPATIBLE_TYPE_OP,getTypeStringFromEnum(b.type),getTypeStringFromEnum(c.type),"assignment.");printToShell(b,!0)};
Blockly.Chabuscript.term=function(a){var b=Blockly.Chabuscript.valueToCode(a,"opIzq",Blockly.Chabuscript.ORDER_ATOMIC),c=a.getFieldValue("op"),d=Blockly.Chabuscript.valueToCode(a,"opDer",Blockly.Chabuscript.ORDER_ATOMIC);a="MULT"==c?Operation.MULT:Operation.DIV;var e=semanticCube[b.type][d.type][a];if(e!=Type.ERR)return b=b.address,c=d.address,d=tmpNumMem++,quadruples.push([a,b,c,d]),{type:e,address:d};a=String.format(errors.INCOMPATIBLE_TYPE_OP,getTypeStringFromEnum(b.type),getTypeStringFromEnum(d.type),
c);printToShell(a,!0)};
Blockly.Chabuscript.exp=function(a){var b=Blockly.Chabuscript.valueToCode(a,"opIzq",Blockly.Chabuscript.ORDER_ATOMIC),c=a.getFieldValue("op"),d=Blockly.Chabuscript.valueToCode(a,"opDer",Blockly.Chabuscript.ORDER_ATOMIC);a="SUM"==c?Operation.SUM:Operation.MINUS;var e=semanticCube[b.type][d.type][a];if(e!=Type.ERR)return b=b.address,c=d.address,d=tmpNumMem++,quadruples.push([a,b,c,d]),{type:e,address:d};a=String.format(errors.INCOMPATIBLE_TYPE_OP,getTypeStringFromEnum(b.type),getTypeStringFromEnum(d.type),
c);printToShell(a,!0)};
Blockly.Chabuscript.random=function(a){var b=Blockly.Chabuscript.valueToCode(a,"min",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"max",Blockly.Chabuscript.ORDER_ATOMIC);var c=Operation.RND,d=b.type==Type.NUMBER?!0:!1,e=a.type==Type.NUMBER?!0:!1;if(d&&e)return d=tmpNumMem++,quadruples.push([c,b.address,a.address,d]),{type:Type.NUMBER,address:d};d?e||(b=String.format(errors.INCORRECT_TYPE_OP,"max","random"),printToShell(b,!0)):(b=String.format(errors.INCORRECT_TYPE_OP,"min",
"random"),printToShell(b,!0))};Blockly.Chabuscript.paren=function(a){return["("+Blockly.Chabuscript.valueToCode(a,"expression",Blockly.Chabuscript.ORDER_ATOMIC)+")",Blockly.Chabuscript.ORDER_NONE]};Blockly.Chabuscript.text={};Blockly.Chabuscript.print=function(a){a=Blockly.Chabuscript.valueToCode(a,"print-stmt",Blockly.Chabuscript.ORDER_ATOMIC);quadruples.push([Operation.PRINT,a.address,null,null]);return""};Blockly.Chabuscript.print_ctestring=function(a){a=a.getFieldValue("print_txt");a=addConstant(a);quadruples.push([Operation.PRINT,a,null,null]);return""};Blockly.Chabuscript.variables={};Blockly.Chabuscript["var"]=function(a){var b=a.getFieldValue("type");a=a.getFieldValue("var_id");if(varIsUnique(a)&&funcIsUnique(a)){var c,d;switch(b){case "number":c=numberMem++;d=Type.NUMBER;break;case "string":c=stringMem++;d=Type.STRING;break;case "boolean":c=boolMem++,d=Type.BOOL}addLocalVar(a,d,c,0);return b+" "+a}b=String.format(errors.DUPLICATE_VARIABLE_NAME,a);printToShell(b,!0)};
Blockly.Chabuscript.variables_exist_var=function(a){a=a.getFieldValue("var_name");var b=checkParamType(a);return{type:b[0],address:b[1],dimension:a in varTable?varTable[a][TableVarAccess.DIM]:0}};