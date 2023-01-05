import { __rest } from 'tslib';
import { style } from '@innet/dom';
import modules_9abee610 from './Space.scss.es6.js';

const useStyles = style(modules_9abee610);
function Space(_a = {}) {
    var { flex = 1, style } = _a, props = __rest(_a, ["flex", "style"]);
    const styles = useStyles();
    return ({type:'span',props:{...props,style:Object.assign(Object.assign({}, style), { '--ui-space-flex': flex }),class:() => styles.root}});
}

export { Space };
