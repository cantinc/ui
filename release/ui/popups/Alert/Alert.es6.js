import { __rest } from 'tslib';
import { style, useHidden, useShow } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../../layout/index.es6.js';
import modules_9dbc385c from './Alert.scss.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_9dbc385c);
function Alert(_a = {}) {
    var { view = 'warning' } = _a, props = __rest(_a, ["view"]);
    const children = useChildren();
    const hide = useHidden();
    const show = useShow();
    const styles = useStyle();
    return ({type:Flex,props:{padding:24,align:'center',justify:'center',...props,class:() => [
            styles.root,
            show.value && styles.show,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
            styles[view],
        ]},children:[children]});
}

export { Alert };
