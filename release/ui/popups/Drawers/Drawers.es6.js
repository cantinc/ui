import { useChildren } from '@innet/jsx';
import '../Overlay/index.es6.js';
import { Overlay } from '../Overlay/Overlay.es6.js';

function Drawers(props) {
    const children = useChildren();
    return ({type:Overlay,props:{...props},children:[children]});
}

export { Drawers };
