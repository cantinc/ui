import { State } from 'watch-state';

function actionProp(state, action) {
    if (state instanceof State) {
        return val => {
            state.value = val;
            action === null || action === void 0 ? void 0 : action(val);
        };
    }
    return action;
}

export { actionProp };
