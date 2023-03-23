import { __rest } from 'tslib';
import { style, inject } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import '../../layout/index.es6.js';
import modules_009aad45 from './Button.scss.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_009aad45);
function Button(_a = {}) {
    var { view = 'primary', loading, disabled, width } = _a, props = __rest(_a, ["view", "loading", "disabled", "width"]);
    const children = useChildren();
    const styles = useStyle();
    const className = () => classes([
        styles.root,
        styles[view],
    ]);
    return ({type:Flex,props:{justify:'center',inline:true,padding:24,element:'button',loadingOffset:1,disabled:loading,...props,loading:loading,style:Object.assign(Object.assign({}, props === null || props === void 0 ? void 0 : props.style), { '--ui-button-width': inject(width, width => width !== undefined ? `${width}px` : '') }),class:className},children:[children]});
}

export { Button };
