import { __rest } from 'tslib';
import { style, Ref, use } from '@innet/dom';
import { State, onDestroy, Watch } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../layout/index.es6.js';
import modules_6d646251 from './Slides.scss.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_6d646251);
function* Slides(_a) {
    var { slides, vertical, value = new State(0), onchange, ref = new Ref(), onscroll, slideProps } = _a, props = __rest(_a, ["slides", "vertical", "value", "onchange", "ref", "onscroll", "slideProps"]);
    const styles = useStyle();
    let scrolled = false;
    let changedByScroll = false;
    const ready = new State(false);
    onchange = actionProp(value, onchange);
    for (const slide of slides) {
        if (!slide.ref) {
            slide.ref = new Ref();
        }
    }
    yield ({type:Flex,props:{...props,ref:ref,vertical:vertical,onscroll:(e) => {
            scrolled = true;
            onscroll === null || onscroll === void 0 ? void 0 : onscroll(e);
        },class:() => [
            styles.root,
            vertical && styles.vertical,
            ready.value && styles.ready,
        ]},children:[slides.map((_a) => {
            var { children } = _a, props = __rest(_a, ["children"]);
            return ({type:Flex,props:{...slideProps,...props,class:() => styles.slide},children:[children]});
        })]});
    const observer = new IntersectionObserver(entries => {
        if (!scrolled)
            return;
        for (const entry of entries) {
            if (entry.isIntersecting) {
                const index = slides.findIndex(({ ref }) => (ref === null || ref === void 0 ? void 0 : ref.value) === entry.target);
                if (use(value) !== index) {
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
    onDestroy(() => {
        observer.disconnect();
    });
    for (const slide of slides) {
        observer.observe(slide.ref.value);
    }
    new Watch(() => {
        var _a;
        const currentValue = use(value);
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

export { Slides };
