Blockly.Blocks['logic_if'] = {
  init: function() {
    this.appendValueInput("IF")
        .setCheck("Boolean")
        .appendField("if");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("do");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['logic_if_else'] = {
  init: function() {
    this.appendValueInput("IF")
        .setCheck("Boolean")
        .appendField("if");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("do");
    this.appendStatementInput("ELSE")
        .setCheck(null)
        .appendField("else");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['logic_if_elsif_else'] = {
  init: function() {
    this.appendValueInput("IF")
        .setCheck("Boolean")
        .appendField("if");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("do");
    this.appendValueInput("ELSIF")
        .setCheck("Boolean")
        .appendField("elsif");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.appendStatementInput("ELSE")
        .setCheck(null)
        .appendField("else");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['boolean_compare_expression'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck("exp");
    this.appendValueInput("right")
        .setCheck("exp")
        .appendField(new Blockly.FieldDropdown([["equals?", "equals"], ["less?", "less"], ["greater?", "greater"], ["different?", "different"]]), "compare");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['boolean_expression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["TRUE", "true"], ["FALSE", "false"]]), "flag");
    this.setOutput(true, "Boolean");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
