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
    var { onclick, clickable = !!onclick, loading, preventAnimation, width, height, style } = _a, props = __rest(_a, ["onclick", "clickable", "loading", "preventAnimation", "width", "height", "style"]);
    const children = useChildren();
    const hidden = useHidden();
    const styles = useStyle();
    const show = useShow();
    const shown = new State(false);
    let className;
    const mainClasses = () => [
        styles.root,
        use(clickable) && styles.clickable,
        use(loading) && styles.loading,
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
    return ({type:Flex,props:{onclick:onclick,padding:18,...props,style:Object.assign(Object.assign({}, style), { '--ui-card-width': inject(width, width => width ? `${width}px` : ''), '--ui-card-height': inject(height, height => height ? `${height}px` : '') }),class:className},children:[{type:'show',props:{state:inject(loading, loading => !loading)},children:[children]}]});
}

export { Card };
