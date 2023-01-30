import { __rest } from 'tslib';
import { randomHash } from '@cantinc/utils';
import { style, use } from '@innet/dom';
import { Context, useContext, useChildren } from '@innet/jsx';
import { State, Cache, unwatch } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../icons/index.es6.js';
import modules_e864a768 from './Set.scss.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { Icon } from '../../icons/Icon/Icon.es6.js';

const useStyle = style(modules_e864a768);
const key = Symbol('SetKey');
const setPropsHandler = new Context(item => item.value);
function Set(_a) {
    var { value = new State([]), onchange, element: Element, handleItemProps = useContext(setPropsHandler) } = _a, props = __rest(_a, ["value", "onchange", "element", "handleItemProps"]);
    const styles = useStyle();
    const children = useChildren();
    onchange = actionProp(value, onchange);
    const customValues = new Cache(() => {
        const values = use(value);
        for (const value of values) {
            if (key in value)
                continue;
            // @ts-expect-error
            value[key] = randomHash();
        }
        return values;
    });
    const handleAdd = () => {
        onchange === null || onchange === void 0 ? void 0 : onchange([...use(value), Object.assign({}, props)]);
    };
    const handleRemove = (index) => {
        const newValue = [...use(value)];
        newValue.splice(index, 1);
        onchange === null || onchange === void 0 ? void 0 : onchange(newValue);
    };
    return ([{type:'for',props:{of:customValues,key:key},children:[(item) => ({type:Element,props:{...unwatch(() => handleItemProps(item, Element))},children:[{type:'slot',props:{name:'after'},children:[{type:Icon,props:{class:styles.remove,onclick:() => handleRemove(item.index),icon:'brick'}}]}]})]},{type:'button',props:{type:'button',onclick:handleAdd,class:() => styles.addButton},children:[children]}]);
}

export { Set, setPropsHandler };
