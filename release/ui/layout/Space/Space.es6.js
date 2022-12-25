import { __rest } from 'tslib';
import { style, use } from '@innet/dom';
import modules_9abee610 from './Space.scss.es6.js';

const useStyles = style(modules_9abee610);
function Space(_a = {}) {
    var { flex = 1, style = '' } = _a, props = __rest(_a, ["flex", "style"]);
    const styles = useStyles();
    return ({type:'span',props:{...props,style:() => `--ui-space-flex:${use(flex)};${use(style)}`,class:() => styles.root}});
}

export { Space };
