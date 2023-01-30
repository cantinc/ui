import { State } from 'watch-state';

const windowHeight = new State(window.innerHeight);
window.addEventListener('resize', () => {
    windowHeight.value = window.innerHeight;
});

export { windowHeight };
