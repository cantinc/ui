import { __rest } from 'tslib';
import { style, use } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import '../../external/AsyncSpin/index.es6.js';
import '../../layout/index.es6.js';
import modules_009aad45 from './Button.scss.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';
import { AsyncSpin } from '../../external/AsyncSpin/AsyncSpin.es6.js';

const useStyle = style(modules_009aad45);
function Button(_a = {}) {
    var { view = 'primary', type, loading, disabled, link } = _a, props = __rest(_a, ["view", "type", "loading", "disabled", "link"]);
    const children = useChildren();
    const styles = useStyle();
    const className = () => classes([
        styles.root,
        {
            [styles.primary]: view === 'primary',
            [styles.secondary]: view === 'secondary',
            [styles.negative]: view === 'negative',
            [styles.positive]: view === 'positive',
            [styles.loading]: use(loading),
        },
    ]);
    const disabledValue = (() => (disabled !== null && disabled !== void 0 ? disabled : use(loading)) || undefined);
    return ({type:Flex,props:{justify:'center',element:link ? 'a' : 'button',inline:true,padding:24,...props,type:type,disabled:disabledValue,class:className},children:[{type:'show',props:{state:loading},children:[{type:AsyncSpin,props:{class:() => styles.spin}}]},children]});
}

export { Button };
