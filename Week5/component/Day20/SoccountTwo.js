import React, { useState } from 'react'
import UseDocumenttitle from '../../Hook/UseDocumenttitle'

function SoccountTwo() {

    const [count, setCount] = useState(0)

    UseDocumenttitle(count);

    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>Count - {count}</button>
        </div>
    )
}

export default SoccountTwo