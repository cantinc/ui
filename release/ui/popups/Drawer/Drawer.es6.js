import { __rest } from 'tslib';
import { style, useShow, Ref, use } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import { onDestroy } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../layout/index.es6.js';
import modules_649c3d85 from './Drawer.scss.es6.js';
import { setOverflow } from '../../../utils/setOverflow/setOverflow.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_649c3d85);
let drawersCount = 0;
const transformPlacements = {
    left: '-30%, 0',
    top: '0, -30%',
    right: '30%, 0',
    bottom: '0, 30%',
};
function Drawer(_a = {}) {
    var { onclose, size = 320, placement = 'left', style = '' } = _a, props = __rest(_a, ["onclose", "size", "placement", "style"]);
    const children = useChildren();
    const styles = useStyle();
    const show = useShow();
    const hide = new Ref();
    if (!drawersCount) {
        setOverflow('hidden');
    }
    drawersCount++;
    onDestroy(() => {
        drawersCount--;
        if (!drawersCount) {
            setOverflow('');
        }
    });
    const styleHandler = () => {
        const right = placement === 'right' ? '--ui-drawer-right:0;' : '';
        const bottom = placement === 'bottom' ? '--ui-drawer-bottom:0;' : '';
        const sizeStyle = `--ui-drawer-${['left', 'right'].includes(placement) ? 'width' : 'height'}:${size}px;`;
        const transformStyle = `--ui-drawer-transform:translate(${transformPlacements[placement]});`;
        return `${right}${bottom}${transformStyle}${sizeStyle}${use(style)}`;
    };
    // @ts-expect-error
    props._close = () => onclose;
    return ({type:'delay',props:{ref:hide,hide:300},children:[{type:Flex,props:{...props,style:styleHandler,class:() => {
            var _a;
            return [
                styles.root,
                show.value && styles.show,
                ((_a = hide.value) === null || _a === void 0 ? void 0 : _a.value) && styles.hide,
            ];
        }},children:[children]}]});
}

export { Drawer };
