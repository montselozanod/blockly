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
Blockly.Chabuscript.draw=function(a){var b=Blockly.Chabuscript.valueToCode(a,"shape",Blockly.Chabuscript.ORDER_ATOMIC),c=Blockly.Chabuscript.valueToCode(a,"color",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"point-width",Blockly.Chabuscript.ORDER_ATOMIC);c.block==Block.COLOR?a.type==Type.NUMBER?shape in b?quadruples.push([Operation.DRAW,b.shape,a.address,null]):(b=String.format(errors.SYNTAX_ERROR,"shape"),printToShell(b,!0)):(b=String.format(errors.INCORRECT_TYPE_OP,"point-width",
"DRAW"),printToShell(b,!0)):(b=String.format(errors.SYNTAX_ERROR,"color"),printToShell(b,!0))};
Blockly.Chabuscript.point=function(a){var b=Blockly.Chabuscript.valueToCode(a,"x",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"y",Blockly.Chabuscript.ORDER_ATOMIC);if(b.type!=Type.NUMBER)b=String.format(errors.INCORRECT_TYPE,b,"point"),printToShell(b,!0);else if(a.type!=Type.NUMBER)b=String.format(errors.INCORRECT_TYPE,a,"point"),printToShell(b,!0);else return quadruples.push([Operation.POINT,b.address,a.address,null]),{shape:Operation.POINT,xVal:b.address,yVal:a.address}};
Blockly.Chabuscript.line=function(a){var b=Blockly.Chabuscript.valueToCode(a,"point1",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"point2",Blockly.Chabuscript.ORDER_ATOMIC);if(b.shape===Shape.POINT&&a.shape===Shape.POINT)return{shape:Operation.LINE};b=String.format(errors.SYNTAX_ERROR,"point");printToShell(b,!0)};
Blockly.Chabuscript.polygon=function(a){a=Blockly.Chabuscript.valueToCode(a,"points",Blockly.Chabuscript.ORDER_ATOMIC);if(1==a.dimension){if(a.type==Type.NUMBER)return quadruples.push([Operation.POLYGON,a.address,null,null]),{shape:Operation.POLYGON};a=String.format(errors.INCOMPATIBLE,"polygon");printToShell(a,!0)}else printToShell("Invalid type: input is not a list for operation polygon",!0)};
Blockly.Chabuscript.circle=function(a){Blockly.Chabuscript.valueToCode(a,"point",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"radius",Blockly.Chabuscript.ORDER_ATOMIC);if(a.type==Type.NUMBER&&0==a.dimension)return quadruples.push([Operation.CIRCLE,,a.address,null]),{shape:Operation.CIRCLE,radius:a.address};a=String.format(errors.INCOMPATIBLE,"circle");printToShell(a,!0)};
Blockly.Chabuscript.rectangle=function(a){Blockly.Chabuscript.valueToCode(a,"point",Blockly.Chabuscript.ORDER_ATOMIC);var b=Blockly.Chabuscript.valueToCode(a,"width",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"height",Blockly.Chabuscript.ORDER_ATOMIC);if(b.type==Type.NUMBER&&a.type==Type.NUMBER)return quadruples.push([Operation.RECTANGLE,,b,a]),{shape:Operation.RECTANGLE};b=String.format(errors.INCOMPATIBLE,"rectangle. Expecting a number.");printToShell(b,!0)};
Blockly.Chabuscript.background=function(a){if(Blockly.Chabuscript.valueToCode(a,"color",Blockly.Chabuscript.ORDER_ATOMIC).block==Block.COLOR)return quadruples.push([Operation.BCK,null,null,null]),"";a=String.format(errors.SYNTAX_ERROR,"color");printToShell(a,!0)};Blockly.Chabuscript.functions={};
Blockly.Chabuscript.func_block=function(a){initMemVars();var b=quadruples.length,c=a.getFieldValue("type"),d=a.getFieldValue("funcName");Blockly.Chabuscript.statementToCode(a,"params");Blockly.Chabuscript.statementToCode(a,"stmts");if(funcIsUnique(d)){var e;switch(c){case "void":e=Type.VOID;break;case "number":e=Type.NUMBER;break;case "boolean":e=Type.BOOL;break;case "string":e=Type.STRING}addProc(d,e,b,params,0);quadruples.push([Operation.RET,null,null,null]);params=[]}else a=String.format(errors.DUPLICATE_FUNCTION_NAME,
d),printToShell(a,!0);return code};Blockly.Chabuscript.main=function(a){initMemVars();a="start {"+Blockly.Chabuscript.statementToCode(a,"maint_stmts")+"} end";addProc("start",Type.MAIN,quadruples.length,[],0);quadruples.push([Operation.END,null,null,null]);return a};
Blockly.Chabuscript.param_block=function(a){var b=a.getFieldValue("param_type");a=a.getFieldValue("param_name");if(varIsUnique(a)&&funcIsUnique(a)){var c,d;switch(b){case "number":c=numberMem++;d=Type.NUMBER;break;case "string":c=stringMem++;d=Type.STRING;break;case "boolean":c=boolMem++,d=Type.BOOL}addLocalVar(a,d,c,0);params.push(d);return""}b=String.format(errors.DUPLICATE_VARIABLE_NAME,a);printToShell(b,!0)};
Blockly.Chabuscript.return_stmt=function(a){a.getFieldValue("value");a=Operation.RTRN;result=tmpNumMem++;arg2=arg1=null;quadruples.push([a,result,arg1,arg2]);return""};
Blockly.Chabuscript.invokefuncreturn=function(a){var b=a.getFieldValue("func_name");currentFuncName=b;if(funcIsUnique(b))b=String.format(errors.UNDECLARED_FUNCTION,b),printToShell(b,!0);else{quadruples.push([Operation.ERA,b,null,null]);Blockly.Chabuscript.valueToCode(a,"params",Blockly.Chabuscript.ORDER_ATOMIC);a=dirProcs[b][DirProcAccess.QUADINI];if(paramNumber!=funcParamNum){b=String.format(errors.PARAMETER_LENGTH_MISMATCH,text_func_id,funcParamNum,paramNumber);printToShell(b,!0);return}var c=tmpNumMem++;
quadruples.push([Operation.GOSUB,a,null,null]);quadruples.push([Operation.ASSIGN,b,null,c])}paramNumber=0;return code};
Blockly.Chabuscript.invokevoidfunc=function(a){var b=a.getFieldValue("func_id");currentFuncName=b;if(funcIsUnique(text_func_name))b=String.format(errors.UNDECLARED_FUNCTION,text_func_name),printToShell(b,!0);else{quadruples.push([Opeation.ERA,b]);Blockly.Chabuscript.valueToCode(a,"NAME",Blockly.Chabuscript.ORDER_ATOMIC);a=dirProcs[b][1];var c=getProcParams(b).length;if(paramNumber!=c){b=String.format(errors.PARAMETER_LENGTH_MISMATCH,b,c,paramNumber);printToShell(b,!0);return}quadruples.push([Operation.GOSUB,
a,null,null])}paramNumber=0;return code};Blockly.Chabuscript.func_param=function(a){a=a.getFieldValue("param");var b=getProcParams(currentFuncName)[paramNumber+1],c=checkParamType(a),d=c[0],c=c[1];if(b!=d)a=String.format(errors.PARAMETER_TYPE_MISMATCH,currentFuncName,b,d,paramNumber+1),printToShell(a,!0);else return b=Operation.PARAM,d=++paramNumber,quadruples.push([b,c,null,d]),a};Blockly.Chabuscript.lists={};Blockly.Chabuscript.list_empty=function(a){var b=a.getFieldValue("type"),c=a.getFieldValue("list_name");a=a.getFieldValue("size");if(varIsUnique(c)&&funcIsUnique(c)){a=parseInt(a);var b=checkListType(b),d=sumAddress(b,a);addLocalVar(c,b,d,1,a);return""}c=String.format(errors.DUPLICATE_VARIABLE_NAME,c);printToShell(c,!0)};
Blockly.Chabuscript.list_values=function(a){var b=a.getFieldValue("param_type"),c=a.getFieldValue("listName_name");if(varIsUnique(c)&&funcIsUnique(c)){var b=checkListType(b),d=sumAddress(b,0);addLocalVar(c,b,d,1,0);pOper.push(c);Blockly.Chabuscript.statementToCode(a,"values");pOper.pop();addLocalVar(c,b,d,1,listElements);sumAddress(b,listElements);listElements=0;return""}a=String.format(errors.DUPLICATE_VARIABLE_NAME,c);printToShell(a,!0)};
Blockly.Chabuscript.list_item=function(a){var b=a.getFieldValue("list_ITEM");a=pOper.pop();var c=varTable[a][TableVarAccess.TYPE],d=Operation.INITPUT,e=checkInputType(b,c),f=varTable[a][TableVarAccess.ADDRESS]+listElements;if(b in varTable&&varTable[b][TableVarAccess.TYPE]==c)return b=varTable[text_item][TableVarAccess.ADDRESS],quadruples.push([d,b,null,f]),listElements+=1,pOper.push(a),"";if(0!=e[0])return b=addConstant(e[1],c),quadruples.push([d,b,null,f]),listElements+=1,pOper.push(a),"";a=String.format(errors.INCORRECT_TYPE,
b,a);printToShell(a,!0)};
Blockly.Chabuscript.list_put=function(a){var b=a.getFieldValue("list_name"),c=a.getFieldValue("item"),d=a.getFieldValue("index");a=checkParamType(d);var e=varTable[b][TableVarAccess.TYPE],f=checkInputType(c,e);if(a[0]==Type.NUMBER){var d=Operation.SUM,g=tmpNumMem++;quadruples.push([d,a[1],varTable[b][TableVarAccess.ADDRESS],g]);d=Operation.VER;quadruples.push([d,g,0,varTable[b][TableVarAccess.SIZE]]);d=Operation.PUT;if(c in varTable&&varTable[c][TableVarAccess.TYPE]==e)return b=varTable[c][TableVarAccess.ADDRESS],
quadruples.push([d,b,null,g]),"";if(0!=f[0])return b=addConstant(f[1],e),quadruples.push([d,b,null,g]),"";b=String.format(errors.INCORRECT_TYPE,c,b)}else b=String.format(errors.INCORRECT_TYPE,d,b);printToShell(b,!0)};
Blockly.Chabuscript.remove_item=function(a){var b=a.getFieldValue("list_ITEM"),c=a.getFieldValue("index");a=checkParamType(c);if(a[0]==Type.NUMBER){var c=Operation.SUM,d=tmpNumMem++;quadruples.push([c,a[1],varTable[b][TableVarAccess.ADDRESS],d]);c=Operation.VER;quadruples.push([c,d,0,varTable[b][TableVarAccess.SIZE]]);c=Operation.REMOVE;quadruples.push([c,d,null,null])}else b=String.format(errors.INCORRECT_TYPE,c,b),printToShell(b,!0)};Blockly.Chabuscript.logic={};Blockly.Chabuscript.logic_if=function(a){var b=Blockly.Chabuscript.valueToCode(a,"IF",Blockly.Chabuscript.ORDER_ATOMIC);if(checkInputType(b,Type.BOOL))return b=pilaO.pop(),quadruples.push([Operation.GOTOF,b,null,0]),b=quadruples.length-1,Blockly.Chabuscript.statementToCode(a,"IF_DO"),quadruples[b][3]=quadruples.length,"";a=String.format(errors.BOOL_CONDITION,"If");printToShell(a,!0)};
Blockly.Chabuscript.logic_if_else=function(a){var b=Blockly.Chabuscript.valueToCode(a,"IF",Blockly.Chabuscript.ORDER_ATOMIC);if(checkInputType(b,Type.BOOL))return b=pilaO.pop(),quadruples.push([Operation.GOTOF,b,null,0]),b=quadruples.length-1,Blockly.Chabuscript.statementToCode(a,"IF_DO"),quadruples.push([Operation.GOTO,null,null,0]),quadruples[b][3]=quadruples.length,b=quadruples.length-1,Blockly.Chabuscript.statementToCode(a,"ELSE_DO"),quadruples[b][3]=quadruples.length,"";a=String.format(errors.BOOL_CONDITION,
"If");printToShell(a,!0)};
Blockly.Chabuscript.logic_if_elsif_else=function(a){var b=Blockly.Chabuscript.valueToCode(a,"IF",Blockly.Chabuscript.ORDER_ATOMIC);if(checkInputType(b,Type.BOOL)){var c=pilaO.pop();quadruples.push([Operation.GOTOF,c,null,0]);c=quadruples.length-1;Blockly.Chabuscript.statementToCode(a,"IF_DO");quadruples.push([Operation.GOTO,null,null,0]);quadruples[c][3]=quadruples.length;var d=quadruples.length-1;Blockly.Chabuscript.valueToCode(a,"ELSIF",Blockly.Chabuscript.ORDER_ATOMIC);if(checkInputType(b,Type.BOOL))return c=
pilaO.pop(),quadruples.push([Operation.GOTOF,c,null,0]),c=quadruples.length-1,Blockly.Chabuscript.statementToCode(a,"ELSIF_DO"),quadruples.push([Operation.GOTO,null,null,0]),quadruples[c][3]=quadruples.length,b=quadruples.length-1,Blockly.Chabuscript.statementToCode(a,"ELSE_DO"),quadruples[d][3]=quadruples.length,quadruples[b][3]=quadruples.length,"";a=String.format(errors.BOOL_CONDITION,"Else-if")}else a=String.format(errors.BOOL_CONDITION,"If");printToShell(a,!0)};
Blockly.Chabuscript.boolean_compare_expression=function(a){var b=Blockly.Chabuscript.valueToCode(a,"left",Blockly.Chabuscript.ORDER_ATOMIC),c=a.getFieldValue("compare");a=Blockly.Chabuscript.valueToCode(a,"right",Blockly.Chabuscript.ORDER_ATOMIC);var d;d="equals"==c?Operation.EQL:"less"==c?Operation.LESS:"greater"==c?Operation.GRT:Operation.DIFF;if(semanticCube[b.type][a.type][d]!=Type.ERR)return c=tmpBoolMem++,quadruples.push([d,b.address,a.address,c]),{type:Type.BOOL,address:c};b=String.format(errors.INCOMPATIBLE,
c);printToShell(b,!0)};Blockly.Chabuscript.boolean_expression=function(a){"TRUE"===a.getFieldValue("flag")?pilaO.push(!0):pilaO.push(!1);return""};Blockly.Chabuscript.loops={};Blockly.Chabuscript.loop_while=function(a){var b=quadruples.length,c=Blockly.Chabuscript.valueToCode(a,"while_cond",Blockly.Chabuscript.ORDER_ATOMIC);if(checkInputType(c,Type.BOOL))return c=pilaO.pop(),quadruples.push([Operation.GOTOF,c,null,0]),c=quadruples.length-1,Blockly.Chabuscript.statementToCode(a,"while_stmts"),quadruples.push([Operation.GOTO,null,null,c]),quadruples[b][3]=quadruples.length,"";a=String.format(errors.BOOL_CONDITION,"While");printToShell(a,!0)};Blockly.Chabuscript.math={};
Blockly.Chabuscript.assign=function(a){var b=Blockly.Chabuscript.valueToCode(a,"opIzq",Blockly.Chabuscript.ORDER_ATOMIC),c=Blockly.Chabuscript.valueToCode(a,"opDer",Blockly.Chabuscript.ORDER_ATOMIC);if(semanticCube[b.type][c.type][Operation.ASSIGN]!=Type.ERR)return a=Operation.ASSIGN,c=c.address,b=b.address,quadruples.push([a,c,null,b]),"";b=String.format(errors.INCOMPATIBLE_TYPE_OP,getTypeStringFromEnum(b.type),getTypeStringFromEnum(c.type),"assignment.");printToShell(b,!0)};
Blockly.Chabuscript.term=function(a){Blockly.Chabuscript.valueToCode(a,"opIzq",Blockly.Chabuscript.ORDER_ATOMIC);var b=a.getFieldValue("op");Blockly.Chabuscript.valueToCode(a,"opDer",Blockly.Chabuscript.ORDER_ATOMIC);var c,d;a="MULT"==b?Operation.MULT:Operation.DIV;b=numMem++;c=numMem++;d=tmpNumMem++;quadruples.push([a,b,c,d]);return{type:Type.NUMBER,address:d}};
Blockly.Chabuscript.exp=function(a){Blockly.Chabuscript.valueToCode(a,"opIzq",Blockly.Chabuscript.ORDER_ATOMIC);var b=a.getFieldValue("op");Blockly.Chabuscript.valueToCode(a,"opDer",Blockly.Chabuscript.ORDER_ATOMIC);var c,d;a="SUM"==b?Operation.SUM:Operation.MINUS;b=numMem++;c=numMem++;d=tmpNumMem++;quadruples.push([a,b,c,d]);return{type:Type.NUMBER,address:d}};
Blockly.Chabuscript.random=function(a){var b=Blockly.Chabuscript.valueToCode(a,"min",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"max",Blockly.Chabuscript.ORDER_ATOMIC);var c=Operation.RND,d=b.type==Type.NUMBER?!0:!1,e=a.type==Type.NUMBER?!0:!1;if(d&&e)return d=tmpNumMem++,quadruples.push([c,b.address,a.address,d]),{type:Type.NUMBER,address:d};d?e||(b=String.format(errors.INCORRECT_TYPE_OP,"max","random"),printToShell(b,!0)):(b=String.format(errors.INCORRECT_TYPE_OP,"min",
"random"),printToShell(b,!0))};Blockly.Chabuscript.paren=function(a){return["("+Blockly.Chabuscript.valueToCode(a,"expression",Blockly.Chabuscript.ORDER_ATOMIC)+")",Blockly.Chabuscript.ORDER_NONE]};Blockly.Chabuscript.text={};Blockly.Chabuscript.print=function(a){a=Blockly.Chabuscript.valueToCode(a,"print-stmt",Blockly.Chabuscript.ORDER_ATOMIC);quadruples.push([Operation.PRINT,null,null,a]);return quadruples.length-1};Blockly.Chabuscript.print_ctestring=function(a){a=a.getFieldValue("print_txt");var b;b=Operation.PRINT;address=addConstant(a);quadruples.push([b,null,null,address]);return quadruples.length-1};Blockly.Chabuscript.variables={};Blockly.Chabuscript["var"]=function(a){var b=a.getFieldValue("type");a=a.getFieldValue("var_id");if(varIsUnique(a)&&funcIsUnique(a)){var c,d;switch(b){case "number":c=numberMem++;d=Type.NUMBER;break;case "string":c=stringMem++;d=Type.STRING;break;case "boolean":c=boolMem++,d=Type.BOOL}addLocalVar(a,d,c,0);return b+" "+a}b=String.format(errors.DUPLICATE_VARIABLE_NAME,a);printToShell(b,!0)};
Blockly.Chabuscript.variables_exist_var=function(a){a=a.getFieldValue("var_name");var b=checkParamType(a);return{type:b[0],address:b[1],dimension:a in varTable?varTable[a][TableVarAccess.DIM]:0}};