'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../layout/index.js');
var Drawer$1 = require('./Drawer.scss.js');
var setOverflow = require('../../../utils/setOverflow/setOverflow.js');
var Flex = require('../../layout/Flex/Flex.js');

const useStyle = dom.style(Drawer$1["default"]);
let drawersCount = 0;
const transformPlacements = {
    left: '-30%, 0',
    top: '0, -30%',
    right: '30%, 0',
    bottom: '0, 30%',
};
function Drawer(_a = {}) {
    var { onclose, size = 320, placement = 'left', style = '' } = _a, props = tslib.__rest(_a, ["onclose", "size", "placement", "style"]);
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
    const styleHandler = () => {
        const right = placement === 'right' ? '--ui-drawer-right:0;' : '';
        const bottom = placement === 'bottom' ? '--ui-drawer-bottom:0;' : '';
        const sizeStyle = `--ui-drawer-${['left', 'right'].includes(placement) ? 'width' : 'height'}:${size}px;`;
        const transformStyle = `--ui-drawer-transform:translate(${transformPlacements[placement]});`;
        return `${right}${bottom}${transformStyle}${sizeStyle}${dom.use(style)}`;
    };
    // @ts-expect-error
    props._close = () => onclose;
    return ({type:'delay',props:{ref:hide,hide:300},children:[{type:Flex.Flex,props:{...props,style:styleHandler,class:() => {
            var _a;
            return [
                styles.root,
                show.value && styles.show,
                ((_a = hide.value) === null || _a === void 0 ? void 0 : _a.value) && styles.hide,
            ];
        }},children:[children]}]});
}

exports.Drawer = Drawer;