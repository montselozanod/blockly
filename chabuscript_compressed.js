// Do not edit this file; automatically generated by build.py.
'use strict';

Blockly.Chabuscript=new Blockly.Generator("Chabuscript");Blockly.Chabuscript.addReservedWords("start,function,void,end,if,else,while,return,print,number,string,bool,list,and,or,not,set,less?,greater?,equals?, different?,color,line,shape,draw,polygon,circle,call,rectangle,point,true,false,elif,var,lambda,delete");Blockly.Chabuscript.ORDER_ATOMIC=0;Blockly.Chabuscript.ORDER_FUNCTION_CALL=1;Blockly.Chabuscript.ORDER_LOGICAL_NOT=2;Blockly.Chabuscript.ORDER_MULTIPLICATION=3;
Blockly.Chabuscript.ORDER_DIVISION=3;Blockly.Chabuscript.ORDER_MODULUS=3;Blockly.Chabuscript.ORDER_ADDITION=4;Blockly.Chabuscript.ORDER_SUBTRACTION=4;Blockly.Chabuscript.ORDER_RELATIONAL=5;Blockly.Chabuscript.ORDER_EQUALITY=6;Blockly.Chabuscript.ORDER_LOGICAL_AND=7;Blockly.Chabuscript.ORDER_LOGICAL_OR=8;Blockly.Chabuscript.ORDER_CONDITIONAL=9;Blockly.Chabuscript.ORDER_LAMBDA=10;Blockly.Chabuscript.ORDER_ASSIGNMENT=11;Blockly.Chabuscript.ORDER_COMMA=12;Blockly.Chabuscript.ORDER_NONE=99;
Blockly.Chabuscript.init=function(a){Blockly.Chabuscript.definitions_=Object.create(null);Blockly.Chabuscript.functionNames_=Object.create(null);Blockly.Chabuscript.variableDB_?Blockly.Chabuscript.variableDB_.reset():Blockly.Chabuscript.variableDB_=new Blockly.Names(Blockly.Chabuscript.RESERVED_WORDS_);var b=[];a=Blockly.Variables.allVariables(a);for(var c=0;c<a.length;c++)b[c]="var "+Blockly.Chabuscript.variableDB_.getName(a[c],Blockly.Variables.NAME_TYPE)+";";Blockly.Chabuscript.definitions_.variables=
b.join("\n")};Blockly.Chabuscript.finish=function(a){var b=[],c;for(c in Blockly.Chabuscript.definitions_)b.push(Blockly.Chabuscript.definitions_[c]);delete Blockly.Chabuscript.definitions_;delete Blockly.Chabuscript.functionNames_;Blockly.Chabuscript.variableDB_.reset();return b.join("\n\n")+"\n\n\n"+a};Blockly.Chabuscript.scrubNakedValue=function(a){return a+";\n"};Blockly.Chabuscript.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.Chabuscript.scrub_=function(a,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=Blockly.Chabuscript.prefixLines(d,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Chabuscript.allNestedComments(d))&&(c+=Blockly.Chabuscript.prefixLines(d,"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.Chabuscript.blockToCode(e);return c+
b+e};Blockly.Chabuscript.drawing={};Blockly.Chabuscript.color=function(a){var b=Blockly.Chabuscript.valueToCode(a,"red",Blockly.Chabuscript.ORDER_ATOMIC),c=Blockly.Chabuscript.valueToCode(a,"green",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"blue",Blockly.Chabuscript.ORDER_ATOMIC);return["color("+b+","+c+","+a+")",Blockly.Chabuscript.ORDER_NONE]};
Blockly.Chabuscript.draw=function(a){var b=Blockly.Chabuscript.valueToCode(a,"shape",Blockly.Chabuscript.ORDER_ATOMIC),c=Blockly.Chabuscript.valueToCode(a,"color",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"point-width",Blockly.Chabuscript.ORDER_ATOMIC);return"draw shape "+b+" "+c+" pw:"+a+";"};
Blockly.Chabuscript.point=function(a){var b=Blockly.Chabuscript.valueToCode(a,"x",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"y",Blockly.Chabuscript.ORDER_ATOMIC);return["point x:"+b+" y:"+a,Blockly.Chabuscript.ORDER_NONE]};Blockly.Chabuscript.line=function(a){var b=Blockly.Chabuscript.valueToCode(a,"point1",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"point2",Blockly.Chabuscript.ORDER_ATOMIC);return["line p1:"+b+" p2: "+a,Blockly.Chabuscript.ORDER_NONE]};
Blockly.Chabuscript.polygon=function(a){return["polygon points "+Blockly.Chabuscript.valueToCode(a,"points",Blockly.Chabuscript.ORDER_ATOMIC),Blockly.Chabuscript.ORDER_NONE]};Blockly.Chabuscript.circle=function(a){var b=Blockly.Chabuscript.valueToCode(a,"radius",Blockly.Chabuscript.ORDER_ATOMIC);return["circle at: "+Blockly.Chabuscript.valueToCode(a,"NAME",Blockly.Chabuscript.ORDER_ATOMIC)+" r:"+b,Blockly.Chabuscript.ORDER_NONE]};
Blockly.Chabuscript.rectangle=function(a){var b=Blockly.Chabuscript.valueToCode(a,"point",Blockly.Chabuscript.ORDER_ATOMIC),c=Blockly.Chabuscript.valueToCode(a,"width",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"height",Blockly.Chabuscript.ORDER_ATOMIC);return["rectangle at:"+b+" w:"+c+" h:"+a,Blockly.Chabuscript.ORDER_NONE]};Blockly.Chabuscript.background=function(a){return"background "+Blockly.Chabuscript.valueToCode(a,"color",Blockly.Chabuscript.ORDER_ATOMIC)};Blockly.Chabuscript.functions={};Blockly.Chabuscript.func_block=function(a){var b=a.getFieldValue("type"),c=a.getFieldValue("funcName"),d=Blockly.Chabuscript.statementToCode(a,"params");a=Blockly.Chabuscript.statementToCode(a,"stmts");return"function "+b+" "+c+"params:("+d+"){"+a+"} end"};Blockly.Chabuscript.main=function(a){return["start {"+Blockly.Chabuscript.statementToCode(a,"maint_stmts")+"} end",Blockly.JavaScript.ORDER_NONE]};
Blockly.JavaScript.param_block=function(a){var b=a.getFieldValue("param_type");a=a.getFieldValue("param_name");return b+" "+a+";"};Blockly.JavaScript.return_stmt=function(a){return"return "+a.getFieldValue("value")+";"};Blockly.Chabuscript.lists={};Blockly.Chabuscript.list_values=function(a){a.getFieldValue("param_type");a.getFieldValue("listName_name");Blockly.JavaScript.statementToCode(a,"values");return"...;\n"};Blockly.Chabuscript.list_item=function(a){return a.getFieldValue("list_ITEM")+","};Blockly.Chabuscript.add_item=function(a){a.getFieldValue("list_ITEM");a.getFieldValue("new_Item");return"...;\n"};Blockly.Chabuscript.remove_item=function(a){a.getFieldValue("list_ITEM");a.getFieldValue("index");return"...;\n"};Blockly.Chabuscript.logic={};Blockly.Chabuscript.logic_if=function(a){Blockly.Chabuscript.valueToCode(a,"IF",Blockly.Chabuscript.ORDER_ATOMIC);Blockly.Chabuscript.statementToCode(a,"DO");return"...;\n"};Blockly.Chabuscript.logic_if_else=function(a){Blockly.Chabuscript.valueToCode(a,"IF",Blockly.Chabuscript.ORDER_ATOMIC);Blockly.Chabuscript.statementToCode(a,"DO");Blockly.Chabuscript.statementToCode(a,"NAME");return"...;\n"};
Blockly.Chabuscript.logic_if_elsif_else=function(a){Blockly.Chabuscript.valueToCode(a,"IF",Blockly.Chabuscript.ORDER_ATOMIC);Blockly.Chabuscript.statementToCode(a,"DO");Blockly.Chabuscript.valueToCode(a,"ELSIF",Blockly.Chabuscript.ORDER_ATOMIC);Blockly.Chabuscript.statementToCode(a,"NAME");Blockly.Chabuscript.statementToCode(a,"ELSE");return"...;\n"};
Blockly.Chabuscript.boolean_compare_expression=function(a){Blockly.Chabuscript.valueToCode(a,"left",Blockly.Chabuscript.ORDER_ATOMIC);a.getFieldValue("compare");Blockly.Chabuscript.valueToCode(a,"right",Blockly.Chabuscript.ORDER_ATOMIC);return["...",Blockly.Chabuscript.ORDER_NONE]};Blockly.Chabuscript.boolean_expression=function(a){a.getFieldValue("flag");return["...",Blockly.Chabuscript.ORDER_NONE]};Blockly.Chabuscript.loops={};Blockly.Chabuscript.loop_while=function(a){Blockly.Chabuscript.valueToCode(a,"while_cond",Blockly.Chabuscript.ORDER_ATOMIC);Blockly.Chabuscript.statementToCode(a,"while_stmts");return"...;\n"};Blockly.Chabuscript.math={};Blockly.Chabuscript.assign=function(a){var b=Blockly.Chabuscript.valueToCode(a,"opIzq",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"opDer",Blockly.Chabuscript.ORDER_ATOMIC);return b+"="+a+";"};Blockly.Chabuscript.term=function(a){var b=Blockly.Chabuscript.valueToCode(a,"opIzq",Blockly.Chabuscript.ORDER_ATOMIC),c=a.getFieldValue("op");a=Blockly.Chabuscript.valueToCode(a,"opDer",Blockly.Chabuscript.ORDER_ATOMIC);return[b+" "+c+" "+a,Blockly.Chabuscript.ORDER_MULTIPLICATION]};
Blockly.Chabuscript.exp=function(a){var b=Blockly.Chabuscript.valueToCode(a,"opIzq",Blockly.Chabuscript.ORDER_ATOMIC),c=a.getFieldValue("op");a=Blockly.Chabuscript.valueToCode(a,"opDer",Blockly.Chabuscript.ORDER_ATOMIC);return[b+" "+c+" "+a,Blockly.Chabuscript.ORDER_ADDITION]};
Blockly.Chabuscript.random=function(a){var b=Blockly.Chabuscript.valueToCode(a,"min",Blockly.Chabuscript.ORDER_ATOMIC);a=Blockly.Chabuscript.valueToCode(a,"max",Blockly.Chabuscript.ORDER_ATOMIC);return["random num min:"+b+" max:"+a,Blockly.Chabuscript.ORDER_NONE]};Blockly.Chabuscript.paren=function(a){return["("+Blockly.Chabuscript.valueToCode(a,"expression",Blockly.Chabuscript.ORDER_ATOMIC)+")",Blockly.Chabuscript.ORDER_NONE]};Blockly.Chabuscript.text={};Blockly.Chabuscript.print=function(a){Blockly.Chabuscript.valueToCode(a,"print-stmt",Blockly.Chabuscript.ORDER_ATOMIC);return"...;\n"};Blockly.Chabuscript.print_ctestring=function(a){a.getFieldValue("print_txt");return"...;\n"};Blockly.Chabuscript.variables={};Blockly.Chabuscript["var"]=function(a){a.getFieldValue("type");a=a.getFieldValue("var_id");varIsUnique(a);return"...;\n"};Blockly.Chabuscript.variables_exist_var=function(a){return[a.getFieldValue("var_name"),Blockly.Chabuscript.ORDER_NONE]};