import React, { useState } from 'react'

export const UseState = () => {

    const [count, setCount] = useState(0);

    console.log('UseState Render!')

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setCount(0)}>Count - 0</button>
            <button onClick={() => setCount(c => c + 5)}>Count - 5</button>
        </div>
    )
}
export default UseState