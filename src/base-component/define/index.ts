export type Constructor<T> = new (...args: any[]) => T;

export interface ClassDescriptor {
    kind: 'class';
    elements: ClassElement[];
    finisher?: <T>(clazz: Constructor<T>) => undefined | Constructor<T>;
}

export interface ClassElement {
    kind: 'field' | 'method';
    key: PropertyKey;
    placement: 'static' | 'prototype' | 'own';
    initializer?: () => void;
    extras?: ClassElement[];
    finisher?: <T>(clazz: Constructor<T>) => undefined | Constructor<T>;
    descriptor?: PropertyDescriptor;
}

export const define = (
    elementName: string,
    TargetClass: Constructor<HTMLElement>,
    options?: ElementDefinitionOptions | undefined
): void => {
    const { customElements } = window;
    const isElementExist = customElements.get(elementName);

    if (isElementExist) return;

    customElements.define(elementName, TargetClass, options);
};

export default define;
