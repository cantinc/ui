'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../../hooks/index.js');
require('../../../utils/index.js');
require('../../buttons/index.js');
require('../../layout/index.js');
var Drawer$1 = require('./Drawer.scss.js');
var useTouchHide = require('../../../hooks/useTouchHide/useTouchHide.js');
var setOverflow = require('../../../utils/setOverflow/setOverflow.js');
var Flex = require('../../layout/Flex/Flex.js');
var CloseButton = require('../../buttons/CloseButton/CloseButton.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Drawer$1["default"]);
let drawersCount = 0;
function Drawer(_a = {}) {
    var { onclose, size = 388, placement = 'left', closeButtonPlacement, closeIcon, style, ref = new dom.Ref() } = _a, props = tslib.__rest(_a, ["onclose", "size", "placement", "closeButtonPlacement", "closeIcon", "style", "ref"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    const show = dom.useShow();
    const hide = new dom.Ref();
    const { touched, touchHide, handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchHide.useTouchHide({
        hide: () => onclose === null || onclose === void 0 ? void 0 : onclose('touch'),
        placement,
        element: ref,
    });
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
    return ({type:'delay',props:{ref:hide,hide:300},children:[{type:'div',props:{...overlayHack,ontouchstart:handleTouchStart,ontouchmove:handleTouchMove,ontouchend:handleTouchEnd,style:Object.assign(Object.assign({}, style), { '--ui-drawer-size': `${size}px`, '--ui-drawer-touch-hide': () => `${touchHide.value}` }),class:() => {
            var _a;
            return classes__default["default"]([
                styles.root,
                show.value && styles.show,
                styles[placement],
                touched.value && styles.touch,
                ((_a = hide.value) === null || _a === void 0 ? void 0 : _a.value) && styles.hide,
            ]);
        }},children:[{type:Flex.Flex,props:{...props,ref:ref,class:() => styles.content},children:[children]},{type:CloseButton.CloseButton,props:{icon:closeIcon,placement:closeButtonPlacement,onclick:() => onclose === null || onclose === void 0 ? void 0 : onclose('close')}}]}]});
}

exports.Drawer = Drawer;
