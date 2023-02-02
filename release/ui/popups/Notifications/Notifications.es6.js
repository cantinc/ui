import { __rest } from 'tslib';
import { style } from '@innet/dom';
import { onDestroy } from 'watch-state';
import '../Notification/index.es6.js';
import { notifications, notificationsEmpty, first3notifications } from './constants.es6.js';
import modules_2656a2ad from './Notifications.scss.es6.js';
import { Notification } from '../Notification/Notification.es6.js';

const useStyle = style(modules_2656a2ad);
function Notifications(_a = {}) {
    var { onclick } = _a, props = __rest(_a, ["onclick"]);
    const styles = useStyle();
    const close = () => {
        notifications.value.shift();
        notifications.update();
    };
    const handleClick = (e) => {
        close();
        onclick === null || onclick === void 0 ? void 0 : onclick(e);
    };
    onDestroy(() => {
        notifications.value = [];
    });
    return () => {
        if (notificationsEmpty.value)
            return;
        return ({type:'delay',props:{hide:300},children:[{type:'div',props:{...props,onclick:handleClick,class:styles.root},children:[{type:'for',props:{of:first3notifications,key:'key'},children:[(notification) => ({type:Notification,props:{onclose:close,class:{ progress: styles.progress },notification:notification}})]}]}]});
    };
}

export { Notifications };
