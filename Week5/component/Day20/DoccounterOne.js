import React, { useState } from 'react'
import UseDocumenttitle from '../../Hook/UseDocumenttitle'

function DoccounterOne() {

    const [count, setCount] = useState(0)


    // Here,  document title will update as we click on count button.

    UseDocumenttitle(count)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default DoccounterOne