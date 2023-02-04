import { __rest } from 'tslib';
import { style, use } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import modules_f55fed3f from './Divider.scss.es6.js';

const useStyles = style(modules_f55fed3f);
function Divider(_a = {}) {
    var { vertical } = _a, props = __rest(_a, ["vertical"]);
    const children = useChildren();
    const styles = useStyles();
    if (!children) {
        return ({type:'hr',props:{...props,class:() => classes([
                styles.root,
                use(vertical) && styles.vertical,
            ])}});
    }
    return ({type:'fieldset',props:{class:() => classes([
            styles.root,
            use(vertical) && styles.vertical,
        ])},children:[{type:'legend',props:{class:() => styles.legend},children:[children]}]});
}

export { Divider };
