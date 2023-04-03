'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../Flex/index.js');
var Image$1 = require('./Image.scss.js');
var Flex = require('../Flex/Flex.js');

const useStyle = dom.style(Image$1["default"]);
function Image(_a) {
    var { src, fallback, size, ratio = 1, radius = 8, style, loading, ref = new dom.Ref() } = _a, props = tslib.__rest(_a, ["src", "fallback", "size", "ratio", "radius", "style", "loading", "ref"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    const loadingSrc = new watchState.State(false);
    const error = new watchState.State(false);
    const visible = new watchState.State(false);
    const safeSrc = fallback
        ? new watchState.Cache(() => error.value ? dom.use(fallback) : dom.use(src))
        : src;
    const mixLoading = new watchState.Cache(() => dom.use(loading) || loadingSrc.value);
    new watchState.Watch(() => {
        if (!visible.value)
            return;
        const currentSrc = dom.use(safeSrc);
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
    watchState.onDestroy(unobserve);
    return ({type:Flex.Flex,props:{...props,ref:ref,loading:mixLoading,style:Object.assign(Object.assign({}, style), { '--ui-image-ratio': dom.inject(ratio, ratio => Array.isArray(ratio) ? `${ratio[0]} / ${ratio[1]}` : String(ratio)), '--ui-image-radius': dom.inject(radius, radius => typeof radius === 'number' ? `${radius}px` : radius), '--ui-image-size': dom.inject(size, size => `${size}px`), 'background-image': () => visible.value && `url("${dom.use(safeSrc)}")` }),class:() => styles.root},children:[children]});
}

exports.Image = Image;
