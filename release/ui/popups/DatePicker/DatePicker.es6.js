import { __rest } from 'tslib';
import { style, use, useShow, Ref } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import { Cache, State, unwatch, createEvent, onDestroy } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../buttons/index.es6.js';
import '../../icons/index.es6.js';
import '../../interaction/Calendar/index.es6.js';
import '../../interaction/CalendarTitle/index.es6.js';
import '../../layout/index.es6.js';
import '../Modal/index.es6.js';
import modules_3f4b6683 from './DatePicker.scss.es6.js';
import { windowWidth } from '../../../utils/core/window/width.es6.js';
import { windowHeight } from '../../../utils/core/window/height.es6.js';
import { dateMinMax } from '../../../utils/date/dateMinMax/dateMinMax.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { getDaysInMonth } from '../../../utils/date/getDaysInMonth/getDaysInMonth.es6.js';
import { Space } from '../../layout/Space/Space.es6.js';
import { Calendar } from '../../interaction/Calendar/Calendar.es6.js';
import { CalendarTitle } from '../../interaction/CalendarTitle/CalendarTitle.es6.js';
import { Buttons } from '../../buttons/Buttons/Buttons.es6.js';
import { Button } from '../../buttons/Button/Button.es6.js';
import { getMonth } from '../../../utils/date/getMonth/getMonth.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';
import { Icon } from '../../icons/Icon/Icon.es6.js';
import { Modal } from '../Modal/Modal.es6.js';

