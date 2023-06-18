'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var watchState = require('watch-state');
require('../../layout/index.js');
require('../../prototypes/index.js');
var Radiobox$1 = require('./Radiobox.scss.js');
var Check = require('../../prototypes/Check/Check.js');
var Flex = require('../../layout/Flex/Flex.js');

const useStyle = dom.style(Object.assign({ root: '', radio: '' }, Radiobox$1["default"]));
function Radiobox(_a = {}) {
    var { values, value = new watchState.State(''), onchange, name, disabled } = _a, props = tslib.__rest(_a, ["values", "value", "onchange", "name", "disabled"]);
    const styles = useStyle();
    const checkStyles = Object.create(styles);
    Object.defineProperty(checkStyles, 'root', {
        get() {
            return styles.radio;
        },
    });
    if (value instanceof watchState.State) {
        const oldOnChange = onchange;
        onchange = (val) => {
            value.value = val;
            oldOnChange === null || oldOnChange === void 0 ? void 0 : oldOnChange(val);
        };
    }
    const Item = () => {
        const item = dom.useMapValue();
        const itemValue = dom.inject(item, item => dom.use(item.value));
        return ({type:Check.Check,props:{disabled:disabled,name:name,checked:() => dom.use(value) === dom.use(itemValue),type:'radio',onchange:() => {
                onchange === null || onchange === void 0 ? void 0 : onchange(dom.use(itemValue));
            },class:checkStyles}});
    };
    return ({type:Flex.Flex,props:{gap:16,...props,class:() => styles.root},children:[{type:'map',props:{of:values || [],key:'value'},children:[{type:Item}]}]});
}

exports.Radiobox = Radiobox;
