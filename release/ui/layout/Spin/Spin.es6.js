import { style, useShow, useHidden } from '@innet/dom';
import '../Flex/index.es6.js';
import modules_6ac9fe02 from './Spin.scss.es6.js';
import { Flex } from '../Flex/Flex.es6.js';

const useStyle = style(modules_6ac9fe02);
function Spin(props) {
    const styles = useStyle();
    const show = useShow();
    const hide = useHidden();
    return ({type:Flex,props:{gap:8,...props,class:() => [
            styles.root,
            show.value && styles.show,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
        ]},children:[{type:'div',props:{class:styles.point}},{type:'div',props:{class:styles.point}},{type:'div',props:{class:styles.point}}]});
}

export { Spin };
