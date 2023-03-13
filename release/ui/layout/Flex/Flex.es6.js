import { __rest } from 'tslib';
import { style, inject, use } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import modules_2cda96fd from './Flex.scss.es6.js';

const useStyle = style(modules_2cda96fd);
const alignJustifyMap = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    stretch: 'stretch',
};
const alignMap = Object.assign(Object.assign({}, alignJustifyMap), { baseline: 'baseline' });
const justifyMap = Object.assign(Object.assign({}, alignMap), { between: 'space-between', around: 'space-around' });
function Flex(_a = {}) {
    var { vertical, align, justify, gap, flex, wrap, inline, reverse, style, padding, element: Element = 'div', loading, loadingOffset = 0 } = _a, props = __rest(_a, ["vertical", "align", "justify", "gap", "flex", "wrap", "inline", "reverse", "style", "padding", "element", "loading", "loadingOffset"]);
    const children = useChildren();
    const styles = useStyle();
    return ({type:Element,props:{...props,style:Object.assign(Object.assign({}, style), { '--ui-flex-justify': justify && justify !== 'start' ? justifyMap[justify] : '', '--ui-flex-align': align && align !== 'start' ? alignMap[align] : '', '--ui-flex-wrap': wrap ? 'wrap' : '', '--ui-flex-flex': String(flex === true ? 1 : flex || ''), '--ui-flex': inline ? 'inline-flex' : '', '--ui-flex-direction': inject(vertical, vertical => vertical ? (reverse ? 'column-reverse' : 'column') : reverse ? 'row-reverse' : ''), '--ui-flex-padding': !padding ? '' : Array.isArray(padding) ? `${padding.join('px ')}px` : `${padding}px`, '--ui-flex-gap': !gap ? '' : Array.isArray(gap) ? `${gap[0]}px ${gap[1]}px` : `${gap}px`, '--ui-flex-loading-offset': () => `${use(loadingOffset)}px` }),class:() => classes([
            styles.root,
            use(loading) && styles.loading,
        ])},children:[{type:'show',props:{state:inject(loading, loading => !loading)},children:[children]}]});
}

export { Flex, alignJustifyMap, alignMap, justifyMap };
