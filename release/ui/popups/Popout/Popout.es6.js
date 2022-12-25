import { __rest } from 'tslib';
import { style, useHidden, useShow, use, Ref } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import { onDestroy } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../layout/index.es6.js';
import modules_f03e01a5 from './Popout.scss.es6.js';
import { setOverflow } from '../../../utils/setOverflow/setOverflow.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_f03e01a5);
let popoutCount = 0;
function PopoutElement(_a) {
    var { element, style = '', contentStyle } = _a, props = __rest(_a, ["element", "style", "contentStyle"]);
    if (!element.value)
        return null;
    const children = useChildren();
    const hide = useHidden();
    const preshow = useShow();
    const show = useShow(200);
    const styles = useStyle();
    const rect = element.value.getBoundingClientRect();
    const elementStyles = window.getComputedStyle(element.value);
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
    const newStyle = () => `--ui-popout-top:${rect.top}px;--ui-popout-left:${rect.left}px;--ui-popout-width:${rect.width}px;--ui-popout-height:${rect.height}px;--ui-popout-radius:${elementStyles.borderRadius};--ui-popout-border:${elementStyles.border};--ui-popout-background:${elementStyles.background};${use(style)}`;
    return ({type:'div',props:{style:newStyle,class:() => classes([
            styles.root,
            preshow.value && styles.preshow,
            show.value && styles.show,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
        ])},children:[{type:Flex,props:{...props,style:contentStyle,class:() => styles.content},children:[children]}]});
}
function Popout(_a) {
    var { show = true } = _a, props = __rest(_a, ["show"]);
    const children = useChildren();
    const hide = new Ref();
    return ({type:'show',props:{state:show},children:[{type:'portal',props:{parent:document.body},children:[{type:'delay',props:{ref:hide,hide:600},children:[{type:PopoutElement,props:{...props},children:[children]}]}]}]});
}

export { Popout };
