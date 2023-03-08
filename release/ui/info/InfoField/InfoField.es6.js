import { __rest } from 'tslib';
import { style } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../../layout/index.es6.js';
import modules_4ae6a8d2 from './InfoField.scss.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_4ae6a8d2);
function InfoField(_a) {
    var { label, value } = _a, props = __rest(_a, ["label", "value"]);
    const children = useChildren();
    const styles = useStyle();
    return ({type:Flex,props:{wrap:true,...props,class:() => styles.root},children:[{type:'show',props:{state:label},children:[{type:'div',props:{class:() => styles.label},children:[label]}]},value,' ',children]});
}

export { InfoField };
