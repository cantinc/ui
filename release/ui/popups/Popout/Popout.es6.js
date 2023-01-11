import { __rest } from 'tslib';
import { style, Ref, useHidden, useShow } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import { State, Watch, onDestroy } from 'watch-state';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import '../../layout/index.es6.js';
import modules_f03e01a5 from './Popout.scss.es6.js';
import { useTouchHide } from '../../../hooks/useTouchHide/useTouchHide.es6.js';
import { useEscapeListener } from '../../../hooks/useEscapeListener/useEscapeListener.es6.js';
import { setOverflow } from '../../../utils/setOverflow/setOverflow.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';

const useStyle = style(modules_f03e01a5);
let popoutCount = 0;
function PopoutElement(_a) {
    var { element, style, contentStyle, onhide, rootRef = new Ref() } = _a, props = __rest(_a, ["element", "style", "contentStyle", "onhide", "rootRef"]);
    if (!element.value)
        return null;
    const children = useChildren();
    const hide = useHidden();
    const preshow = useShow();
    const show = useShow(200);
    const { touched, touchHide, handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchHide({
        hide: onhide,
    });
    const styles = useStyle();
    useEscapeListener(onhide);
    const elementData = new State({
        rect: element.value.getBoundingClientRect(),
        styles: window.getComputedStyle(element.value),
    });
    if (hide) {
        new Watch(() => {
            if (element.value && hide.value) {
                elementData.value = {
                    rect: element.value.getBoundingClientRect(),
                    styles: window.getComputedStyle(element.value),
                };
            }
        });
    }
    if (!popoutCount) {
        setOverflow('hidden');
    }
    popoutCount++;
    onDestroy(() => {
        popoutCount--;
        if (!popoutCount) {
            setOverflow('');
        }
    });
    return ({type:'div',props:{ref:rootRef,style:Object.assign(Object.assign({}, style), { '--ui-popout-top': () => `${elementData.value.rect.top}px`, '--ui-popout-left': () => `${elementData.value.rect.left}px`, '--ui-popout-width': () => `${elementData.value.rect.width}px`, '--ui-popout-height': () => `${elementData.value.rect.height}px`, '--ui-popout-radius': () => `${elementData.value.styles.borderRadius}`, '--ui-popout-border': () => `${elementData.value.styles.border}`, '--ui-popout-touch-hide': () => `${touchHide.value}`, '--ui-popout-background': () => `${elementData.value.styles.background}` }),ontouchstart:handleTouchStart,ontouchmove:handleTouchMove,ontouchend:handleTouchEnd,class:() => classes([
            styles.root,
            preshow.value && styles.preshow,
            show.value && styles.show,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
            touched.value && styles.touch,
        ])},children:[{type:Flex,props:{...props,style:contentStyle,class:() => styles.content},children:[children]}]});
}
function Popout(_a) {
    var { show = true, onhide } = _a, props = __rest(_a, ["show", "onhide"]);
    const children = useChildren();
    const hide = new Ref();
    const setHide = actionProp(show, onhide);
    return ({type:'show',props:{state:show},children:[{type:'portal',props:{parent:document.body},children:[{type:'delay',props:{ref:hide,hide:600},children:[{type:PopoutElement,props:{onhide:() => setHide === null || setHide === void 0 ? void 0 : setHide(false),...props},children:[children]}]}]}]});
}

export { Popout };
