import { BaseUICustomElement } from '../base-component/custom-element';
import { ClassDescriptor, Constructor } from '../base-component/define';

export const CustomElement = (elementName: string, options?: ElementDefinitionOptions | undefined) => <T>(
    classOrDescriptor: Constructor<HTMLElement> | ClassDescriptor
) => {
    const { kind, elements } = classOrDescriptor as ClassDescriptor;

    return {
        kind,
        elements,
        finisher(TargetClass: BaseUICustomElement) {
            TargetClass.define(elementName, options);
        }
    };
};

export default CustomElement;
