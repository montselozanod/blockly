Blockly.ChabuScript['logic_if'] = function(block) {
  var value_if = Blockly.ChabuScript.valueToCode(block, 'IF', Blockly.ChabuScript.ORDER_ATOMIC);
  var statements_do = Blockly.ChabuScript.statementToCode(block, 'DO');
  // TODO: Assemble ChabuScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.ChabuScript['logic_if_else'] = function(block) {
  var value_if = Blockly.ChabuScript.valueToCode(block, 'IF', Blockly.ChabuScript.ORDER_ATOMIC);
  var statements_do = Blockly.ChabuScript.statementToCode(block, 'DO');
  var statements_name = Blockly.ChabuScript.statementToCode(block, 'NAME');
  // TODO: Assemble ChabuScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.ChabuScript['logic_if_elsif_else'] = function(block) {
  var value_if = Blockly.ChabuScript.valueToCode(block, 'IF', Blockly.ChabuScript.ORDER_ATOMIC);
  var statements_do = Blockly.ChabuScript.statementToCode(block, 'DO');
  var value_elsif = Blockly.ChabuScript.valueToCode(block, 'ELSIF', Blockly.ChabuScript.ORDER_ATOMIC);
  var statements_name = Blockly.ChabuScript.statementToCode(block, 'NAME');
  var statements_else = Blockly.ChabuScript.statementToCode(block, 'ELSE');
  // TODO: Assemble ChabuScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.ChabuScript['boolean_compare_expression'] = function(block) {
  var value_left = Blockly.ChabuScript.valueToCode(block, 'left', Blockly.ChabuScript.ORDER_ATOMIC);
  var dropdown_compare = block.getFieldValue('compare');
  var value_right = Blockly.ChabuScript.valueToCode(block, 'right', Blockly.ChabuScript.ORDER_ATOMIC);
  // TODO: Assemble ChabuScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.ChabuScript.ORDER_NONE];
};

Blockly.ChabuScript['boolean_expression'] = function(block) {
  var dropdown_flag = block.getFieldValue('flag');
  // TODO: Assemble ChabuScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.ChabuScript.ORDER_NONE];
};
