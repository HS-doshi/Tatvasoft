import React, { useState } from 'react'

const initState = ['Heet', 'Doshi']

export const ArrayUsestate = () => {

    const [persons, setPersons] = useState(initState)

    const handleClick = () => {
        // persons.push('Diya')
        // persons.push('Doshi')
        // setPersons(persons)
        const newPersons = [...persons]
        newPersons.push('Diya')
        newPersons.push('Sister')
        setPersons(newPersons)
    }
    console.log('Array UseState rendering!')
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            {
                persons.map(person => (
                    <div key={person}>{person}</div>
                ))
            }
        </div>
    )
}

export default ArrayUsestate