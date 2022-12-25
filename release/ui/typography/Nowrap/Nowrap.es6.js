import { style } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import modules_06fd6b70 from './Nowrap.scss.es6.js';

const useStyle = style(modules_06fd6b70);
function Nowrap(props) {
    const children = useChildren();
    const styles = useStyle();
    return ({type:'span',props:{...props,class:() => styles.root},children:[children]});
}

export { Nowrap };
