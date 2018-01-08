export default function (reason) {
    const newErr = new Error(reason);

    return (e) => {
        newErr.originalError = e;
        throw newErr;
    };
}
