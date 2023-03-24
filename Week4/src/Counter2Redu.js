import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondeCounter: 10
}
const reducer = (state, action) => {

    // It refer an object
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - 1 }
        case 'increment5':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement5':
            return { ...state, firstCounter: state.firstCounter - 5 }
        case 'increment2':
            return { ...state, secondeCounter: state.secondeCounter + action.value }
        case 'decrement2':
            return { ...state, secondeCounter: state.secondeCounter - 1 }
        case 'reset':
            return initialState
        default:
            return state
    }

}

function Counter2Redu() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            {/* convert here string action into object */}
            <div>First Counter : {count.firstCounter}</div>
            <div>second Counter : {count.secondeCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment5', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement5', value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>


            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment Counter 2</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement Counter 2</button>
        </div>
    )
}

export default Counter2Redu