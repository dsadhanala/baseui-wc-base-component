function throwError(reason) {
    const newErr = new Error(reason);

    return (e) => {
        newErr.originalError = e;
        throw newErr;
    };
}

export default throwError;
