import { State } from 'watch-state';

const scrollPosition = new State(window.scrollY);
const scrollPositionListener = () => {
    scrollPosition.value = window.scrollY;
};
window.addEventListener('scroll', scrollPositionListener, { capture: false, passive: true });

export { scrollPosition, scrollPositionListener };
