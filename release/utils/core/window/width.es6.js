import { State } from 'watch-state';

const windowWidth = new State(window.innerWidth);
window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
});

export { windowWidth };
