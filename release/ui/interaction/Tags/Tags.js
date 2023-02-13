'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../layout/index.js');
require('../Tag/index.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var Flex = require('../../layout/Flex/Flex.js');
var Tag = require('../Tag/Tag.js');

function Tags(_a = {}) {
    var { values, multiple, value = new watchState.State(multiple ? [] : ''), onchange } = _a, props = tslib.__rest(_a, ["values", "multiple", "value", "onchange"]);
    const children = jsx.useChildren();
    onchange = actionProp.actionProp(value, onchange);
    return ({type:Flex.Flex,props:{gap:8,...props},children:[{type:'for',props:{of:values,key:'value'},children:[(item) => {
            const tag = watchState.unwatch(() => item.value);
            return ({type:Tag.Tag,props:{...tag,checked:() => {
                    const currentValue = dom.use(value);
                    return !multiple
                        ? currentValue === tag.value
                        : tag.value
                            ? currentValue.includes(tag.value)
                            : currentValue.length === 0;
                },onchange:val => {
                    var _a;
                    if (onchange) {
                        if (multiple) {
                            if (val) {
                                if (tag.value) {
                                    onchange([...dom.use(value), tag.value]);
                                }
                                else {
                                    onchange([]);
                                }
                            }
                            else {
                                onchange(dom.use(value).filter(v => v !== tag.value));
                            }
                        }
                        else {
                            onchange(tag.value);
                        }
                    }
                    (_a = tag.onchange) === null || _a === void 0 ? void 0 : _a.call(tag, val);
                },type:multiple ? 'checkbox' : 'radio'}});
        }]},children]});
}

exports.Tags = Tags;
