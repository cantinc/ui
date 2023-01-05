import { __rest } from 'tslib';
import { style, inject, use } from '@innet/dom';
import classes from 'html-classes';
import modules_42f85621 from './Arrow.scss.es6.js';

const useStyle = style(modules_42f85621);
function Arrow(_a = {}) {
    var { direction = 'down', style, color, size = 18 } = _a, props = __rest(_a, ["direction", "style", "color", "size"]);
    const styles = useStyle();
    return ({type:'span',props:{...props,style:Object.assign(Object.assign({}, style), { '--ui-arrow-color': color || '', '--ui-arrow-size': inject(size, size => `${size}px`) }),class:() => classes([
            styles.root,
            styles[use(direction)],
        ])}});
}

export { Arrow };
