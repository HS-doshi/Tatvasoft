import React, { useEffect, useState } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // useeffect is run after every run component.
    useEffect(() => {
        console.log('UseEffect - Updating Document Title')
        document.title = `You Clicked ${count} times.`
    }, [count])


    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>click {count} times </button>
        </div>
    )
}

export default HookCounterOne