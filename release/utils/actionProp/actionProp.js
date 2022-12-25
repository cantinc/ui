'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');

function actionProp(state, action) {
    if (state instanceof watchState.State) {
        return val => {
            state.value = val;
            action === null || action === void 0 ? void 0 : action(val);
        };
    }
    return action;
}

exports.actionProp = actionProp;
