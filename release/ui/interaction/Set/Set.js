'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var utils = require('@cantinc/utils');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../icons/index.js');
var Set$1 = require('./Set.scss.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var Icon = require('../../icons/Icon/Icon.js');

const useStyle = dom.style(Set$1["default"]);
const key = Symbol('SetKey');
const setPropsHandler = new jsx.Context(item => item.value);
function Set(_a) {
    var { value = new watchState.State([]), onchange, element: Element, handleItemProps = jsx.useContext(setPropsHandler) } = _a, props = tslib.__rest(_a, ["value", "onchange", "element", "handleItemProps"]);
    const styles = useStyle();
    const children = jsx.useChildren();
    onchange = actionProp.actionProp(value, onchange);
    const customValues = new watchState.Cache(() => {
        const values = dom.use(value);
        for (const value of values) {
            if (key in value)
                continue;
            // @ts-expect-error: unic value hack
            value[key] = utils.randomHash();
        }
        return values;
    });
    const handleAdd = () => {
        onchange === null || onchange === void 0 ? void 0 : onchange([...dom.use(value), Object.assign({}, props)]);
    };
    const handleRemove = (index) => {
        const newValue = [...dom.use(value)];
        newValue.splice(index, 1);
        onchange === null || onchange === void 0 ? void 0 : onchange(newValue);
    };
    return ([{type:'for',props:{of:customValues,key:key},children:[(item) => ({type:Element,props:{...props,...watchState.unwatch(() => handleItemProps(item, Element, props))},children:[{type:'slot',props:{name:'after'},children:[{type:Icon.Icon,props:{class:styles.remove,onclick:(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleRemove(item.index);
            },icon:'brick'}}]}]})]},{type:'div',props:{class:() => styles.root},children:[{type:'button',props:{type:'button',onclick:handleAdd,class:() => styles.addButton},children:[children]}]}]);
}

exports.Set = Set;
exports.setPropsHandler = setPropsHandler;
