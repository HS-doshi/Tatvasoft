import React, { useState } from 'react'
import UseCount from '../../Hook/UseCount'

function Counter2() {

    const [count, increment, decrement, reset] = UseCount(0, 2)

    return (
        <div>
            <h1> Count  - {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter2