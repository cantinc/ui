'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../buttons/index.js');
require('../../icons/index.js');
require('../../interaction/Calendar/index.js');
require('../../interaction/CalendarTitle/index.js');
require('../../layout/index.js');
require('../Modal/index.js');
var DatePicker$1 = require('./DatePicker.scss.js');
var windowWidth = require('../../../utils/core/window/windowWidth.js');
var windowHeight = require('../../../utils/core/window/windowHeight.js');
var dateMinMax = require('../../../utils/date/dateMinMax/dateMinMax.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var getDaysInMonth = require('../../../utils/date/getDaysInMonth/getDaysInMonth.js');
var Space = require('../../layout/Space/Space.js');
var Calendar = require('../../interaction/Calendar/Calendar.js');
var CalendarTitle = require('../../interaction/CalendarTitle/CalendarTitle.js');
var Buttons = require('../../buttons/Buttons/Buttons.js');
var Button = require('../../buttons/Button/Button.js');
var getMonth = require('../../../utils/date/getMonth/getMonth.js');
var Flex = require('../../layout/Flex/Flex.js');
var Icon = require('../../icons/Icon/Icon.js');
var Modal = require('../Modal/Modal.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(DatePicker$1["default"]);
const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth();
const dataPickerCellHeight = new watchState.Cache(() => {
    return windowWidth.windowWidth.value < 768 ? (windowHeight.windowHeight.value - 290) / 6 : 57;
});
function DatePicker(_a = {}) {
    var { apply, min, max, selector = new watchState.State('date'), defaultValue = today, value = new watchState.State(dateMinMax.dateMinMax(watchState.unwatch(() => dom.use(defaultValue) || today), min, max)), onChange, rotationTop = new watchState.State(true), onApply } = _a, props = tslib.__rest(_a, ["apply", "min", "max", "selector", "defaultValue", "value", "onChange", "rotationTop", "onApply"]);
    onChange = actionProp.actionProp(value, onChange);
    min = min && new Date(min.getFullYear(), min.getMonth(), min.getDate());
    max = max && new Date(max.getFullYear(), max.getMonth(), max.getDate());
    const children = jsx.useChildren();
    const styles = useStyle();
    const isYearSelectable = !(min && max && min.getFullYear() === max.getFullYear());
    const showCustomGrid = new watchState.Cache(() => selector.value !== 'date');
    const handleDisable = ({ date }) => {
        if (min && date < min) {
            return true;
        }
        if (max && date > max) {
            return true;
        }
        return false;
    };
    const handleSelect = ({ date }) => {
        const currentValue = dom.use(value);
        return currentValue.getDate() === date.getDate() &&
            currentValue.getMonth() === date.getMonth() &&
            currentValue.getFullYear() === date.getFullYear();
    };
    const handleNext = () => {
        const date = dom.use(value);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const nextDate = new Date(year, month + 1, -1);
        if (max && max < new Date(year, month, day)) {
            onChange === null || onChange === void 0 ? void 0 : onChange(new Date(year, month, max.getDate()));
        }
        else if (getDaysInMonth.getDaysInMonth(nextDate) < day) {
            onChange === null || onChange === void 0 ? void 0 : onChange(new Date(year, month, getDaysInMonth.getDaysInMonth(nextDate)));
        }
    };
    const handlePrev = () => {
        const date = dom.use(value);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const prevDate = new Date(year, month + 1, -1);
        if (min && min > new Date(year, month, day)) {
            onChange === null || onChange === void 0 ? void 0 : onChange(new Date(year, month, min.getDate()));
        }
        else if (getDaysInMonth.getDaysInMonth(prevDate) < day) {
            onChange === null || onChange === void 0 ? void 0 : onChange(new Date(year, month, getDaysInMonth.getDaysInMonth(prevDate)));
        }
    };
    const handleTitleClick = () => {
        if (isYearSelectable) {
            selector.value = 'year';
        }
        else {
            selector.value = 'month';
        }
    };
    const handleSelectDate = watchState.createEvent(({ date }) => {
        const curDate = dom.use(value);
        if (date === curDate)
            return;
        const year = curDate.getFullYear();
        const month = curDate.getMonth();
        const newMonth = date.getMonth();
        const newYear = date.getFullYear();
        if (month !== newMonth) {
            rotationTop.value = month > newMonth;
        }
        if (year !== newYear) {
            rotationTop.value = year > newYear;
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(date);
    });
    const renderContent = (update) => {
        const show = update && dom.useShow();
        const hide = new dom.Ref();
        const isCustom = showCustomGrid.value;
        const classNames = () => {
            var _a;
            return classes__default["default"]([
                styles.contentWrapper,
                isCustom && styles.rightContent,
                (!show || show.value) && styles.contentShow,
                ((_a = hide.value) === null || _a === void 0 ? void 0 : _a.value) && styles.contentHide,
            ]);
        };
        if (!isCustom) {
            return ({type:'delay',props:{ref:hide,hide:300},children:[{type:'div',props:{class:classNames},children:[{type:Space.Space},{type:Calendar.Calendar,props:{cellHeight:dataPickerCellHeight,onselect:handleSelectDate,class:{
                    cell: () => styles.cell,
                    gridWrapper: () => styles.gridWrapper,
                },value:value,rotationTop:rotationTop,selectedHandler:handleSelect,disableHandler:handleDisable},children:[{type:CalendarTitle.CalendarTitle,props:{onClick:handleTitleClick,onNext:handleNext,onPrev:handlePrev,min:min,max:max,rotationTop:rotationTop,value:value,onChange:onChange}}]},{type:Space.Space,props:{gap:apply && 24}},{type:'show',props:{when:apply},children:[{type:Buttons.Buttons,children:[{type:Button.Button,props:{onclick:() => {
                    onApply === null || onApply === void 0 ? void 0 : onApply(dom.use(value));
                },flex:true},children:[apply]}]}]}]}]});
        }
        const renderMonth = () => {
            const show = dom.useShow();
            const hide = new dom.Ref();
            return ({type:'delay',props:{ref:hide,hide:300},children:[{type:'div',props:{class:() => {
                    var _a;
                    return classes__default["default"]([
                        styles.monthGrid,
                        show.value && styles.monthGridShow,
                        ((_a = hide.value) === null || _a === void 0 ? void 0 : _a.value) && styles.monthGridHide,
                    ]);
                }},children:[[...new Array(12)].map((_, i) => ({type:'div',props:{onclick:() => {
                        const date = dom.use(value);
                        onChange === null || onChange === void 0 ? void 0 : onChange(new Date(date.getFullYear(), i, date.getDate()));
                        if (i > date.getMonth()) {
                            handleNext();
                        }
                        else {
                            handlePrev();
                        }
                        selector.value = 'date';
                    },class:() => classes__default["default"]([
                        styles.cellCustom,
                        dom.use(value).getMonth() === i && styles.cellSelected,
                        dom.use(value).getFullYear() === todayYear && i === todayMonth && styles.cellToday,
                        dom.use(value).getFullYear() === (min === null || min === void 0 ? void 0 : min.getFullYear()) && min.getMonth() > i && styles.cellDisabled,
                        dom.use(value).getFullYear() === (max === null || max === void 0 ? void 0 : max.getFullYear()) && max.getMonth() < i && styles.cellDisabled,
                    ])},children:[getMonth.getMonth(i, 'short')]}))]}]});
        };
        const renderYear = () => {
            const minYear = min ? min.getFullYear() : 1900;
            const maxYear = max ? max.getFullYear() : 2050;
            const hide = new dom.Ref();
            const show = dom.useShow();
            const availableYears = maxYear - minYear + 1;
            let before = 0;
            let after = 0;
            if (availableYears < 28) {
                const half = (28 - availableYears) / 2;
                if (half % 1) {
                    before = half | 0;
                    after = (half | 0) + 1;
                }
                else {
                    before = after = half;
                }
            }
            return ({type:'delay',props:{ref:hide,hide:300},children:[{type:'div',props:{class:() => {
                    var _a;
                    return classes__default["default"]([
                        styles.yearGrid,
                        show.value && styles.yearGridShow,
                        ((_a = hide.value) === null || _a === void 0 ? void 0 : _a.value) && styles.yearGridHide,
                    ]);
                }},children:[[...new Array(before)].map((_, i) => {
                    const currentYear = minYear - before + i;
                    return ({type:'div',props:{class:() => classes__default["default"]([
                            styles.cellCustom,
                            styles.cellDisabled,
                            dom.use(value).getFullYear() === currentYear && styles.cellSelected,
                            currentYear === todayYear && styles.cellToday,
                        ])},children:[currentYear]});
                }),' ',[...new Array(availableYears)].map((_, i) => {
                    const currentYear = minYear + i;
                    const ref = new dom.Ref();
                    if (watchState.unwatch(() => dom.use(value).getFullYear()) === currentYear) {
                        const timer = setTimeout(() => {
                            var _a;
                            (_a = ref.value) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                            });
                        }, 500);
                        watchState.onDestroy(() => {
                            clearTimeout(timer);
                        });
                    }
                    return ({type:'div',props:{ref:ref,onclick:() => {
                            const date = dom.use(value);
                            onChange === null || onChange === void 0 ? void 0 : onChange(new Date(currentYear, date.getMonth(), date.getDate()));
                            selector.value = 'month';
                        },class:() => classes__default["default"]([
                            styles.cellCustom,
                            dom.use(value).getFullYear() === currentYear && styles.cellSelected,
                            currentYear === todayYear && styles.cellToday,
                        ])},children:[currentYear]});
                }),' ',[...new Array(after)].map((_, i) => {
                    const currentYear = minYear + availableYears + i;
                    return ({type:'div',props:{class:() => classes__default["default"]([
                            styles.cellCustom,
                            styles.cellDisabled,
                            dom.use(value).getFullYear() === currentYear && styles.cellSelected,
                            currentYear === todayYear && styles.cellToday,
                        ])},children:[currentYear]});
                })]}]});
        };
        return ({type:'delay',props:{ref:hide,hide:300},children:[{type:'div',props:{class:classNames},children:[{type:Flex.Flex,props:{padding:[28, 8],class:() => styles.contentHeader},children:[{type:'button',props:{class:() => styles.contentHeaderButton,onclick:() => {
                selector.value = 'date';
            }},children:[{type:Icon.Icon,props:{icon:'arrowLeft'}},{type:'slot',props:{name:'ui-date-picker-go-back'},children:['Go back']}]},{type:Space.Space},{type:'button',props:{class:() => styles.contentHeaderButton,onclick:watchState.createEvent(() => {
                onChange === null || onChange === void 0 ? void 0 : onChange(dateMinMax.dateMinMax(today, min, max));
                selector.value = 'date';
            })},children:[{type:'slot',props:{name:'ui-date-picker-today'},children:['Today']}]}]},{type:'div',props:{class:() => styles.contentGridWrapper},children:[() => selector.value === 'date' ? null : selector.value === 'month' ? renderMonth() : renderYear()]}]}]});
    };
    return ({type:Modal.Modal,props:{width:480,...props,class:{
            root: () => styles.root,
            content: () => styles.content,
        }},children:[children && {type:'slot',props:{name:'title'},children:[children]},{type:'slot',props:{name:'content'},children:[renderContent]}]});
}

exports.DatePicker = DatePicker;
exports.dataPickerCellHeight = dataPickerCellHeight;
