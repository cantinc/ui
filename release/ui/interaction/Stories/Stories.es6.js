import { __rest } from 'tslib';
import { style, Ref, use } from '@innet/dom';
import { State, Watch } from 'watch-state';
import '../../icons/index.es6.js';
import '../../layout/index.es6.js';
import '../../popups/index.es6.js';
import '../Dots/index.es6.js';
import '../Slides/index.es6.js';
import modules_b1e1aef6 from './Stories.scss.es6.js';
import { Dots } from '../Dots/Dots.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';
import { Image } from '../../layout/Image/Image.es6.js';
import { Popout } from '../../popups/Popout/Popout.es6.js';
import { Slides } from '../Slides/Slides.es6.js';
import { Icon } from '../../icons/Icon/Icon.es6.js';

const useStyle = style(modules_b1e1aef6);
function Stories(_a) {
    var { stories, ref = new Ref(), props: { preview: previewProps } = {} } = _a, props = __rest(_a, ["stories", "ref", "props"]);
    const styles = useStyle();
    const popoutElement = new Ref();
    const popoutRoot = new Ref();
    const state = new State(false);
    const story = new State();
    const autoscroll = new State(true);
    const stopAutoscroll = () => {
        autoscroll.value = false;
    };
    const continueAutoscroll = () => {
        autoscroll.value = true;
    };
    new Watch(() => {
        var _a;
        const currentValue = story.value;
        if (currentValue !== undefined && (ref === null || ref === void 0 ? void 0 : ref.value)) {
            const currentElement = (_a = stories[currentValue].previewRef) === null || _a === void 0 ? void 0 : _a.value;
            if (currentElement) {
                popoutElement.value = currentElement;
                if (popoutRoot.value) {
                    popoutRoot.value.style.setProperty('background-image', `url("${stories[currentValue].preview}")`);
                }
                if (ref.value) {
                    const x = currentElement.offsetLeft - (ref.value.offsetWidth / 2);
                    const y = currentElement.offsetTop - (ref.value.offsetHeight / 2);
                    ref.value.scrollTo(x, y);
                }
            }
        }
    });
    for (let i = 0; i < stories.length; i++) {
        if (!stories[i].previewRef) {
            stories[i].previewRef = new Ref();
        }
    }
    const show = () => {
        state.value = true;
    };
    const hide = () => {
        state.value = false;
    };
    const slides = stories.map((_a, index) => {
        var { preview, slides, previewRef, children, style = '', onclick, unread, ref = new Ref() } = _a, rest = __rest(_a, ["preview", "slides", "previewRef", "children", "style", "onclick", "unread", "ref"]);
        const currentProgress = new State(0);
        new Watch(() => {
            if (!state.value || story.value !== index) {
                currentProgress.value = 0;
            }
        });
        const next = () => {
            if (currentProgress.value < slides.length - 1) {
                currentProgress.value++;
            }
            else if (story.value < stories.length - 1) {
                story.value++;
            }
            else {
                hide();
            }
        };
        return (Object.assign(Object.assign({ align: 'center', vertical: true }, rest), { ref, onclick: (e) => {
                if (e.target === (ref === null || ref === void 0 ? void 0 : ref.value)) {
                    if (e.x < document.body.offsetWidth / 2) {
                        if (currentProgress.value > 0) {
                            currentProgress.value--;
                        }
                        else if (story.value > 0) {
                            story.value--;
                        }
                        else {
                            hide();
                        }
                    }
                    else {
                        next();
                    }
                }
                ;
                onclick === null || onclick === void 0 ? void 0 : onclick(e);
            }, style: {
                '--ui-stories-story-image': () => Math.abs(story.value - index) < 3 ? `url("${slides[currentProgress.value]}")` : '',
            }, children: ([{type:Dots,props:{size:6,progress:true,value:currentProgress,class:{
                    root: () => styles.dots,
                    dot: () => styles.dot,
                },onend:next,autoscroll:() => story.value === index && autoscroll.value,count:slides.length}},children]) }));
    });
    return ([{type:Flex,props:{gap:24,...props,ref:ref,class:() => styles.root},children:[stories.map(({ preview, previewRef, unread }, index) => ({type:Image,props:{size:110,radius:(previewProps === null || previewProps === void 0 ? void 0 : previewProps.size) || 110,...previewProps,ref:previewRef,src:preview,class:() => [
                styles.preview,
                use(unread) && styles.unread,
            ],onclick:() => {
                story.value = index;
                show();
            }}}))]},{type:Popout,props:{ontouchstart:stopAutoscroll,ontouchend:continueAutoscroll,rootRef:popoutRoot,align:'stretch',vertical:true,show:state,element:popoutElement},children:[{type:Slides,props:{gap:16,align:'stretch',value:story,class:{
            root: () => styles.slides,
            slide: () => styles.slide,
        },flex:true,slides:slides}},{type:Icon,props:{class:() => styles.close,icon:'cross',size:24,onclick:hide}}]}]);
}

export { Stories };
