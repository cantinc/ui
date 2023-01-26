import { __rest } from 'tslib';
import { style, use, useShow, Ref } from '@innet/dom';
import classes from 'html-classes';
import { State, Cache, createEvent } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../icons/index.es6.js';
import modules_a7141d96 from './CalendarTitle.scss.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { dateMinMax } from '../../../utils/date/dateMinMax/dateMinMax.es6.js';
import { getDaysInMonth } from '../../../utils/date/getDaysInMonth/getDaysInMonth.es6.js';
import { Icon } from '../../icons/Icon/Icon.es6.js';
import { getMonth } from '../../../utils/date/getMonth/getMonth.es6.js';

const useStyle = style(modules_a7141d96);
const minCalendarDate = new Date(0, 0, 0, 0, 0, 0, 0);
const maxCalendarDate = new Date(10000, 0, 0, 0, 0, 0, 0);
function CalendarTitle(_a = {}) {
    var { value = new State(new Date()), onChange, rotationTop = new State(), onNext, onPrev, onClick, min = minCalendarDate, max = maxCalendarDate } = _a, props = __rest(_a, ["value", "onChange", "rotationTop", "onNext", "onPrev", "onClick", "min", "max"]);
    onChange = actionProp(value, onChange);
    const styles = useStyle();
    const disablePrev = new Cache(() => use(value) <= min);
    const disableNext = new Cache(() => use(value) >= max);
    const year = new Cache(() => use(value).getFullYear());
    const month = new Cache(() => use(value).getMonth());
    const handleNext = createEvent(() => {
        rotationTop.value = false;
        const date = use(value);
        const month = date.getMonth();
        if (month > 10) {
            onChange === null || onChange === void 0 ? void 0 : onChange(dateMinMax(new Date(date.getFullYear() + 1, 0, Math.min(date.getDate(), getDaysInMonth(new Date(date.getFullYear() + 1, 0)))), min, max));
        }
        else {
            onChange === null || onChange === void 0 ? void 0 : onChange(dateMinMax(new Date(date.getFullYear(), month + 1, Math.min(date.getDate(), getDaysInMonth(new Date(date.getFullYear(), month + 1)))), min, max));
        }
        onNext === null || onNext === void 0 ? void 0 : onNext();
    });
    const handlePrev = createEvent(() => {
        rotationTop.value = true;
        const date = use(value);
        const month = date.getMonth();
        if (month < 1) {
            onChange === null || onChange === void 0 ? void 0 : onChange(dateMinMax(new Date(date.getFullYear() - 1, 11, Math.min(date.getDate(), getDaysInMonth(new Date(date.getFullYear() - 1, 11)))), min, max));
        }
        else {
            onChange === null || onChange === void 0 ? void 0 : onChange(dateMinMax(new Date(date.getFullYear(), month - 1, Math.min(date.getDate(), getDaysInMonth(new Date(date.getFullYear(), month - 1)))), min, max));
        }
        onPrev === null || onPrev === void 0 ? void 0 : onPrev();
    });
    return ({type:'div',props:{...props,class:() => styles.root},children:[{type:'button',props:{type:'button',disabled:disablePrev,onclick:handlePrev,class:() => styles.arrow},children:[{type:Icon,props:{icon:'chevronLeft'}}]},{type:'div',props:{class:() => styles.content},children:[() => {
            const show = useShow();
            const hide = new Ref();
            const curYear = year.value;
            const curMonth = month.value;
            return ({type:'delay',props:{ref:hide,hide:300},children:[{type:'button',props:{onclick:onClick,tabIndex:0,class:() => {
                    var _a;
                    return classes([
                        styles.date,
                        (rotationTop === null || rotationTop === void 0 ? void 0 : rotationTop.value) && styles.rotationTop,
                        show.value && styles.dateShow,
                        ((_a = hide.value) === null || _a === void 0 ? void 0 : _a.value) && styles.dateHide,
                    ]);
                }},children:[getMonth(curMonth),' ',curYear]}]});
        }]},{type:'button',props:{type:'button',disabled:disableNext,onclick:handleNext,class:() => styles.arrow},children:[{type:Icon,props:{icon:'chevronRight'}}]}]});
}

export { CalendarTitle, maxCalendarDate, minCalendarDate };
