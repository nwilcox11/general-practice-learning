/**
 * @param{Function} fn
 * @param{*}
 * @returns{Function}
 * 
 * Recieves a function to be invoked by returned function and a list of arguments to be passed to the passed function
 * Gathers passed args into array and spreads those args along with any new args over invoked function
 * **/
function partial(fn, ...initialArgs) {
    return function(...laterArgs) {
        return fn(...initialArgs, ...laterArgs)
    }
}

/**
 * @param{String} label
 * @param{*}
 * 
 * Recieves a label and an item to be logged.  
 * It Stringifies and logs to the console with 4 spaces formatting
 * **/

function logger(label, toBeLogged) {
    console.log(label, JSON.stringify(toBeLogged, null, 4));
}

/**
 * @param{Function}
 * @returns{Function}
 * 
 * Utility that wraps a function and ensures only one argument will pass through
 * A common example is when passing a function to the map ulility
 * Map passes a value, index and the array.  
 * We could use this helper in places where we only want the value passed
 * **/
function unary(fn) {
    return function(arg) {
        return fn(arg);
    }
}

/**
 * @param{*} value
 * @returns{*}
 * 
 * Utility accepts any value and returns the same value
 * Because js will coerce a value to true or false this can be used as the predicate in a filter
 * **/
function identity(value) {
    return value;
}

module.exports = {
    partial,
    logger,
    unary,
    identity
};
