import React, { useState } from 'react'
import { MemoizedChildTwo } from './ChildTwo';

export const ParentTwo = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Heet');

    console.log("Parent Two Rendering!!")

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Best Logical React Developer!')}>Change Name</button>
            <MemoizedChildTwo name={name} />
        </div>
    )
}
