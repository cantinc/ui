import { __rest } from 'tslib';
import { style, Ref, use, inject } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import { State, Cache, Watch, onDestroy } from 'watch-state';
import '../Flex/index.es6.js';
import modules_565fa2bc from './Image.scss.es6.js';
import { Flex } from '../Flex/Flex.es6.js';

const useStyle = style(modules_565fa2bc);
function Image(_a) {
    var { src, fallback, size, ratio = 1, radius = 8, style, loading, ref = new Ref() } = _a, props = __rest(_a, ["src", "fallback", "size", "ratio", "radius", "style", "loading", "ref"]);
    const children = useChildren();
    const styles = useStyle();
    const loadingSrc = new State(false);
    const error = new State(false);
    const visible = new State(false);
    const safeSrc = fallback
        ? new Cache(() => error.value ? use(fallback) : use(src))
        : src;
    const mixLoading = new Cache(() => use(loading) || loadingSrc.value);
    new Watch(() => {
        if (!visible.value)
            return;
        const currentSrc = use(safeSrc);
        loadingSrc.value = true;
        const image = new window.Image();
        image.onload = () => { loadingSrc.value = false; };
        image.onerror = () => {
            if (error.value) {
                loadingSrc.value = false;
            }
            else {
                error.value = true;
            }
        };
        image.src = currentSrc;
    });
    let unobserved = false;
    const unobserve = () => {
        if (ref.value && !unobserved) {
            unobserved = true;
            lazyBackgroundObserver.unobserve(ref.value);
        }
    };
    const lazyBackgroundObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                visible.value = true;
                unobserve();
            }
        });
    });
    queueMicrotask(() => {
        if (ref.value) {
            lazyBackgroundObserver.observe(ref.value);
        }
    });
    onDestroy(unobserve);
    return ({type:Flex,props:{...props,ref:ref,loading:mixLoading,style:Object.assign(Object.assign({}, style), { '--ui-image-ratio': inject(ratio, ratio => Array.isArray(ratio) ? `${ratio[0]} / ${ratio[1]}` : String(ratio)), '--ui-image-radius': inject(radius, radius => typeof radius === 'number' ? `${radius}px` : radius), '--ui-image-size': inject(size, size => `${size}px`), 'background-image': () => visible.value && `url("${use(safeSrc)}")` }),class:() => styles.root},children:[children]});
}

export { Image };
