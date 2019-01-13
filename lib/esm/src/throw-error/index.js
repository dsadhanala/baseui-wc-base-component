function throwError(reason) {
    var newErr = new Error(reason);
    return function (error) {
        newErr.originalError = error;
        throw newErr;
    };
}
export default throwError;
//# sourceMappingURL=index.js.map