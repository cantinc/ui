'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../Spin/index.js');
var AsyncSpin$1 = require('./AsyncSpin.scss.js');
var Spin = require('../Spin/Spin.js');

const useStyle = dom.style(AsyncSpin$1["default"]);
function AsyncSpin(_a = {}) {
    var { delay = 300, showDelay = 0, style } = _a, props = tslib.__rest(_a, ["delay", "showDelay", "style"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    const hide = new dom.Ref();
    const show = dom.useShow(delay + showDelay);
    return ({type:'delay',props:{ref:hide,show:showDelay,hide:delay},children:[{type:Spin.Spin,props:{...props,style:Object.assign(Object.assign({}, style), { '--ui-spin-delay': `${delay}ms` }),class:() => {
            var _a;
            return [
                styles.root,
                show.value && styles.show,
                ((_a = hide.value) === null || _a === void 0 ? void 0 : _a.value) && styles.hide,
            ];
        }},children:[children]}]});
}

exports.AsyncSpin = AsyncSpin;
