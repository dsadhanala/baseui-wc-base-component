/**
 * Helper to mount the element on the document to async render and validate tests
 * @param {HTMLElement} component CustomElement instance
 */
export function mount(component: HTMLElement): Promise<void> {
    const whenResolved = async (resolve: () => void) => {
        document.body.appendChild(component);
        requestAnimationFrame(() => Promise.resolve().then(resolve));
    };

    return new Promise(whenResolved);
}

export default mount;
