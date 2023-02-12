import { __rest } from 'tslib';
import { style, use } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import { Cache } from 'watch-state';
import '../Flex/index.es6.js';
import '../Spin/index.es6.js';
import modules_5d1e2507 from './SpinBox.scss.es6.js';
import { Spin } from '../Spin/Spin.es6.js';
import { Flex } from '../Flex/Flex.es6.js';

const useStyle = style(modules_5d1e2507);
function SpinBox(_a) {
    var { loading } = _a, props = __rest(_a, ["loading"]);
    const children = useChildren();
    const styles = useStyle();
    const loadingCache = new Cache(() => use(loading));
    const spinner = ({type:'delay',props:{show:300,hide:300},children:[{type:Spin,props:{align:'center',justify:'center',class:styles.spin}}]});
    return ({type:Flex,props:{...props,class:() => [
            styles.root,
            loadingCache.value && styles.loading,
        ]},children:[children,' ',() => loadingCache.value && spinner]});
}

export { SpinBox };
