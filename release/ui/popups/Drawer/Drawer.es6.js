import { __rest } from 'tslib';
import { style, Ref, useShow } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import { onDestroy } from 'watch-state';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import '../../buttons/index.es6.js';
import '../../layout/index.es6.js';
import modules_649c3d85 from './Drawer.scss.es6.js';
import { useTouchHide } from '../../../hooks/useTouchHide/useTouchHide.es6.js';
import { setOverflow } from '../../../utils/setOverflow/setOverflow.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';
import { CloseButton } from '../../buttons/CloseButton/CloseButton.es6.js';

const useStyle = style(modules_649c3d85);
let drawersCount = 0;
function Drawer(_a = {}) {
    var { onclose, size = 388, placement = 'left', closeButtonPlacement, closeIcon, style, ref = new Ref() } = _a, props = __rest(_a, ["onclose", "size", "placement", "closeButtonPlacement", "closeIcon", "style", "ref"]);
    const children = useChildren();
    const styles = useStyle();
    const show = useShow();
    const hide = new Ref();
    const { touched, touchHide, handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchHide({
        hide: () => onclose === null || onclose === void 0 ? void 0 : onclose('touch'),
        placement,
        element: ref,
    });
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
    const overlayHack = {
        _close: () => onclose,
    };
    return ({type:'delay',props:{ref:hide,hide:300},children:[{type:'div',props:{...overlayHack,ontouchstart:handleTouchStart,ontouchmove:handleTouchMove,ontouchend:handleTouchEnd,style:Object.assign(Object.assign({}, style), { '--ui-drawer-size': `${size}px`, '--ui-drawer-touch-hide': () => `${touchHide.value}` }),class:() => {
            var _a;
            return classes([
                styles.root,
                show.value && styles.show,
                styles[placement],
                touched.value && styles.touch,
                ((_a = hide.value) === null || _a === void 0 ? void 0 : _a.value) && styles.hide,
            ]);
        }},children:[{type:Flex,props:{...props,ref:ref,class:() => styles.content},children:[children]},{type:CloseButton,props:{icon:closeIcon,placement:closeButtonPlacement,onclick:() => onclose === null || onclose === void 0 ? void 0 : onclose('close')}}]}]});
}

export { Drawer };
