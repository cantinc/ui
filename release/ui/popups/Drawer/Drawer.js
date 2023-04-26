'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
require('../../../hooks/index.js');
require('../../buttons/index.js');
require('../../layout/index.js');
var Drawer$1 = require('./Drawer.scss.js');
var usePopup = require('../../../hooks/usePopup/usePopup.js');
var useTouchHide = require('../../../hooks/useTouchHide/useTouchHide.js');
var CloseButton = require('../../buttons/CloseButton/CloseButton.js');
var Flex = require('../../layout/Flex/Flex.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Drawer$1["default"]);
function Drawer(_a = {}) {
    var { onclose, size = 388, placement = 'left', closeButtonPlacement, closeIcon, style, ref = new dom.Ref() } = _a, props = tslib.__rest(_a, ["onclose", "size", "placement", "closeButtonPlacement", "closeIcon", "style", "ref"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    const show = dom.useShow();
    usePopup.usePopup();
    const hide = new dom.Ref();
    const { touched, touchHide, handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchHide.useTouchHide({
        hide: () => onclose === null || onclose === void 0 ? void 0 : onclose('touch'),
        placement,
        element: ref,
    });
    const overlayHack = {
        _close: () => onclose,
    };
    return ({type:'delay',props:{ref:hide,hide:300},children:[{type:'div',props:{...overlayHack,ontouchstart:handleTouchStart,ontouchmove:handleTouchMove,ontouchend:handleTouchEnd,style:Object.assign(Object.assign({}, style), { '--ui-drawer-size': `${size}px`, '--ui-drawer-touch-hide': () => `${touchHide.value}` }),class:() => {
            var _a;
            return classes__default["default"]([
                styles.root,
                show.value && styles.show,
                styles[placement],
                touched.value && styles.touch,
                ((_a = hide.value) === null || _a === void 0 ? void 0 : _a.value) && styles.hide,
            ]);
        }},children:[{type:CloseButton.CloseButton,props:{icon:closeIcon,placement:closeButtonPlacement,onclick:() => onclose === null || onclose === void 0 ? void 0 : onclose('close')}},{type:Flex.Flex,props:{...props,ref:ref,class:() => styles.content},children:[children]}]}]});
}

exports.Drawer = Drawer;
