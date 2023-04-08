import React, { useState } from 'react'
import { MemoizedChildThree } from './ChildThree'
import { MemoizedChildFour } from './ChildFour'

export const ParentThree = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Heet')

    console.log("ParentThree Rendering!")
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Best React Developer!')}>Change Name </button>
            <MemoizedChildFour name={name} />
            <MemoizedChildThree name={name} >
                <strong>Hello Guys! I'm Heet</strong>
            </MemoizedChildThree>
        </div>
    )
}
