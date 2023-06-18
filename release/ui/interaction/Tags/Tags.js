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
var Tag = require('../Tag/Tag.js');
var Flex = require('../../layout/Flex/Flex.js');

function Tags(_a = {}) {
    var { values, multiple, value = new watchState.State(multiple ? [] : ''), onchange } = _a, props = tslib.__rest(_a, ["values", "multiple", "value", "onchange"]);
    const children = jsx.useChildren();
    onchange = actionProp.actionProp(value, onchange);
    const Item = () => {
        const item = dom.useMapValue();
        const tag = watchState.unwatch(() => dom.use(item));
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
    };
    return ({type:Flex.Flex,props:{gap:8,...props},children:[{type:'map',props:{of:values,key:'value'},children:[{type:Item}]},children]});
}

exports.Tags = Tags;
