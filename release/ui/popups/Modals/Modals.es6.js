import { style } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../Overlay/index.es6.js';
import modules_383942b3 from './Modals.scss.es6.js';
import { Overlay } from '../Overlay/Overlay.es6.js';

const useStyle = style(modules_383942b3);
function Modals(props) {
    const children = useChildren();
    const styles = useStyle();
    return ({type:Overlay,props:{justify:'center',align:'center',...props,class:() => styles.root},children:[children]});
}

export { Modals };