const useStyle = style(modules_3f4b6683);
const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth();
const dataPickerCellHeight = new Cache(() => {
    return windowWidth.value < 768 ? (windowHeight.value - 290) / 6 : 57;
});
function DatePicker(_a = {}) {
    var { apply, min, max, selector = new State('date'), defaultValue = today, value = new State(dateMinMax(unwatch(() => use(defaultValue) || today), min, max)), onChange, rotationTop = new State(true), goBackText, todayText, onApply } = _a, props = __rest(_a, ["apply", "min", "max", "selector", "defaultValue", "value", "onChange", "rotationTop", "goBackText", "todayText", "onApply"]);
    onChange = actionProp(value, onChange);
    const children = useChildren();
    const styles = useStyle();
    const isYearSelectable = !(min && max && min.getFullYear() === max.getFullYear());
    const showCustomGrid = new Cache(() => selector.value !== 'date');
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
        const currentValue = use(value);
        return currentValue.getDate() === date.getDate() &&
            currentValue.getMonth() === date.getMonth() &&
            currentValue.getFullYear() === date.getFullYear();
    };
    const handleNext = () => {
        const date = use(value);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const nextDate = new Date(year, month + 1, -1);
        if (max && max < new Date(year, month, day)) {
            onChange === null || onChange === void 0 ? void 0 : onChange(new Date(year, month, max.getDate()));
        }
        else if (getDaysInMonth(nextDate) < day) {
            onChange === null || onChange === void 0 ? void 0 : onChange(new Date(year, month, getDaysInMonth(nextDate)));
        }
    };
    const handlePrev = () => {
        const date = use(value);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const prevDate = new Date(year, month + 1, -1);
        if (min && min > new Date(year, month, day)) {
            onChange === null || onChange === void 0 ? void 0 : onChange(new Date(year, month, min.getDate()));
        }
        else if (getDaysInMonth(prevDate) < day) {
            onChange === null || onChange === void 0 ? void 0 : onChange(new Date(year, month, getDaysInMonth(prevDate)));
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
    const handleSelectDate = createEvent(({ date }) => {
        const curDate = use(value);
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
        const show = update && useShow();
        const hide = new Ref();
        const isCustom = showCustomGrid.value;
        const classNames = () => {
            var _a;
            return classes([
                styles.contentWrapper,
                isCustom && styles.rightContent,
                (!show || show.value) && styles.contentShow,
                ((_a = hide.value) === null || _a === void 0 ? void 0 : _a.value) && styles.contentHide,
            ]);
        };
        if (!isCustom) {
            return ({type:'delay',props:{ref:hide,hide:300},children:[{type:'div',props:{class:classNames},children:[{type:Space},{type:Calendar,props:{cellHeight:dataPickerCellHeight,onselect:handleSelectDate,class:{
                    cell: () => styles.cell,
                    gridWrapper: () => styles.gridWrapper,
                },value:value,rotationTop:rotationTop,selectedHandler:handleSelect,disableHandler:handleDisable},children:[{type:CalendarTitle,props:{onClick:handleTitleClick,onNext:handleNext,onPrev:handlePrev,min:min,max:max,rotationTop:rotationTop,value:value,onChange:onChange}}]},{type:Space,props:{gap:apply && 24}},{type:'show',props:{state:apply},children:[{type:Buttons,children:[{type:Button,props:{onclick:() => {
                    onApply === null || onApply === void 0 ? void 0 : onApply(use(value));
                },flex:true},children:[apply]}]}]}]}]});
        }
        const renderMonth = () => {
            const show = useShow();
            const hide = new Ref();
            return ({type:'delay',props:{ref:hide,hide:300},children:[{type:'div',props:{class:() => {
                    var _a;
                    return classes([
                        styles.monthGrid,
                        show.value && styles.monthGridShow,
                        ((_a = hide.value) === null || _a === void 0 ? void 0 : _a.value) && styles.monthGridHide,
                    ]);
                }},children:[[...new Array(12)].map((_, i) => ({type:'div',props:{onclick:() => {
                        const date = use(value);
                        onChange === null || onChange === void 0 ? void 0 : onChange(new Date(date.getFullYear(), i, date.getDate()));
                        if (i > date.getMonth()) {
                            handleNext();
                        }
                        else {
                            handlePrev();
                        }
                        selector.value = 'date';
                    },class:() => classes([
                        styles.cellCustom,
                        use(value).getMonth() === i && styles.cellSelected,
                        use(value).getFullYear() === todayYear && i === todayMonth && styles.cellToday,
                        use(value).getFullYear() === (min === null || min === void 0 ? void 0 : min.getFullYear()) && min.getMonth() > i && styles.cellDisabled,
                        use(value).getFullYear() === (max === null || max === void 0 ? void 0 : max.getFullYear()) && max.getMonth() < i && styles.cellDisabled,
                    ])},children:[getMonth(i, 'short')]}))]}]});
        };
        const renderYear = () => {
            const minYear = min ? min.getFullYear() : 1900;
            const maxYear = max ? max.getFullYear() : 2050;
            const hide = new Ref();
            const show = useShow();
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
                    return classes([
                        styles.yearGrid,
                        show.value && styles.yearGridShow,
                        ((_a = hide.value) === null || _a === void 0 ? void 0 : _a.value) && styles.yearGridHide,
                    ]);
                }},children:[[...new Array(before)].map((_, i) => {
                    const currentYear = minYear - before + i;
                    return ({type:'div',props:{class:() => classes([
                            styles.cellCustom,
                            styles.cellDisabled,
                            use(value).getFullYear() === currentYear && styles.cellSelected,
                            currentYear === todayYear && styles.cellToday,
                        ])},children:[currentYear]});
                }),' ',[...new Array(availableYears)].map((_, i) => {
                    const currentYear = minYear + i;
                    const ref = new Ref();
                    if (unwatch(() => use(value).getFullYear()) === currentYear) {
                        const timer = setTimeout(() => {
                            var _a;
                            (_a = ref.value) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                            });
                        }, 500);
                        onDestroy(() => {
                            clearTimeout(timer);
                        });
                    }
                    return ({type:'div',props:{ref:ref,onclick:() => {
                            const date = use(value);
                            onChange === null || onChange === void 0 ? void 0 : onChange(new Date(currentYear, date.getMonth(), date.getDate()));
                            selector.value = 'month';
                        },class:() => classes([
                            styles.cellCustom,
                            use(value).getFullYear() === currentYear && styles.cellSelected,
                            currentYear === todayYear && styles.cellToday,
                        ])},children:[currentYear]});
                }),' ',[...new Array(after)].map((_, i) => {
                    const currentYear = minYear + availableYears + i;
                    return ({type:'div',props:{class:() => classes([
                            styles.cellCustom,
                            styles.cellDisabled,
                            use(value).getFullYear() === currentYear && styles.cellSelected,
                            currentYear === todayYear && styles.cellToday,
                        ])},children:[currentYear]});
                })]}]});
        };
        return ({type:'delay',props:{ref:hide,hide:300},children:[{type:'div',props:{class:classNames},children:[{type:Flex,props:{padding:[28, 8],class:() => styles.contentHeader},children:[{type:'button',props:{class:() => styles.contentHeaderButton,onclick:() => {
                selector.value = 'date';
            }},children:[{type:Icon,props:{icon:'arrowLeft'}},goBackText]},{type:Space},{type:'button',props:{class:() => styles.contentHeaderButton,onclick:createEvent(() => {
                onChange === null || onChange === void 0 ? void 0 : onChange(dateMinMax(today, min, max));
                selector.value = 'date';
            })},children:[todayText]}]},{type:'div',props:{class:() => styles.contentGridWrapper},children:[() => selector.value === 'date' ? null : selector.value === 'month' ? renderMonth() : renderYear()]}]}]});
    };
    return ({type:Modal,props:{width:480,...props,class:{
            root: () => styles.root,
            content: () => styles.content,
        }},children:[children && {type:'slot',props:{name:'title'},children:[children]},{type:'slot',props:{name:'content'},children:[renderContent]}]});
}

export { DatePicker, dataPickerCellHeight };
