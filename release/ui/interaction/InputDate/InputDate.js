'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var watchState = require('watch-state');
var locale = require('../../../constants/locale.js');
require('../../../utils/index.js');
require('../../icons/index.js');
require('../../popups/index.js');
require('../InputMask/index.js');
var InputDate$1 = require('./InputDate.scss.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var createDateFromLocal = require('../../../utils/date/createDateFromLocal/createDateFromLocal.js');
var InputMask = require('../InputMask/InputMask.js');
var Icon = require('../../icons/Icon/Icon.js');
var Modals = require('../../popups/Modals/Modals.js');
var DatePicker = require('../../popups/DatePicker/DatePicker.js');

const useStyles = dom.style(InputDate$1["default"]);
const mask = {
    alias: 'datetime',
    inputFormat: locale.localeDateFormat,
    placeholder: locale.localeDateFormatPlaceholder,
    inputmode: 'numeric',
    clearMaskOnLostFocus: false,
};
function InputDate(_a) {
    var { apply = 'Apply', value = new watchState.State(), oninput, min, max, goBackText, todayText } = _a, props = tslib.__rest(_a, ["apply", "value", "oninput", "min", "max", "goBackText", "todayText"]);
    oninput = actionProp.actionProp(value, oninput);
    const styles = useStyles();
    const showCalendar = new watchState.State(false);
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
        const date = dom.use(value);
        return !date || isNaN(date) ? '' : date.toLocaleDateString();
    };
    const handleInput = (val) => {
        if (!val) {
            oninput === null || oninput === void 0 ? void 0 : oninput(undefined);
            return;
        }
        const curDate = createDateFromLocal.createDateFromLocal(val);
        if (isNaN(curDate))
            return;
        oninput === null || oninput === void 0 ? void 0 : oninput(curDate);
    };
    return ([{type:InputMask.InputMask,props:{value:convertValue,oninput:handleInput,mask:Object.assign(Object.assign({}, mask), { min: min === null || min === void 0 ? void 0 : min.toLocaleDateString(), max: max === null || max === void 0 ? void 0 : max.toLocaleDateString() }),...props},children:[{type:'slot',props:{name:'after'},children:[{type:Icon.Icon,props:{icon:'calendar',class:() => styles.icon,onclick:handleCalendarClick}}]}]},{type:'show',props:{state:showCalendar},children:[{type:Modals.ModalsPortal,children:[{type:DatePicker.DatePicker,props:{min:min,max:max,goBackText:goBackText,todayText:todayText,defaultValue:value,apply:apply,onApply:handleApply,onclose:handleCalendarClose},children:[props.label]}]}]}]);
}

exports.InputDate = InputDate;
