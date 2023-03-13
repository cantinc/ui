import { __rest } from 'tslib';
import { style, inject } from '@innet/dom';
import '../../icons/index.es6.js';
import '../../layout/index.es6.js';
import modules_af2cdaf5 from './CloseButton.scss.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';
import { Icon } from '../../icons/Icon/Icon.es6.js';

const useStyle = style(modules_af2cdaf5);
function CloseButton(_a = {}) {
    var { placement = 'topRight', icon = 'cross', offset = 24, size = 18, style } = _a, props = __rest(_a, ["placement", "icon", "offset", "size", "style"]);
    const styles = useStyle();
    return ({type:Flex,props:{type:'button',element:'button',padding:14,...props,style:Object.assign(Object.assign({}, style), { '--ui-close-button-offset': inject(offset, offset => `${offset}px`) }),class:() => [
            styles.root,
            styles[placement],
        ]},children:[{type:Icon,props:{size:size,icon:icon}}]});
}

export { CloseButton };
