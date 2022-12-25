import { __rest } from 'tslib';
import { style, useHidden, useShow } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import { State, onDestroy } from 'watch-state';
import '../../layout/index.es6.js';
import modules_8c949659 from './Card.scss.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_8c949659);
function Card(_a = {}) {
    var { onclick, clickable = !!onclick, preventAnimation } = _a, props = __rest(_a, ["onclick", "clickable", "preventAnimation"]);
    const children = useChildren();
    const hidden = useHidden();
    const styles = useStyle();
    const show = useShow();
    const shown = new State(false);
    if (!preventAnimation) {
        const timer = setTimeout(() => {
            shown.value = true;
        }, 600);
        onDestroy(() => clearTimeout(timer));
    }
    return ({type:Flex,props:{onclick:onclick,...props,class:() => preventAnimation
            ? classes([
                styles.root,
                styles.show,
                styles.shown,
                clickable && styles.clickable,
            ])
            : classes([
                styles.root,
                clickable && styles.clickable,
                show.value && styles.show,
                shown.value && styles.shown,
                (hidden === null || hidden === void 0 ? void 0 : hidden.value) && styles.hide,
            ])},children:[children]});
}

export { Card };
