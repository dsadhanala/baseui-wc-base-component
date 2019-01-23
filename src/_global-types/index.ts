export type attrType = string | number | boolean | {} | [];

export interface ReflectedAttrToProps {
    [key: string]: {
        type: attrType;
        observe?: boolean;
        require?: boolean;
    };
}

// webpack feature flags
export declare var DEV_FEATURE: boolean;
