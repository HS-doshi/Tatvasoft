import React, { useState } from 'react'
import { ParentOne } from './ParentOne'
import ChildOne from './ChildOne'

export const GrandParent = () => {

    const [newcount, setNewcount] = useState(0)

    return (
        <div>
            <button onClick={() => setNewcount(nc => nc + 1)}>GrandParent Count - {newcount}</button>

        </div>
    )
}
