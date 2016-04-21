// Do not edit this file; automatically generated by build.py.
'use strict';

Blockly.Chabuscript=new Blockly.Generator("Chabuscript");Blockly.Chabuscript.addReservedWords("start,function,void,end,if,else,while,return,print,number,string,bool,list,and,or,not,set,less?,greater?,equals?, different?,color,line,shape,draw,polygon,circle,call,rectangle,point,true,false,elif,var,lambda,delete");Blockly.Chabuscript.ORDER_ATOMIC=0;Blockly.Chabuscript.ORDER_FUNCTION_CALL=1;Blockly.Chabuscript.ORDER_LOGICAL_NOT=2;Blockly.Chabuscript.ORDER_MULTIPLICATION=3;
Blockly.Chabuscript.ORDER_DIVISION=3;Blockly.Chabuscript.ORDER_MODULUS=3;Blockly.Chabuscript.ORDER_ADDITION=4;Blockly.Chabuscript.ORDER_SUBTRACTION=4;Blockly.Chabuscript.ORDER_RELATIONAL=5;Blockly.Chabuscript.ORDER_EQUALITY=6;Blockly.Chabuscript.ORDER_LOGICAL_AND=7;Blockly.Chabuscript.ORDER_LOGICAL_OR=8;Blockly.Chabuscript.ORDER_CONDITIONAL=9;Blockly.Chabuscript.ORDER_LAMBDA=10;Blockly.Chabuscript.ORDER_ASSIGNMENT=11;Blockly.Chabuscript.ORDER_COMMA=12;Blockly.Chabuscript.ORDER_NONE=99;
Blockly.Chabuscript.init=function(a){Blockly.Chabuscript.definitions_=Object.create(null);Blockly.Chabuscript.functionNames_=Object.create(null);Blockly.Chabuscript.variableDB_?Blockly.Chabuscript.variableDB_.reset():Blockly.Chabuscript.variableDB_=new Blockly.Names(Blockly.Chabuscript.RESERVED_WORDS_);var b=[];a=Blockly.Variables.allVariables(a);for(var c=0;c<a.length;c++)b[c]="var "+Blockly.Chabuscript.variableDB_.getName(a[c],Blockly.Variables.NAME_TYPE)+";";Blockly.Chabuscript.definitions_.variables=
b.join("\n")};Blockly.Chabuscript.finish=function(a){var b=[],c;for(c in Blockly.Chabuscript.definitions_)b.push(Blockly.Chabuscript.definitions_[c]);delete Blockly.Chabuscript.definitions_;delete Blockly.Chabuscript.functionNames_;Blockly.Chabuscript.variableDB_.reset();return b.join("\n\n")+"\n\n\n"+a};Blockly.Chabuscript.scrubNakedValue=function(a){return a+";\n"};Blockly.Chabuscript.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.Chabuscript.scrub_=function(a,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=Blockly.Chabuscript.prefixLines(d,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Chabuscript.allNestedComments(d))&&(c+=Blockly.Chabuscript.prefixLines(d,"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.Chabuscript.blockToCode(e);return c+
b+e};Blockly.Chabuscript.drawing={};Blockly.Chabuscript.color=function(a){var b=Blockly.Chabuscript.valueToCode(a,"red",Blockly.Chabuscript.ORDER_ATOMIC),c=Blockly.Chabuscript.valueToCode(a,"green",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"blue",Blockly.Chabuscript.ORDER_ATOMIC);return"color("+b+","+c+","+a+")"};
Blockly.Chabuscript.draw=function(a){var b=Blockly.Chabuscript.valueToCode(a,"shape",Blockly.Chabuscript.ORDER_ATOMIC),c=Blockly.Chabuscript.valueToCode(a,"color",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"point-width",Blockly.Chabuscript.ORDER_ATOMIC);return"draw shape "+b+" "+c+" pw:"+a+";"};
Blockly.Chabuscript.point=function(a){var b=Blockly.Chabuscript.valueToCode(a,"x",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"y",Blockly.Chabuscript.ORDER_ATOMIC);return"point x:"+b+" y:"+a};Blockly.Chabuscript.line=function(a){var b=Blockly.Chabuscript.valueToCode(a,"point1",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"point2",Blockly.Chabuscript.ORDER_ATOMIC);return"line p1:"+b+" p2: "+a};
Blockly.Chabuscript.polygon=function(a){return"polygon points "+Blockly.Chabuscript.valueToCode(a,"points",Blockly.Chabuscript.ORDER_ATOMIC)};Blockly.Chabuscript.circle=function(a){var b=Blockly.Chabuscript.valueToCode(a,"point",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"radius",Blockly.Chabuscript.ORDER_ATOMIC);return"circle at: "+b+" r:"+a};
Blockly.Chabuscript.rectangle=function(a){var b=Blockly.Chabuscript.valueToCode(a,"point",Blockly.Chabuscript.ORDER_ATOMIC),c=Blockly.Chabuscript.valueToCode(a,"width",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"height",Blockly.Chabuscript.ORDER_ATOMIC);return"rectangle at:"+b+" w:"+c+" h:"+a};Blockly.Chabuscript.background=function(a){return"background "+Blockly.Chabuscript.valueToCode(a,"color",Blockly.Chabuscript.ORDER_ATOMIC)};Blockly.Chabuscript.functions={};
Blockly.Chabuscript.func_block=function(a){initMemVars();var b=quadruples.length,c=a.getFieldValue("type"),d=a.getFieldValue("funcName");Blockly.Chabuscript.statementToCode(a,"params");a=Blockly.Chabuscript.statementToCode(a,"stmts");a="function "+c+" "+d+"params:("+statements_params+"){"+a+"} end";if(funcIsUnique(d)){var e;switch(c){case "void":e=Type.VOID;break;case "number":e=Type.NUMBER;break;case "boolean":e=Type.BOOL;break;case "string":e=Type.STRING}addProc(d,e,b,params,0);quadruples.push([Operation.RET,
null,null,null]);params=[]}else b=String.format(errors.DUPLICATE_FUNCTION_NAME,d),printToShell(b,!0);return a};Blockly.Chabuscript.main=function(a){initMemVars();a="start {"+Blockly.Chabuscript.statementToCode(a,"maint_stmts")+"} end";addProc("start",Type.MAIN,quadruples.length,[],0);quadruples.push([Operation.END,null,null,null]);return a};
Blockly.Chabuscript.param_block=function(a){var b=a.getFieldValue("param_type");a=a.getFieldValue("param_name");if(varIsUnique(a)&&funcIsUnique(a)){var c,d;switch(b){case "number":c=numberMem++;d=Type.NUMBER;break;case "string":c=stringMem++;d=Type.STRING;break;case "boolean":c=boolMem++,d=Type.BOOL}addLocalVar(a,d,c,0);params.push(d)}else b=String.format(errors.DUPLICATE_VARIABLE_NAME,a),printToShell(b,!0)};
Blockly.Chabuscript.return_stmt=function(a){a.getFieldValue("value");a=Operation.RTRN;result=tmpNumMem++;arg2=arg1=null;quadruples.push([a,result,arg1,arg2]);return""};
Blockly.Chabuscript.invokefuncreturn=function(a){var b=a.getFieldValue("func_name");currentFuncName=b;if(funcIsUnique(b))a=String.format(errors.UNDECLARED_FUNCTION,b),printToShell(a,!0);else{quadruples.push([Operation.ERA,b,null,null]);Blockly.Chabuscript.valueToCode(a,"params",Blockly.Chabuscript.ORDER_ATOMIC);a=dirProcs[b][1];if(paramNumber!=funcParamNum){a=String.format(errors.PARAMETER_LENGTH_MISMATCH,text_func_id,funcParamNum,paramNumber);printToShell(a,!0);return}quadruples.push([Operation.GOSUB,
a,null,null])}paramNumber=0;return code};
Blockly.Chabuscript.invokevoidfunc=function(a){var b=a.getFieldValue("func_id");currentFuncName=b;if(funcIsUnique(text_func_name))b=String.format(errors.UNDECLARED_FUNCTION,text_func_name),printToShell(b,!0);else{quadruples.push([Opeation.ERA,b]);Blockly.Chabuscript.valueToCode(a,"NAME",Blockly.Chabuscript.ORDER_ATOMIC);a=dirProcs[b][1];var c=getProcParams(b).length;if(paramNumber!=c){b=String.format(errors.PARAMETER_LENGTH_MISMATCH,b,c,paramNumber);printToShell(b,!0);return}quadruples.push([Operation.GOSUB,
a,null,null])}paramNumber=0;return code};Blockly.Chabuscript.func_param=function(a){a=a.getFieldValue("param");var b=getProcParams(currentFuncName)[paramNumber+1],c=checkParamType(a),d=c[0],c=c[1];if(b!=d)return a=String.format(errors.PARAMETER_TYPE_MISMATCH,currentFuncName,b,d,paramNumber+1),printToShell(a,!0),!0;b=Operation.PARAM;d=++paramNumber;quadruples.push([b,c,null,d]);return a};Blockly.Chabuscript.lists={};Blockly.Chabuscript.list_empty=function(a){a.getFieldValue("type");var b=a.getFieldValue("list_name");a.getFieldValue("size");varIsUnique(b)&&funcIsUnique(b);return""};Blockly.Chabuscript.list_values=function(a){a.getFieldValue("param_type");a.getFieldValue("listName_name");Blockly.Chabuscript.statementToCode(a,"values");varIsUnique(text_list_name)&&funcIsUnique(text_list_name)&&addLocalVar(text_list_name,type,address,1);listElements=0;return""};
Blockly.Chabuscript.list_item=function(a){a=a.getFieldValue("list_ITEM");listElements=listElements++;return a+","};Blockly.Chabuscript.list_put=function(a){a.getFieldValue("list_name");a.getFieldValue("item");a.getFieldValue("index");return"...;\n"};Blockly.Chabuscript.remove_item=function(a){var b=a.getFieldValue("list_ITEM");a=a.getFieldValue("index");return"list"+b+"remove"+a+";"};Blockly.Chabuscript.logic={};Blockly.Chabuscript.logic_if=function(a){var b=Blockly.Chabuscript.valueToCode(a,"IF",Blockly.Chabuscript.ORDER_ATOMIC),c=quadruples.length;quadruples.push([GOTOF,quadruples[b][3],null,0]);a=Blockly.Chabuscript.statementToCode(a,"IF_DO");quadruples[c][3]=quadruples.length;return"if"+b+a+"end"};
Blockly.Chabuscript.logic_if_else=function(a){var b=Blockly.Chabuscript.valueToCode(a,"IF",Blockly.Chabuscript.ORDER_ATOMIC),c=quadruples.length,d;quadruples.push([GOTOF,quadruples[b][3],null,0]);var e=Blockly.Chabuscript.statementToCode(a,"IF_DO");d=quadruples.length;quadruples.push(GOTO,null,null,0);quadruples[c][3]=quadruples.length;a=Blockly.Chabuscript.statementToCode(a,"ELSE_DO");quadruples[d][3]=quadruples.length;return"if"+b+e+"else"+a+"end;"};
Blockly.Chabuscript.logic_if_elsif_else=function(a){var b=Blockly.Chabuscript.valueToCode(a,"IF",Blockly.Chabuscript.ORDER_ATOMIC),c=quadruples.length,d;quadruples.push([GOTOF,quadruples[b][3],null,0]);var e=Blockly.Chabuscript.statementToCode(a,"IF_DO"),f=Blockly.Chabuscript.valueToCode(a,"ELSIF",Blockly.Chabuscript.ORDER_ATOMIC);quadruples.push([GOTOF,quadruples[f][3],null,0]);var c=quadruples[c][3]=quadruples.length,g=Blockly.Chabuscript.statementToCode(a,"ELSIF_DO");d=quadruples.length;quadruples.push([GOTO,
null,null,0]);quadruples[c][3]=quadruples.length;a=Blockly.Chabuscript.statementToCode(a,"ELSE_DO");quadruples[d][3]=quadruples.length;return"if"+b+e+"elif"+f+g+"else"+a+"end;"};
Blockly.Chabuscript.boolean_compare_expression=function(a){Blockly.Chabuscript.valueToCode(a,"left",Blockly.Chabuscript.ORDER_ATOMIC);var b=a.getFieldValue("compare");Blockly.Chabuscript.valueToCode(a,"right",Blockly.Chabuscript.ORDER_ATOMIC);var c,d;a="equals"==b?Operation.EQL:"less"==b?Operation.LESS:"greater"==b?Operation.GRT:Operation.DIFF;b=boolMem++;c=boolMem++;d=tmpBoolMem++;quadruples.push([a,b,c,d]);return quadruples.length-1};Blockly.Chabuscript.boolean_expression=function(a){return a.getFieldValue("flag")};Blockly.Chabuscript.loops={};Blockly.Chabuscript.loop_while=function(a){var b=Blockly.Chabuscript.valueToCode(a,"while_cond",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.statementToCode(a,"while_stmts");return"repeat while("+b+")"+a+"end;"};Blockly.Chabuscript.math={};Blockly.Chabuscript.assign=function(a){Blockly.Chabuscript.valueToCode(a,"opIzq",Blockly.Chabuscript.ORDER_ATOMIC);Blockly.Chabuscript.valueToCode(a,"opDer",Blockly.Chabuscript.ORDER_ATOMIC);var b,c;a=Operation.ASSIGN;b=tmpNumMem++;c=numMem++;quadruples.push([a,b,null,c]);return quadruples.length-1};
Blockly.Chabuscript.term=function(a){Blockly.Chabuscript.valueToCode(a,"opIzq",Blockly.Chabuscript.ORDER_ATOMIC);var b=a.getFieldValue("op");Blockly.Chabuscript.valueToCode(a,"opDer",Blockly.Chabuscript.ORDER_ATOMIC);var c,d;a="MULT"==b?Operation.MULT:Operation.DIV;b=numMem++;c=numMem++;d=tmpNumMem++;quadruples.push([a,b,c,d]);return[quadruples.length-1,Blockly.Chabuscript.ORDER_MULTIPLICATION]};
Blockly.Chabuscript.exp=function(a){Blockly.Chabuscript.valueToCode(a,"opIzq",Blockly.Chabuscript.ORDER_ATOMIC);var b=a.getFieldValue("op");Blockly.Chabuscript.valueToCode(a,"opDer",Blockly.Chabuscript.ORDER_ATOMIC);var c,d;a="SUM"==b?Operation.SUM:Operation.MINUS;b=numMem++;c=numMem++;d=tmpNumMem++;quadruples.push([a,b,c,d]);return[quadruples.length-1,Blockly.Chabuscript.ORDER_ADDITION]};
Blockly.Chabuscript.random=function(a){var b=Blockly.Chabuscript.valueToCode(a,"min",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"max",Blockly.Chabuscript.ORDER_ATOMIC);return["random num min:"+b+" max:"+a,Blockly.Chabuscript.ORDER_NONE]};Blockly.Chabuscript.paren=function(a){return["("+Blockly.Chabuscript.valueToCode(a,"expression",Blockly.Chabuscript.ORDER_ATOMIC)+")",Blockly.Chabuscript.ORDER_NONE]};Blockly.Chabuscript.text={};Blockly.Chabuscript.print=function(a){a=Blockly.Chabuscript.valueToCode(a,"print-stmt",Blockly.Chabuscript.ORDER_ATOMIC);quadruples.push([Operation.PRINT,null,null,a]);return quadruples.length-1};Blockly.Chabuscript.print_ctestring=function(a){a=a.getFieldValue("print_txt");var b;b=Operation.PRINT;address=addConstant(a);quadruples.push([b,null,null,address]);return quadruples.length-1};Blockly.Chabuscript.variables={};Blockly.Chabuscript["var"]=function(a){var b=a.getFieldValue("type");a=a.getFieldValue("var_id");if(varIsUnique(a)&&funcIsUnique(a)){var c,d;switch(b){case "number":c=numberMem++;d=Type.NUMBER;break;case "string":c=stringMem++;d=Type.STRING;break;case "boolean":c=boolMem++,d=Type.BOOL}addLocalVar(a,d,c,0);return b+" "+a}b=String.format(errors.DUPLICATE_VARIABLE_NAME,a);printToShell(b,!0)};
Blockly.Chabuscript.variables_exist_var=function(a){a=a.getFieldValue("var_name");if(varExists(a))return varTable[a][1];a=String.format(errors.UNDECLARED_VARIABLE,a);printToShell(a,!0)};