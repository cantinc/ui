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
const createStyles = () => {
    const styles = document.createElement('span').style;
    styles.setProperty('border-radius', '20px');
    return styles;
};
function PopoutElement(_a) {
    var { element, style, contentStyle, onhide, rootRef = new Ref() } = _a, props = __rest(_a, ["element", "style", "contentStyle", "onhide", "rootRef"]);
    const children = useChildren();
    const hide = useHidden();
    const preshow = useShow();
    const show = useShow(200);
    const { touched, touchHide, handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchHide({
        hide: onhide,
        touchStart() {
            elementData.value = getData();
        },
    });
    const styles = useStyle();
    useEscapeListener(onhide);
    const getData = () => {
        var _a;
        return ((_a = element === null || element === void 0 ? void 0 : element.value) === null || _a === void 0 ? void 0 : _a.isConnected)
            ? ({
                rect: element.value.getBoundingClientRect(),
                styles: window.getComputedStyle(element.value),
            })
            : ({
                rect: new DOMRect(window.innerWidth / 2, window.innerHeight / 2, 0, 0),
                styles: createStyles(),
            });
    };
    const elementData = new State(getData());
    if (hide) {
        new Watch(() => {
            if (hide.value) {
                elementData.value = getData();
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
