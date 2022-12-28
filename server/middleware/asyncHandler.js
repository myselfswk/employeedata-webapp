
// const with middleware function and arguments
const asyncHandler = (fn) => async (...args) => {
    try {
        await fn(...args);
    } catch (error) {
        console.log(error);
    }
}

module.exports = asyncHandler;