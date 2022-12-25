'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../external/index.js');
require('../../interaction/Option/index.js');
require('../Dropdown/index.js');
var DropdownMenu$1 = require('./DropdownMenu.scss.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var Dropdown = require('../Dropdown/Dropdown.js');
var Listener = require('../../external/Listener/Listener.js');
var Option = require('../../interaction/Option/Option.js');

const useStyle = dom.style(DropdownMenu$1["default"]);
function DropdownMenu(_a) {
    var { values, showValues, select = new watchState.State(''), preselect = new watchState.State(''), onSelect, onPreselect } = _a, props = tslib.__rest(_a, ["values", "showValues", "select", "preselect", "onSelect", "onPreselect"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    onSelect = actionProp.actionProp(select, onSelect);
    onPreselect = actionProp.actionProp(preselect, onPreselect);
    const nextPreselect = () => {
        if (!onPreselect)
            return;
        const curValues = dom.use(values);
        if (!(curValues === null || curValues === void 0 ? void 0 : curValues.length))
            return;
        const curPreselect = dom.use(preselect);
        const index = curValues.findIndex(({ value }) => value === curPreselect);
        if (index === -1) {
            const curValue = dom.use(select);
            const valueIndex = curValues.findIndex(({ value }) => value === curValue);
            const nextIndex = valueIndex >= curValues.length - 1 ? 0 : valueIndex + 1;
            return onPreselect(valueIndex === -1 ? curValues[0].value : curValues[nextIndex].value);
        }
        if (index === curValues.length - 1) {
            return onPreselect(curValues[0].value);
        }
        onPreselect(curValues[index + 1].value);
    };
    const prevPreselect = () => {
        if (!onPreselect)
            return;
        const curValues = dom.use(values);
        if (!(curValues === null || curValues === void 0 ? void 0 : curValues.length))
            return;
        const curPreselect = dom.use(preselect);
        const index = curValues.findIndex(({ value }) => value === curPreselect);
        if (index === -1) {
            const curValue = dom.use(select);
            const valueIndex = curValues.findIndex(({ value }) => value === curValue);
            const nextIndex = valueIndex < 1 ? curValues.length - 1 : valueIndex - 1;
            return onPreselect(curValues[nextIndex].value);
        }
        if (index === 0) {
            return onPreselect(curValues[curValues.length - 1].value);
        }
        onPreselect(curValues[index - 1].value);
    };
    const listener = (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            if (e.key === 'ArrowDown') {
                nextPreselect();
            }
            else {
                prevPreselect();
            }
        }
        if (e.key === 'Enter') {
            const preselectValue = dom.use(preselect);
            if (preselectValue) {
                e.preventDefault();
                onSelect === null || onSelect === void 0 ? void 0 : onSelect(preselectValue);
            }
        }
    };
    return ({type:Dropdown.Dropdown,props:{vertical:true,align:'stretch',...props,class:styles},children:[{type:Listener.Listener,props:{type:'keydown',listener:listener}},{type:'for',props:{of:values || [],key:'value'},children:[(item) => ({type:Option.Option,props:{...item.value,selected:() => dom.use(select) === item.value.value,onSelect:() => onSelect === null || onSelect === void 0 ? void 0 : onSelect(item.value.value),preselected:() => dom.use(preselect) === item.value.value,onPreselect:() => onPreselect === null || onPreselect === void 0 ? void 0 : onPreselect(item.value.value),showValues:showValues}})]},children]});
}

exports.DropdownMenu = DropdownMenu;
