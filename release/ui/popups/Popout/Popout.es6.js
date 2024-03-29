import { __rest } from 'tslib';
import { style, Ref, useHidden, useShow, use } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import { State, Watch } from 'watch-state';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import '../../buttons/index.es6.js';
import '../../layout/index.es6.js';
import modules_f03e01a5 from './Popout.scss.es6.js';
import { useTouchHide } from '../../../hooks/useTouchHide/useTouchHide.es6.js';
import { usePopup } from '../../../hooks/usePopup/usePopup.es6.js';
import { useEscapeListener } from '../../../hooks/useEscapeListener/useEscapeListener.es6.js';
import { CloseButton } from '../../buttons/CloseButton/CloseButton.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';

const useStyle = style(modules_f03e01a5);
const createStyles = () => {
    const styles = document.createElement('span').style;
    styles.setProperty('border-radius', '20px');
    return styles;
};
function PopoutElement(_a) {
    var { element, style, contentStyle, onhide, rootRef = new Ref(), ref = new Ref(), background, closeButton } = _a, props = __rest(_a, ["element", "style", "contentStyle", "onhide", "rootRef", "ref", "background", "closeButton"]);
    const children = useChildren();
    const hide = useHidden();
    const preshow = useShow();
    const show = useShow(200);
    const shown = useShow(500);
    const { touched, touchHide, handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchHide({
        hide: onhide,
        touchStart() {
            elementData.value = getData();
        },
        element: ref,
    });
    const styles = useStyle();
    usePopup();
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
    return ({type:'div',props:{ref:rootRef,style:Object.assign(Object.assign({}, style), { '--ui-popout-top': () => `${elementData.value.rect.top}px`, '--ui-popout-left': () => `${elementData.value.rect.left}px`, '--ui-popout-width': () => `${elementData.value.rect.width}px`, '--ui-popout-height': () => `${elementData.value.rect.height}px`, '--ui-popout-radius': () => `${elementData.value.styles.borderRadius}`, '--ui-popout-border': () => `${elementData.value.styles.border}`, '--ui-popout-touch-hide': () => `${touchHide.value}`, background: () => `${use(background) || elementData.value.styles.background}` }),ontouchstart:handleTouchStart,ontouchmove:handleTouchMove,ontouchend:handleTouchEnd,class:() => classes([
            styles.root,
            preshow.value && styles.preshow,
            show.value && styles.show,
            shown.value && styles.shown,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
            touched.value && styles.touch,
        ])},children:[{type:'show',props:{when:closeButton},children:[{type:'div',props:{class:() => styles.static},children:[{type:CloseButton,props:{onclick:onhide,...typeof closeButton === 'boolean' ? {} : closeButton}}]}]},{type:Flex,props:{...props,ref:ref,style:contentStyle,class:() => styles.content},children:[children]}]});
}
function Popout(_a) {
    var { show = true, onhide } = _a, props = __rest(_a, ["show", "onhide"]);
    const children = useChildren();
    const hide = new Ref();
    const setHide = actionProp(show, onhide);
    return ({type:'show',props:{when:show},children:[{type:'portal',props:{parent:document.body},children:[{type:'delay',props:{ref:hide,hide:600},children:[{type:PopoutElement,props:{onhide:() => setHide === null || setHide === void 0 ? void 0 : setHide(false),...props},children:[children]}]}]}]});
}

export { Popout };
