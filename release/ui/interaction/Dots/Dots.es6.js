import { __rest } from 'tslib';
import { style, use } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import { State, Watch, unwatch } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../layout/index.es6.js';
import modules_1352abc8 from './Dots.scss.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_1352abc8);
function Dots(_a) {
    var { ref, count, autoscroll, style = '', size = 12, progress, value = new State(0), onchange } = _a, props = __rest(_a, ["ref", "count", "autoscroll", "style", "size", "progress", "value", "onchange"]);
    const styles = useStyle();
    const children = useChildren();
    onchange = actionProp(value, onchange);
    let timer;
    let fix = false;
    const transition = new State(0.3);
    const pseudoValue = new State();
    new Watch(() => {
        const currentValue = use(value);
        // because of browsers bug (dynamic changes of transition has not an effect)
        if (autoscroll && !fix && unwatch(() => pseudoValue.value) === currentValue) {
            pseudoValue.value = currentValue - 1;
            setTimeout(() => {
                pseudoValue.value = currentValue;
            });
            return;
        }
        pseudoValue.value = use(value);
    });
    if (autoscroll) {
        new Watch(() => {
            fix = false;
            clearTimeout(timer);
            const currentValue = use(value);
            if (autoscroll) {
                transition.value = 0.3;
                timer = setTimeout(() => {
                    const newTransition = autoscroll === true ? 20000 : autoscroll;
                    transition.value = newTransition / 1000;
                    const nextValue = currentValue + 1;
                    pseudoValue.value = nextValue;
                    timer = setTimeout(() => {
                        fix = true;
                        onchange === null || onchange === void 0 ? void 0 : onchange(nextValue === count ? 0 : nextValue);
                    }, newTransition);
                }, 1000);
            }
        });
    }
    const rootStyle = () => {
        const currentValue = autoscroll ? pseudoValue.value : pseudoValue.value + 1;
        const progressStyles = `--ui-dots-progress:${currentValue / count};`;
        const sizeStyles = `--ui-dots-size:${use(size)}px;`;
        const transitionStyles = `--ui-dots-transition:${transition.value}s;`;
        const leftStyles = progress ? '--ui-dots-left:0;' : `--ui-dots-left:calc(100% * (var(--ui-dots-progress) - ${1 / count}));`;
        return `${progressStyles}${sizeStyles}${leftStyles}${transitionStyles}${use(style)}`;
    };
    const array = [...new Array(count)].map((_, i) => i);
    return ({type:Flex,props:{gap:8,...props,ref:ref,style:rootStyle,class:() => styles.root},children:[array.map(i => ({type:'div',props:{class:() => classes([
                styles.dot,
                use(value) === i && styles.active,
            ]),onclick:() => onchange === null || onchange === void 0 ? void 0 : onchange(i)},children:[children === null || children === void 0 ? void 0 : children[0](i)]})),{type:Flex,props:{gap:8,...props,class:() => styles.progress},children:[array.map(i => ({type:'div',props:{class:() => styles.dotProgress},children:[children === null || children === void 0 ? void 0 : children[0](i)]}))]}]});
}

export { Dots };
