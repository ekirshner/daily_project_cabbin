// Always need this. Used to combine our reducer function with the initial
// state. 
import { createStore } from 'redux';

// Reducer (function)
// Immutability is extremely important in Redux; if you mutate the state object then things will likely
// break in hard-to-debug ways and will make Redux MUCH harder to use effectively.
//
// 'Mutate' is a fancy word for change. Don't change the state object directly.
//
// Three rules for mutations:
//  1. Primitives: don't modify them. Create a new object instead. Ex: state.gas-- is BAD
//  2. Objects: create a copy of the object and change the copy. Object.assign()
//  3. Arrays: don't push(), sort() or other mutable operations. concat() two arrays to add things
function reducer(state, action) {
    // nums.push(5);                       // no: mutable
    // const newNums = nums.concat([5])    // yes: immutable

    // Move in all four directions.
    if (action.type === 'MOVE') {
        let gasCost = 1;
        // const next = Object.assign({}, state); // copy properties of 'state' into a new object
        // next.gas--;
        // next.score++;
const updatedVisitedArr = state.visitedArr.map((position) => {
    const nextX = state.x + action.payload.x;
    const nextY = state.y + action.payload.y;

        if(position.x === nextX && position.y === nextY) {
            gasCost = 2;
        }
}) 

        // return next;
        return {
            gas: state.gas -  gasCost,
            score: state.score + 1,
            x: state.x + action.payload.x,
            y: state.y + action.payload.y,
            visitedArr: state.visitedArr.concat([{
                x: state.x,
                y: state.y
            }])
        };
    }

    return state;
}

// Store (object, createStore())
export const store = createStore(reducer, {
    gas: 25,
    score: 0,
    x: 1,
    y: 3,
    visitedArr: [],
});
