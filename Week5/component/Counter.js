import React, { useState, useMemo } from 'react'

function Counter() {

    const [counterone, setCounterone] = useState(0)
    const [countertwo, setCountertwo] = useState(0)

    const incrementOne = () => {
        setCounterone(counterone + 1)
    }
    const incrementTwo = () => {
        setCountertwo(countertwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return counterone % 2 === 0
    }, [counterone])


    return (
        <div>
            <div>
                <button onClick={incrementOne}>Increment One - {counterone}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Increment Two - {countertwo}</button>
            </div>
        </div>
    )
}

export default React.memo(Counter)