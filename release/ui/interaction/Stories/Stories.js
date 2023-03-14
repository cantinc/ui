'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var watchState = require('watch-state');
require('../../layout/index.js');
require('../../popups/index.js');
require('../Dots/index.js');
require('../Slides/index.js');
var Stories$1 = require('./Stories.scss.js');
var Dots = require('../Dots/Dots.js');
var Flex = require('../../layout/Flex/Flex.js');
var Image = require('../../layout/Image/Image.js');
var Popout = require('../../popups/Popout/Popout.js');
var Slides = require('../Slides/Slides.js');

const useStyle = dom.style(Stories$1["default"]);
function Stories(_a) {
    var { stories, ref = new dom.Ref(), props: { preview: previewProps } = {} } = _a, props = tslib.__rest(_a, ["stories", "ref", "props"]);
    const styles = useStyle();
    const popoutElement = new dom.Ref();
    const state = new watchState.State(false);
    const story = new watchState.State();
    const autoscroll = new watchState.State(true);
    const stopAutoscroll = () => {
        autoscroll.value = false;
    };
    const continueAutoscroll = () => {
        autoscroll.value = true;
    };
    new watchState.Watch(() => {
        var _a;
        const currentValue = story.value;
        if (currentValue !== undefined && (ref === null || ref === void 0 ? void 0 : ref.value)) {
            const currentElement = (_a = stories[currentValue].previewRef) === null || _a === void 0 ? void 0 : _a.value;
            if (currentElement) {
                popoutElement.value = currentElement;
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
            stories[i].previewRef = new dom.Ref();
        }
    }
    const read = () => {
        var _a, _b;
        (_b = (_a = stories[story.value]).onread) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    const show = () => {
        state.value = true;
        read();
    };
    const hide = () => {
        state.value = false;
    };
    const slides = stories.map((_a, index) => {
        var { preview, slides, previewRef, children, style = '', onclick, unread, ref = new dom.Ref() } = _a, rest = tslib.__rest(_a, ["preview", "slides", "previewRef", "children", "style", "onclick", "unread", "ref"]);
        const currentProgress = new watchState.State(0);
        new watchState.Watch(() => {
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
                read();
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
                            read();
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
            }, children: ([{type:Dots.Dots,props:{size:6,progress:true,value:currentProgress,class:{
                    root: () => styles.dots,
                    dot: () => styles.dot,
                },onend:next,autoscroll:() => story.value === index && autoscroll.value,count:slides.length}},children]) }));
    });
    return ([{type:Flex.Flex,props:{gap:24,...props,ref:ref,class:() => styles.root},children:[stories.map(({ preview, previewRef, unread }, index) => ({type:Image.Image,props:{size:110,radius:(previewProps === null || previewProps === void 0 ? void 0 : previewProps.size) || 110,...previewProps,ref:previewRef,src:preview,class:() => [
                styles.preview,
                dom.use(unread) && styles.unread,
            ],onclick:() => {
                story.value = index;
                show();
            }}}))]},{type:Popout.Popout,props:{ontouchstart:stopAutoscroll,ontouchend:continueAutoscroll,align:'stretch',vertical:true,show:state,onhide:hide,closeButton:true,background:'var(--color-0)',element:popoutElement},children:[{type:Slides.Slides,props:{gap:16,align:'stretch',value:story,onchange:read,class:{
            root: () => styles.slides,
            slide: () => styles.slide,
        },flex:true,slides:slides}}]}]);
}

exports.Stories = Stories;
