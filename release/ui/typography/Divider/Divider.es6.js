import { style } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import modules_f55fed3f from './Divider.scss.es6.js';

const useStyles = style(modules_f55fed3f);
function Divider(props) {
    const children = useChildren();
    const styles = useStyles();
    if (!children)
        return {type:'hr',props:{...props,class:styles.root}};
    return ({type:'fieldset',props:{class:styles.root},children:[{type:'legend',props:{class:styles.legend},children:[children]}]});
}

export { Divider };
