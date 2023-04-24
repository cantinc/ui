import { __rest } from 'tslib';
import { style, use, inject, setTimeoutSync } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import { Cache, State, unwatch, Watch } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../layout/index.es6.js';
import modules_dc28a286 from './Calendar.scss.es6.js';
import { inputDateFormat } from '../../../utils/date/inputDateFormat/inputDateFormat.es6.js';
import { getDaysInMonth } from '../../../utils/date/getDaysInMonth/getDaysInMonth.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';
import { getWeek } from '../../../utils/date/getWeek/getWeek.es6.js';

const useStyle = style(modules_dc28a286);
const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth();
const todayDay = today.getDate();
const defaultCalendarCellRender = (item) => {
    return new Cache(() => item.value.date.getDate());
};
const isToday = (date) => {
    return date.getDate() === todayDay && date.getFullYear() === todayYear && date.getMonth() === todayMonth;
};
function* Calendar(_a = {}) {
    var { activeHandler, disableHandler, selectedHandler, cellHeight = 48, renderCell = defaultCalendarCellRender, onselect, value = new State(today), rotationTop = new State(true) } = _a, props = __rest(_a, ["activeHandler", "disableHandler", "selectedHandler", "cellHeight", "renderCell", "onselect", "value", "rotationTop"]);
    const children = useChildren();
    const styles = useStyle();
    let position = -42;
    const stopAnimation = new State(false);
    const top = new State(0);
    const margin = new State(0);
    const createCell = (date, current = false) => {
        const value = inputDateFormat(date);
        return {
            date,
            value,
            current,
        };
    };
    const grid = new Cache(() => {
        const date = use(value);
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth();
        const firstDate = new Date(currentYear, currentMonth, 1);
        const deltaBeforeTemp = firstDate.getDay() - 1;
        const deltaBefore = deltaBeforeTemp === -1 ? 6 : deltaBeforeTemp;
        const countDays = getDaysInMonth(firstDate);
        const deltaAfterTemp = 7 - ((countDays + deltaBefore) % 7);
        const deltaAfterTemp2 = deltaAfterTemp === 7 ? 0 : deltaAfterTemp;
        const deltaSum = deltaBefore + countDays + deltaAfterTemp2;
        const deltaAfter = deltaSum >= 42 ? deltaAfterTemp2 : deltaSum === 28 ? deltaAfterTemp2 + 14 : deltaAfterTemp2 + 7;
        const grid = [];
        const currentBeforeDataStart = new Date(currentYear, currentMonth, 0).getDate();
        const currentDeltaBefore = deltaBefore;
        const currentDeltaAfter = deltaAfter;
        const currentCountDays = countDays;
        for (let i = 0; i < currentDeltaBefore; i++) {
            grid.push(createCell(new Date(currentYear, currentMonth - 1, currentBeforeDataStart - currentDeltaBefore + i + 1, 1)));
        }
        for (let i = 0; i < currentCountDays; i++) {
            grid.push(createCell(new Date(currentYear, currentMonth, i + 1), true));
        }
        for (let i = 0; i < currentDeltaAfter; i++) {
            grid.push(createCell(new Date(currentYear, currentMonth + 1, i + 1)));
        }
        return grid;
    });
    yield ({type:Flex,props:{...props,vertical:true,align:'stretch',class:() => styles.root},children:[children,{type:'div',props:{class:() => styles.week},children:[[...new Array(7)].map((_, i) => ({type:'span',props:{class:() => styles.weekCell},children:[getWeek(i + 1, 'short')]}))]},{type:'div',props:{style:{
            '--ui-calendar-cell-height': inject(cellHeight, height => `${height}px`),
        },class:() => styles.gridWrapper},children:[{type:'div',props:{style:{
            transition: () => stopAnimation.value ? 'none' : '',
            'margin-top': () => `${margin.value}px`,
            top: () => `${top.value}px`,
        },class:() => styles.grid},children:[{type:'for',props:{of:grid,key:'value'},children:[(item) => {
            if (unwatch(() => rotationTop.value)) {
                position--;
            }
            else {
                position++;
            }
            return ({type:'delay',props:{hide:300},children:[{type:'span',props:{onclick:() => onselect === null || onselect === void 0 ? void 0 : onselect(item.value),class:() => classes([
                    styles.cell,
                    isToday(item.value.date) && styles.today,
                    item.value.current && styles.cellCurrent,
                    (activeHandler === null || activeHandler === void 0 ? void 0 : activeHandler(item.value)) && styles.active,
                    (disableHandler === null || disableHandler === void 0 ? void 0 : disableHandler(item.value)) && styles.disabled,
                    (selectedHandler === null || selectedHandler === void 0 ? void 0 : selectedHandler(item.value)) && styles.selected,
                ])},children:[() => renderCell(item)]}]});
        }]}]}]}]});
    let timer;
    new Watch(update => {
        const height = use(cellHeight);
        if (update) {
            stopAnimation.value = true;
            top.value = position / 7 * -1 * height;
            margin.value = position / 7 * height;
            clearTimeout(timer);
            timer = setTimeout(() => {
                stopAnimation.value = false;
            }, 100);
        }
    });
    new Watch(() => {
        unwatch(() => {
            const height = use(cellHeight);
            top.value = position / 7 * -1 * height;
            if (rotationTop.value) {
                margin.value = position / 7 * height;
            }
            else {
                const nextValue = position / 7 * height;
                setTimeoutSync(() => {
                    margin.value = nextValue;
                }, 300);
            }
        });
        return grid.value;
    });
}

export { Calendar, defaultCalendarCellRender };
