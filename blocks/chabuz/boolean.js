Blockly.Blocks['boolean_compare'] = {
  init: function() {
    this.appendValueInput("left_compare")
        .setCheck("Number");
    this.appendValueInput("right_compare")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["=", "equals"], ["<", "less"], [">", "greater"], ["<>", "different"]]), "compare");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
