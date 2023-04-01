import { useState } from "react";

function UseCount(initialState = 0, about) {

    const [count, setCount] = useState(initialState, about);

    const increment = () => {
        setCount(count + about)
    }
    const decrement = () => {
        setCount(count - about)
    }
    const reset = () => {
        setCount(initialState)
    }
    return [count, increment, decrement, reset];
}

export default UseCount