import { __rest } from 'tslib';
import { useMapValue, use } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import { State, unwatch } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../layout/index.es6.js';
import '../Tag/index.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { Tag } from '../Tag/Tag.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

function Tags(_a = {}) {
    var { values, multiple, value = new State(multiple ? [] : ''), onchange } = _a, props = __rest(_a, ["values", "multiple", "value", "onchange"]);
    const children = useChildren();
    onchange = actionProp(value, onchange);
    const Item = () => {
        const item = useMapValue();
        const tag = unwatch(() => use(item));
        return ({type:Tag,props:{...tag,checked:() => {
                const currentValue = use(value);
                return !multiple
                    ? currentValue === tag.value
                    : tag.value
                        ? currentValue.includes(tag.value)
                        : currentValue.length === 0;
            },onchange:val => {
                var _a;
                if (onchange) {
                    if (multiple) {
                        if (val) {
                            if (tag.value) {
                                onchange([...use(value), tag.value]);
                            }
                            else {
                                onchange([]);
                            }
                        }
                        else {
                            onchange(use(value).filter(v => v !== tag.value));
                        }
                    }
                    else {
                        onchange(tag.value);
                    }
                }
                (_a = tag.onchange) === null || _a === void 0 ? void 0 : _a.call(tag, val);
            },type:multiple ? 'checkbox' : 'radio'}});
    };
    return ({type:Flex,props:{gap:8,...props},children:[{type:'map',props:{of:values,key:'value'},children:[{type:Item}]},children]});
}

export { Tags };
