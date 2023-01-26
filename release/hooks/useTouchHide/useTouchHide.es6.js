import { State } from 'watch-state';

function useTouchHide({ hide, element, placement = 'bottom', length = 100, touchStart, touchEnd, }) {
    const vertical = placement === 'bottom' || placement === 'top';
    let startX;
    let startY;
    const touched = new State(false);
    const touchHide = new State(0);
    return {
        touched,
        touchHide,
        handleTouchStart(e) {
            const currentElement = element === null || element === void 0 ? void 0 : element.value;
            if (placement === 'bottom' && (currentElement === null || currentElement === void 0 ? void 0 : currentElement.scrollTop))
                return;
            if (placement === 'top' && currentElement && (currentElement.scrollHeight - currentElement.scrollTop !== currentElement.clientHeight))
                return;
            touchStart === null || touchStart === void 0 ? void 0 : touchStart(e);
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            touched.value = true;
        },
        handleTouchMove(e) {
            if (!touched.value)
                return;
            const y = e.touches[0].clientY - startY;
            const x = e.touches[0].clientX - startX;
            const touchX = Math.abs(x);
            const touchY = Math.abs(y);
            if (vertical ? (placement === 'bottom' ? touchX > y : touchX > -y) : (placement === 'left' ? touchY > -x : touchY > x)) {
                touchEnd === null || touchEnd === void 0 ? void 0 : touchEnd();
                touched.value = false;
                touchHide.value = 0;
                return;
            }
            touchHide.value = vertical ? touchY : touchX;
        },
        handleTouchEnd() {
            if (touched.value) {
                touchEnd === null || touchEnd === void 0 ? void 0 : touchEnd();
            }
            if (touchHide.value > length) {
                hide();
            }
            touched.value = false;
            touchHide.value = 0;
        },
    };
}

export { useTouchHide };
