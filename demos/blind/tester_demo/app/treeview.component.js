/**
 * Blockly Demos: BlindBlockly
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Angular2 Component that details how Blockly.Block's are rendered in the demo in BlindBlockly. Also handles any interactions with the blocks.
 * @author madeeha@google.com (Madeeha Ghori)
 */
var app = app || {};

app.TreeView = ng.core
  .Component({
    selector: 'tree-view',
    template: `
<li aria-describedby='block-label'>
  <label id='block-label' style='color:red'>{{block.toString()}}</label>
<!--  <select aria-describedby='block-label' aria-label='block menu' (change)='blockMenuSelected(block,$event)' aria-live='assertive'>
    <option value='COPY_BLOCK' select>copy</option>
    <option value='CUT_BLOCK'>cut</option>
    <option value='DELETE_BLOCK'>delete</option>
  </select> -->
  <ul>
    <div *ngFor='#inputBlock of block.inputList'>
      <field-view *ngFor='#field of getInfo(inputBlock)' [field]='field'></field-view>
      <tree-view *ngIf='inputBlock.connection && inputBlock.connection.targetBlock()' [block]='inputBlock.connection.targetBlock()'></tree-view>
      <li *ngIf='inputBlock.connection && !inputBlock.connection.targetBlock()'>
        <label id='input-type-label'>{{inputType(inputBlock.connection)}} input needed:</label>
        <select aria-describedby='input-type-label' aria-label='insert input menu' aria-live='assertive'>
          <option value='MARK_SPOT'>Mark this spot</option>
          <option value='PASTE'>Paste</option>
        </select>
      </li>
    </div>
  </ul>
</li>
<li *ngIf= 'block.nextConnection && block.nextConnection.targetBlock()'>
  <tree-view [block]='block.nextConnection.targetBlock()'></tree-view>
</li>
    `,
    directives: [ng.core.forwardRef(function() { return app.TreeView; }), app.FieldView],
    inputs: ['block'],
  })
  .Class({
    constructor: function() {
      this.infoBlocks = {};
      this.nextBlock = {};
    },
    getInfo: function(block) {
      if (this.infoBlocks[block.id]) {
        //TODO(madeeha): is there a situation in which overwriting often unnecessarily is a problem?
        this.infoBlocks[block.id].length = 0;
      } else {
        this.infoBlocks[block.id] = [];
      }

      var blockInfoList = this.infoBlocks[block.id];

      for (var j = 0, field; field = block.fieldRow[j]; j++) {
        blockInfoList.push(field);
      }

      return this.infoBlocks[block.id];
    },
    inputType: function(connection) {
      if (connection.check_) {
        return connection.check_.join(', ').toUpperCase();
      } else {
        return 'any';
      }
    },
    blockMenuSelected: function(block, event) {
      switch (event.target.value) {
        case 'DELETE_BLOCK':
          console.log('delete case');
          block.dispose(true);
          break;
        case 'CUT_BLOCK':
          console.log('cut case');
          break;
        default:
          console.log('default case');
          break;
      }
      console.log('done');
    }
  });