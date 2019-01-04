interface IError {
    originalError?: any;
}

function throwError(reason: string) {
    const newErr = new Error(reason) as IError;

    return (error: Error) => {
        newErr.originalError = error;
        throw newErr;
    };
}

export default throwError;
