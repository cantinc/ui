import { __rest } from 'tslib';
import { style, use } from '@innet/dom';
import { State } from 'watch-state';
import { localeDateFormat, localeDateFormatPlaceholder } from '../../../constants/locale.es6.js';
import '../../../utils/index.es6.js';
import '../../icons/index.es6.js';
import '../../popups/index.es6.js';
import '../InputMask/index.es6.js';
import modules_95e6a092 from './InputDate.scss.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { createDateFromLocal } from '../../../utils/date/createDateFromLocal/createDateFromLocal.es6.js';
import { InputMask } from '../InputMask/InputMask.es6.js';
import { Icon } from '../../icons/Icon/Icon.es6.js';
import { ModalsPortal } from '../../popups/Modals/Modals.es6.js';
import { DatePicker } from '../../popups/DatePicker/DatePicker.es6.js';

const useStyles = style(modules_95e6a092);
const minDate = new Date(1900, 0, 1);
const maxDate = new Date(2050, 11, 31);
const mask = {
    alias: 'datetime',
    inputFormat: localeDateFormat,
    placeholder: localeDateFormatPlaceholder,
    inputmode: 'numeric',
    clearMaskOnLostFocus: false,
};
function InputDate(_a) {
    var { apply = 'Apply', value = new State(), oninput, min = minDate, max = maxDate } = _a, props = __rest(_a, ["apply", "value", "oninput", "min", "max"]);
    oninput = actionProp(value, oninput);
    const styles = useStyles();
    const showCalendar = new State(false);
    const handleCalendarClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        showCalendar.value = true;
    };
    const handleCalendarClose = () => {
        showCalendar.value = false;
    };
    const handleApply = (date) => {
        oninput === null || oninput === void 0 ? void 0 : oninput(date);
        handleCalendarClose();
    };
    const convertValue = () => {
        const date = use(value);
        return !date || isNaN(date) ? '' : date.toLocaleDateString();
    };
    const handleInput = (val) => {
        if (!val) {
            oninput === null || oninput === void 0 ? void 0 : oninput(undefined);
            return;
        }
        const curDate = createDateFromLocal(val);
        if (isNaN(curDate))
            return;
        oninput === null || oninput === void 0 ? void 0 : oninput(curDate);
    };
    return ([{type:InputMask,props:{value:convertValue,oninput:handleInput,mask:Object.assign(Object.assign({}, mask), { min: min.toLocaleDateString(), max: max.toLocaleDateString() }),...props},children:[{type:'slot',props:{name:'after'},children:[{type:Icon,props:{icon:'calendar',class:() => styles.icon,onclick:handleCalendarClick}}]}]},{type:'show',props:{state:showCalendar},children:[{type:ModalsPortal,children:[{type:DatePicker,props:{min:min,max:max,defaultValue:value,apply:apply,onApply:handleApply,onclose:handleCalendarClose},children:[props.label]}]}]}]);
}

export { InputDate };
