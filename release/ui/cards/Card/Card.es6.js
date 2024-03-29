import { __rest } from 'tslib';
import { style, useHidden, useShow, use, inject } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import { State, onDestroy } from 'watch-state';
import '../../layout/index.es6.js';
import modules_8c949659 from './Card.scss.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_8c949659);
function Card(_a = {}) {
    var { onclick, clickable = !!onclick, border = 1, preventAnimation, width, height, style, radius } = _a, props = __rest(_a, ["onclick", "clickable", "border", "preventAnimation", "width", "height", "style", "radius"]);
    const children = useChildren();
    const hidden = useHidden();
    const styles = useStyle();
    const show = useShow();
    const shown = new State(false);
    let className;
    const mainClasses = () => [
        styles.root,
        use(clickable) && styles.clickable,
    ];
    if (preventAnimation) {
        className = () => classes([
            mainClasses,
            styles.show,
            styles.shown,
        ]);
    }
    else {
        const timer = setTimeout(() => {
            shown.value = true;
        }, 600);
        onDestroy(() => clearTimeout(timer));
        className = () => classes([
            mainClasses,
            show.value && styles.show,
            shown.value && styles.shown,
            (hidden === null || hidden === void 0 ? void 0 : hidden.value) && styles.hide,
        ]);
    }
    return ({type:Flex,props:{onclick:onclick,padding:24,loadingOffset:border,...props,style:Object.assign(Object.assign({}, style), { '--ui-card-radius': inject(radius, radius => typeof radius === 'number' ? `${radius}px` : radius || ''), '--ui-card-width': inject(width, width => width ? `${width}px` : ''), '--ui-card-height': inject(height, height => height ? `${height}px` : '') }),class:className},children:[children]});
}

export { Card };
