'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../layout/index.js');
var Slides$1 = require('./Slides.scss.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var Flex = require('../../layout/Flex/Flex.js');

const useStyle = dom.style(Slides$1["default"]);
function* Slides(_a) {
    var { slides, vertical, value = new watchState.State(0), onchange, ref = new dom.Ref(), onscroll, slideProps } = _a, props = tslib.__rest(_a, ["slides", "vertical", "value", "onchange", "ref", "onscroll", "slideProps"]);
    const styles = useStyle();
    let scrolled = false;
    let changedByScroll = false;
    const ready = new watchState.State(false);
    onchange = actionProp.actionProp(value, onchange);
    for (const slide of slides) {
        if (!slide.ref) {
            slide.ref = new dom.Ref();
        }
    }
    yield ({type:Flex.Flex,props:{...props,ref:ref,vertical:vertical,onscroll:(e) => {
            scrolled = true;
            onscroll === null || onscroll === void 0 ? void 0 : onscroll(e);
        },class:() => [
            styles.root,
            vertical && styles.vertical,
            ready.value && styles.ready,
        ]},children:[slides.map((_a) => {
            var { children } = _a, props = tslib.__rest(_a, ["children"]);
            return ({type:Flex.Flex,props:{...slideProps,...props,class:() => styles.slide},children:[children]});
        })]});
    const observer = new IntersectionObserver(entries => {
        if (!scrolled)
            return;
        for (const entry of entries) {
            if (entry.isIntersecting) {
                const index = slides.findIndex(({ ref }) => (ref === null || ref === void 0 ? void 0 : ref.value) === entry.target);
                if (dom.use(value) !== index) {
                    changedByScroll = true;
                    onchange === null || onchange === void 0 ? void 0 : onchange(index);
                }
            }
        }
    }, {
        root: ref === null || ref === void 0 ? void 0 : ref.value,
        rootMargin: '0px',
        threshold: 1.0,
    });
    watchState.onDestroy(() => {
        observer.disconnect();
    });
    for (const slide of slides) {
        observer.observe(slide.ref.value);
    }
    new watchState.Watch(() => {
        var _a;
        const currentValue = dom.use(value);
        if (changedByScroll) {
            changedByScroll = false;
            return;
        }
        if (ref.value) {
            const rootElement = ref.value;
            const currentSlide = slides[currentValue];
            const slide = (_a = currentSlide === null || currentSlide === void 0 ? void 0 : currentSlide.ref) === null || _a === void 0 ? void 0 : _a.value;
            if (slide) {
                rootElement.scrollTo(slide.offsetLeft, slide.offsetTop);
            }
        }
    });
    setTimeout(() => {
        ready.value = true;
    });
}

exports.Slides = Slides;
