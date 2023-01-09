'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../icons/index.js');
require('../../layout/index.js');
var Drawer$1 = require('./Drawer.scss.js');
var setOverflow = require('../../../utils/setOverflow/setOverflow.js');
var Flex = require('../../layout/Flex/Flex.js');
var Icon = require('../../icons/Icon/Icon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Drawer$1["default"]);
let drawersCount = 0;
const transformPlacements = {
    left: '-30%, 0',
    top: '0, -30%',
    right: '30%, 0',
    bottom: '0, 30%',
};
function Drawer(_a = {}) {
    var { onclose, size = 388, placement = 'left', style } = _a, props = tslib.__rest(_a, ["onclose", "size", "placement", "style"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    const show = dom.useShow();
    const hide = new dom.Ref();
    if (!drawersCount) {
        setOverflow.setOverflow('hidden');
    }
    drawersCount++;
    watchState.onDestroy(() => {
        drawersCount--;
        if (!drawersCount) {
            setOverflow.setOverflow('');
        }
    });
    const overlayHack = {
        _close: () => onclose,
    };
    return ({type:'delay',props:{ref:hide,hide:300},children:[{type:'div',props:{...overlayHack,style:Object.assign(Object.assign({}, style), { '--ui-drawer-right': placement === 'right' ? '0' : '', '--ui-drawer-bottom': placement === 'bottom' ? '0' : '', '--ui-drawer-width': ['left', 'right'].includes(placement) ? `${size}px` : '', '--ui-drawer-height': ['top', 'bottom'].includes(placement) ? `${size}px` : '', '--ui-drawer-transform': `translate(${transformPlacements[placement]})` }),class:() => {
            var _a;
            return classes__default["default"]([
                styles.root,
                show.value && styles.show,
                ((_a = hide.value) === null || _a === void 0 ? void 0 : _a.value) && styles.hide,
            ]);
        }},children:[{type:Flex.Flex,props:{...props,class:() => styles.content},children:[children]},{type:Icon.Icon,props:{onclick:() => onclose === null || onclose === void 0 ? void 0 : onclose('close'),icon:'cross',class:() => styles.close}}]}]});
}

exports.Drawer = Drawer;
