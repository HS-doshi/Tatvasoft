import React, { useState, useMemo, useCallback } from 'react'
import { MemoizedChildFive } from './ChildFive'

export const ParentFour = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Heet')

    const person = {
        fname: 'Best',
        lname: 'React Developer'
    }
    const memoizedChildFive = useMemo(() => person, [])
    const HandleClick = () => { }

    const memoizedHandleclick = useCallback(HandleClick, [])
    console.log("ParentFour rendering!")

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Your are a Best React Developer! So your Starting Salary is 6.9LPA.')}>Change Name</button>
            {/* <MemoizedChildFive name={name} person={memoizedChildFive} /> */}
            <MemoizedChildFive name={name} HandleClick={memoizedHandleclick} />
        </div>
    )
}
