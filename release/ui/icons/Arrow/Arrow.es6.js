import { __rest } from 'tslib';
import { style, use } from '@innet/dom';
import classes from 'html-classes';
import modules_42f85621 from './Arrow.scss.es6.js';

const useStyle = style(modules_42f85621);
function Arrow(_a = {}) {
    var { direction = 'down', style = '', color, size = 18 } = _a, props = __rest(_a, ["direction", "style", "color", "size"]);
    const styles = useStyle();
    const getColor = () => {
        const currentColor = use(color);
        return currentColor ? `--ui-arrow-color:${currentColor};` : '';
    };
    return ({type:'span',props:{...props,style:() => `${getColor()}--ui-arrow-size:${use(size)}px${use(style)}`,class:() => classes([
            styles.root,
            styles[use(direction)],
        ])}});
}

export { Arrow };
