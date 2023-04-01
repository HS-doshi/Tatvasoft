import React, { useState } from 'react'

function UserForm() {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')

    const submitHandler = e => {
        e.preventDefault();

        alert(` Hello! ${first} ${last}`)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name : </label>
                    <input type='text' onChange={e => setFirst(e.target.value)} value={first} />
                </div>
                <div>
                    <label>Last Name : </label>
                    <input type='text' onChange={e => setLast(e.target.value)} value={last} />
                </div>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default UserForm