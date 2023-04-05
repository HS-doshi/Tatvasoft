import React, { useState } from 'react'

const initState = {
    fname: 'Heet',
    lname: 'Doshi'
}

export const ObjectState = () => {

    const [person, setPerson] = useState(initState)

    const changeName = () => {
        //     person.fname = 'Diya'
        //     person.lname = 'Doshi'
        //     setPerson(person)
        // }
        const newPerson = { ...person }
        newPerson.fname = 'Heet'
        newPerson.lname = 'Doshi'
        setPerson(newPerson)
    }

    console.log('Object State!!')

    return (
        <div>
            <button onClick={changeName}>{person.fname} {person.lname}</button>
        </div>
    )
}
export default ObjectState
