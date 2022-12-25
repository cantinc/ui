import { useChildren } from '@innet/jsx';

function useChildrenProvider() {
    const children = useChildren();
    return (element) => {
        if (children) {
            element.children = children;
        }
        return element;
    };
}

export { useChildrenProvider };
