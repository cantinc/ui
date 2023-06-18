import { style, useMapValue, useMapIndex, Ref, use, inject } from '@innet/dom';
import classes from 'html-classes';
import { Watch, onDestroy } from 'watch-state';
import '../../typography/index.es6.js';
import { Timer } from './helpers.es6.js';
import modules_4c9a7c8b from './Notification.scss.es6.js';
import { Markdown } from '../../typography/Markdown/Markdown.es6.js';

const useStyle = style(modules_4c9a7c8b);
function Notification({ onclose, }) {
    const styles = useStyle();
    const notification = useMapValue();
    const index = useMapIndex();
    const hidden = new Ref();
    const timer = new Timer(onclose, use(notification).timeout * 1000);
    const pause = () => timer.pause();
    const play = () => {
        timer.play();
    };
    new Watch((update) => {
        if (use(index) === 0) {
            if (update) {
                timer.delay += 300;
            }
            play();
        }
    });
    onDestroy(() => timer.destroy());
    return ({type:'delay',props:{ref:hidden,hide:300},children:[{type:'div',props:{onmouseenter:pause,onmouseleave:play,class:() => {
            var _a;
            return classes([
                styles.root,
                use(inject(notification, notification => notification.type && styles[notification.type])),
                ((_a = hidden.value) === null || _a === void 0 ? void 0 : _a.value) && styles.hidden,
            ]);
        }},children:[{type:Markdown,props:{text:inject(notification, notification => notification.content)}},{type:'div',props:{class:styles.progress,style:{
            'animation-duration': inject(notification, notification => `${notification.timeout}s`),
        }}}]}]});
}

export { Notification };
