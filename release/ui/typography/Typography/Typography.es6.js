import { style } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import modules_1846fd06 from './Typography.scss.es6.js';

const useStyle = style(modules_1846fd06);
function Typography(props) {
    const children = useChildren();
    const styles = useStyle();
    return ({type:'article',props:{...props,class:styles.root},children:[children]});
}

export { Typography };
