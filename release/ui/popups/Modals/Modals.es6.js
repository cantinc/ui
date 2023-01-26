import { __rest } from 'tslib';
import { style, Ref } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../Overlay/index.es6.js';
import modules_383942b3 from './Modals.scss.es6.js';
import { Overlay } from '../Overlay/Overlay.es6.js';

const useStyle = style(modules_383942b3);
const modalsRef = new Ref();
const ModalsPortal = () => {
    const children = useChildren();
    return modalsRef.value && ({type:'portal',props:{parent:modalsRef.value},children:[children]});
};
function Modals(_a) {
    var { main, ref } = _a, props = __rest(_a, ["main", "ref"]);
    const children = useChildren();
    const styles = useStyle();
    return ({type:Overlay,props:{ref:main ? modalsRef : ref,justify:'center',align:'center',...props,class:() => styles.root},children:[children]});
}

export { Modals, ModalsPortal, modalsRef };
