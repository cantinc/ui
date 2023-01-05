'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../typography/index.js');
var helpers = require('./helpers.js');
var Notification$1 = require('./Notification.scss.js');
var Markdown = require('../../typography/Markdown/Markdown.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Notification$1["default"]);
function Notification({ notification, onclose, }) {
    const styles = useStyle();
    const hidden = new dom.Ref();
    const timer = new helpers.Timer(onclose, notification.value.timeout * 1000);
    const pause = () => timer.pause();
    const play = () => {
        timer.play();
    };
    new watchState.Watch((update) => {
        if (notification.index === 0) {
            if (update) {
                timer.delay += 300;
            }
            play();
        }
    });
    watchState.onDestroy(() => timer.destroy());
    return ({type:'delay',props:{ref:hidden,hide:300},children:[{type:'div',props:{onmouseenter:pause,onmouseleave:play,class:() => {
            var _a;
            return classes__default["default"]([
                styles.root,
                notification.value.type && styles[notification.value.type],
                ((_a = hidden.value) === null || _a === void 0 ? void 0 : _a.value) && styles.hidden,
            ]);
        }},children:[{type:Markdown.Markdown,props:{text:notification.value.content}},{type:'div',props:{class:styles.progress,style:{
            'animation-duration': `${notification.value.timeout}s`,
        }}}]}]});
}

exports.Notification = Notification;
