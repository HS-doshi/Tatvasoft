import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {

    const [display, setDisplay] = useState(true)
    return (
        <div>
            <h3>Day - 16 - Using Use-effect as lifecycle Events</h3>
            <button onClick={() => setDisplay(!display)}>Toogle Display</button>
            {display && <HookMouse />}
        </div>
    )
}

export default MouseContainer