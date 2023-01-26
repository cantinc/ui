'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../icons/index.js');
var CalendarTitle$1 = require('./CalendarTitle.scss.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var dateMinMax = require('../../../utils/date/dateMinMax/dateMinMax.js');
var getDaysInMonth = require('../../../utils/date/getDaysInMonth/getDaysInMonth.js');
var Icon = require('../../icons/Icon/Icon.js');
var getMonth = require('../../../utils/date/getMonth/getMonth.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(CalendarTitle$1["default"]);
const minCalendarDate = new Date(0, 0, 0, 0, 0, 0, 0);
const maxCalendarDate = new Date(10000, 0, 0, 0, 0, 0, 0);
function CalendarTitle(_a = {}) {
    var { value = new watchState.State(new Date()), onChange, rotationTop = new watchState.State(), onNext, onPrev, onClick, min = minCalendarDate, max = maxCalendarDate } = _a, props = tslib.__rest(_a, ["value", "onChange", "rotationTop", "onNext", "onPrev", "onClick", "min", "max"]);
    onChange = actionProp.actionProp(value, onChange);
    const styles = useStyle();
    const disablePrev = new watchState.Cache(() => dom.use(value) <= min);
    const disableNext = new watchState.Cache(() => dom.use(value) >= max);
    const year = new watchState.Cache(() => dom.use(value).getFullYear());
    const month = new watchState.Cache(() => dom.use(value).getMonth());
    const handleNext = watchState.createEvent(() => {
        rotationTop.value = false;
        const date = dom.use(value);
        const month = date.getMonth();
        if (month > 10) {
            onChange === null || onChange === void 0 ? void 0 : onChange(dateMinMax.dateMinMax(new Date(date.getFullYear() + 1, 0, Math.min(date.getDate(), getDaysInMonth.getDaysInMonth(new Date(date.getFullYear() + 1, 0)))), min, max));
        }
        else {
            onChange === null || onChange === void 0 ? void 0 : onChange(dateMinMax.dateMinMax(new Date(date.getFullYear(), month + 1, Math.min(date.getDate(), getDaysInMonth.getDaysInMonth(new Date(date.getFullYear(), month + 1)))), min, max));
        }
        onNext === null || onNext === void 0 ? void 0 : onNext();
    });
    const handlePrev = watchState.createEvent(() => {
        rotationTop.value = true;
        const date = dom.use(value);
        const month = date.getMonth();
        if (month < 1) {
            onChange === null || onChange === void 0 ? void 0 : onChange(dateMinMax.dateMinMax(new Date(date.getFullYear() - 1, 11, Math.min(date.getDate(), getDaysInMonth.getDaysInMonth(new Date(date.getFullYear() - 1, 11)))), min, max));
        }
        else {
            onChange === null || onChange === void 0 ? void 0 : onChange(dateMinMax.dateMinMax(new Date(date.getFullYear(), month - 1, Math.min(date.getDate(), getDaysInMonth.getDaysInMonth(new Date(date.getFullYear(), month - 1)))), min, max));
        }
        onPrev === null || onPrev === void 0 ? void 0 : onPrev();
    });
    return ({type:'div',props:{...props,class:() => styles.root},children:[{type:'button',props:{type:'button',disabled:disablePrev,onclick:handlePrev,class:() => styles.arrow},children:[{type:Icon.Icon,props:{icon:'chevronLeft'}}]},{type:'div',props:{class:() => styles.content},children:[() => {
            const show = dom.useShow();
            const hide = new dom.Ref();
            const curYear = year.value;
            const curMonth = month.value;
            return ({type:'delay',props:{ref:hide,hide:300},children:[{type:'button',props:{onclick:onClick,tabIndex:0,class:() => {
                    var _a;
                    return classes__default["default"]([
                        styles.date,
                        (rotationTop === null || rotationTop === void 0 ? void 0 : rotationTop.value) && styles.rotationTop,
                        show.value && styles.dateShow,
                        ((_a = hide.value) === null || _a === void 0 ? void 0 : _a.value) && styles.dateHide,
                    ]);
                }},children:[getMonth.getMonth(curMonth),' ',curYear]}]});
        }]},{type:'button',props:{type:'button',disabled:disableNext,onclick:handleNext,class:() => styles.arrow},children:[{type:Icon.Icon,props:{icon:'chevronRight'}}]}]});
}

exports.CalendarTitle = CalendarTitle;
exports.maxCalendarDate = maxCalendarDate;
exports.minCalendarDate = minCalendarDate;
