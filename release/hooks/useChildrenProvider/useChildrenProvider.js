'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');

function useChildrenProvider() {
    const children = jsx.useChildren();
    return (element) => {
        if (children) {
            element.children = children;
        }
        return element;
    };
}

exports.useChildrenProvider = useChildrenProvider;
