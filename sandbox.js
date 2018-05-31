const {partial, logger} = require('./helpers');


// compose moves rigth to left
function compose(fn1, fn2) {
    return function(x, y) {
        return fn2(fn1(x, y))
    }
}

const state = {
    name: 'Nick',
    age: 29,
    address: {
        street: '150 Buckminster Drive',
        state: 'MA',
        zip: '02062'
    }
}
Object.freeze(state);

function getState() {
    return state;
}

function setState(prevState, newState) {
    return {...prevState, ...newState}
}

function fnSetState(fn) {
    return fn(getState());
}

function updateAddress(streetName, stateName, state) {
    return {
        ...state,
        address: {
            ...state.address,
            street: streetName,
            state: stateName
        }
    }
}

function buildUpdateState(value) {
    return function updateState(state) {
        return {
            ...state,
            name: value
        }
    }
}


const newAddress = fnSetState(partial(updateAddress, '70 Timber Ridge', 'Ct'))
logger('PREVIOUS STATE--', state)
logger('NEW STATE--', newAddress)