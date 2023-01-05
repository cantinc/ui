import { __rest } from 'tslib';
import { style, use, inject } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import { State, Watch, unwatch, onDestroy, Cache } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../layout/index.es6.js';
import modules_1352abc8 from './Dots.scss.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_1352abc8);
function Dots(_a) {
    var { ref, count, autoscroll, style, size = 12, progress, value = new State(0), onchange, onend, circular } = _a, props = __rest(_a, ["ref", "count", "autoscroll", "style", "size", "progress", "value", "onchange", "onend", "circular"]);
    const styles = useStyle();
    const children = useChildren();
    onchange = actionProp(value, onchange);
    let timer;
    let fix = false;
    const transition = new State(0.3);
    const pseudoValue = new State();
    const nextValue = new State(0);
    new Watch(() => {
        const currentValue = use(value);
        // because of browsers bug (dynamic changes of transition has not an effect)
        if (use(autoscroll) && !fix && unwatch(() => pseudoValue.value) === currentValue) {
            pseudoValue.value = currentValue - 1;
            setTimeout(() => {
                pseudoValue.value = currentValue;
            });
            return;
        }
        pseudoValue.value = currentValue;
    });
    new Watch(() => {
        const currentAutoscroll = use(autoscroll);
        if (currentAutoscroll) {
            new Watch(() => {
                fix = false;
                clearTimeout(timer);
                const currentValue = use(value);
                transition.value = 0.3;
                nextValue.value = currentValue + 1;
                timer = setTimeout(() => {
                    const newTransition = currentAutoscroll === true ? 10000 : currentAutoscroll;
                    transition.value = newTransition / 1000;
                    const newValue = nextValue.value;
                    pseudoValue.value = newValue;
                    timer = setTimeout(() => {
                        fix = true;
                        if (newValue === count) {
                            onend === null || onend === void 0 ? void 0 : onend();
                            if (circular) {
                                onchange === null || onchange === void 0 ? void 0 : onchange(0);
                            }
                        }
                        else {
                            onchange === null || onchange === void 0 ? void 0 : onchange(newValue);
                        }
                    }, newTransition);
                }, 1000);
            });
        }
        else {
            clearTimeout(timer);
        }
    });
    onDestroy(() => clearTimeout(timer));
    const dotsProgress = new Cache(() => (use(autoscroll) ? pseudoValue.value : pseudoValue.value + 1) / count);
    const array = [...new Array(count)].map((_, i) => i);
    return ({type:Flex,props:{gap:8,...props,ref:ref,style:Object.assign(Object.assign({}, style), { '--ui-dots-progress': inject(dotsProgress, String), '--ui-dots-size': inject(size, size => `${size}px`), '--ui-dots-transition': () => `${transition.value}s`, '--ui-dots-left': progress ? '0' : () => `calc(100% * ${((use(autoscroll) ? nextValue.value / count : dotsProgress.value)) - (1 / count)})` }),class:() => styles.root},children:[array.map(i => ({type:'div',props:{class:() => classes([
                styles.dot,
                use(value) === i && styles.active,
            ]),onclick:() => onchange === null || onchange === void 0 ? void 0 : onchange(i)},children:[children === null || children === void 0 ? void 0 : children[0](i)]})),{type:Flex,props:{gap:8,...props,class:() => styles.progress},children:[array.map(i => ({type:'div',props:{class:() => styles.dotProgress},children:[children === null || children === void 0 ? void 0 : children[0](i)]}))]}]});
}

export { Dots };
