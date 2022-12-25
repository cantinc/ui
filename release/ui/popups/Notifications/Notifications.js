'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var watchState = require('watch-state');
require('../Notification/index.js');
var constants = require('./constants.js');
var Notifications$1 = require('./Notifications.scss.js');
var Notification = require('../Notification/Notification.js');

const useStyle = dom.style(Notifications$1["default"]);
function Notifications(_a = {}) {
    var { onclick } = _a, props = tslib.__rest(_a, ["onclick"]);
    const styles = useStyle();
    const close = () => {
        constants.notifications.value.shift();
        constants.notifications.update();
    };
    const handleClick = (e) => {
        close();
        onclick === null || onclick === void 0 ? void 0 : onclick(e);
    };
    watchState.onDestroy(() => {
        constants.notifications.value = [];
    });
    return () => {
        if (constants.notificationsEmpty.value)
            return;
        return ({type:'delay',props:{hide:300},children:[{type:'div',props:{...props,onclick:handleClick,class:styles.root},children:[{type:'for',props:{of:() => constants.notifications.value,size:3,key:'key'},children:[(notification) => ({type:Notification.Notification,props:{onclose:close,class:{ progress: styles.progress },notification:notification}})]}]}]});
    };
}

exports.Notifications = Notifications;
