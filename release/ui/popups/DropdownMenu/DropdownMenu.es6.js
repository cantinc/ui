import { __rest } from 'tslib';
import { style, use } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import { State } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../external/index.es6.js';
import '../../interaction/Option/index.es6.js';
import '../Dropdown/index.es6.js';
import modules_1e4fb52d from './DropdownMenu.scss.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { Dropdown } from '../Dropdown/Dropdown.es6.js';
import { Listener } from '../../external/Listener/Listener.es6.js';
import { Option } from '../../interaction/Option/Option.es6.js';

const useStyle = style(modules_1e4fb52d);
function DropdownMenu(_a) {
    var { values, showValues, select = new State(''), preselect = new State(''), onSelect, onPreselect } = _a, props = __rest(_a, ["values", "showValues", "select", "preselect", "onSelect", "onPreselect"]);
    const children = useChildren();
    const styles = useStyle();
    onSelect = actionProp(select, onSelect);
    onPreselect = actionProp(preselect, onPreselect);
    const nextPreselect = () => {
        if (!onPreselect)
            return;
        const curValues = use(values);
        if (!(curValues === null || curValues === void 0 ? void 0 : curValues.length))
            return;
        const curPreselect = use(preselect);
        const index = curValues.findIndex(({ value }) => value === curPreselect);
        if (index === -1) {
            const curValue = use(select);
            const valueIndex = curValues.findIndex(({ value }) => value === curValue);
            const nextIndex = valueIndex >= curValues.length - 1 ? 0 : valueIndex + 1;
            return onPreselect(valueIndex === -1 ? curValues[0].value : curValues[nextIndex].value);
        }
        if (index === curValues.length - 1) {
            return onPreselect(curValues[0].value);
        }
        onPreselect(curValues[index + 1].value);
    };
    const prevPreselect = () => {
        if (!onPreselect)
            return;
        const curValues = use(values);
        if (!(curValues === null || curValues === void 0 ? void 0 : curValues.length))
            return;
        const curPreselect = use(preselect);
        const index = curValues.findIndex(({ value }) => value === curPreselect);
        if (index === -1) {
            const curValue = use(select);
            const valueIndex = curValues.findIndex(({ value }) => value === curValue);
            const nextIndex = valueIndex < 1 ? curValues.length - 1 : valueIndex - 1;
            return onPreselect(curValues[nextIndex].value);
        }
        if (index === 0) {
            return onPreselect(curValues[curValues.length - 1].value);
        }
        onPreselect(curValues[index - 1].value);
    };
    const listener = (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            if (e.key === 'ArrowDown') {
                nextPreselect();
            }
            else {
                prevPreselect();
            }
        }
        if (e.key === 'Enter') {
            const preselectValue = use(preselect);
            if (preselectValue) {
                e.preventDefault();
                onSelect === null || onSelect === void 0 ? void 0 : onSelect(preselectValue);
            }
        }
    };
    return ({type:Dropdown,props:{vertical:true,align:'stretch',...props,class:styles},children:[{type:Listener,props:{type:'keydown',listener:listener}},{type:'for',props:{of:values || [],key:'value'},children:[(item) => ({type:Option,props:{...item.value,selected:() => use(select) === item.value.value,onSelect:() => onSelect === null || onSelect === void 0 ? void 0 : onSelect(item.value.value),preselected:() => use(preselect) === item.value.value,onPreselect:() => onPreselect === null || onPreselect === void 0 ? void 0 : onPreselect(item.value.value),showValues:showValues}})]},children]});
}

export { DropdownMenu };
