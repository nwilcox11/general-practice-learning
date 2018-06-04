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
 * @param{Function}
 * @returns {Function}
 * 
 * --lazy compose--
 * 
 * Composes a list of functions which will execute 'right to left' or inner to outer
 * Instead of calculating the result at each iteration and passing it along to the next function,
 * Lazy compose will run the reduce once at composition time and defer all calculations.
 * 
 * Each iteration of the reduction is a more wrapped function
 * When the final composed function that is returned from compose is called with one or more arguments
 * all the levels of the big nested function return by reduce are called from innermost to outermost
 * **/
function compose(...fns) {
    return fns.reduceRight((fn1, fn2) => {
        return function(...args) {
            return fn2(fn1(...args));
        }
    });
}
/**
 * Eager Compose
 * **/
function composeEager(...fns) {
    return function(result) {
        let funcs = [...fns];

        while(funcs.length > 0) {
            result = funcs.pop()(result);
        }
        return result;
    }
}
/**
 * @param{function}
 * @param{*}
 * @returns{Function}
 * 
 * Invokes partially applied function with partially applied args in the right most position
 * **/
function partialRight(fn, ...initialArgs) {
    return function(...laterArgs) {
        return fn(...laterArgs, ...initialArgs);
    }
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

module.exports = {
    partial,
    logger,
    unary,
    identity,
    partialRight,
    compose
};
