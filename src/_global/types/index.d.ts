export type attrType = string | number | boolean | {} | [];

export interface ReflectedAttrToProps {
    [key: string]: {
        type: attrType;
        observe?: boolean;
        require?: boolean;
    };
}
