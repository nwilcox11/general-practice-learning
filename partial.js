/**
 * @param{Function} fn
 * @param{*} ...value
 * @returns{Function}
 * 
 * recieves a function to be invoked by returned function and a list of arguments to be passed to the passed function
 * Gathers passed args into array and spreads those args along with any new args over invoked function
 * **/
function partial(fn, ...initialArgs) {
    return function(...laterArgs) {
        return fn(...initialArgs, ...laterArgs)
    }
}

module.exports = partial;
