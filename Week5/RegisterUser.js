import React, { useCallback, useState } from 'react'

function RegisterUser() {

    const [form, setForm] = useState({
        username: '',
        email: '',
        phone: '',
        dob: ''
    });

    const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        setForm(form => ({ ...form, [name]: value }))
    }, [])

    return (
        <div>
            <form>
                <label>
                    UserName :
                    <input type='text' value={form.username} name='username' onChange={handleChange} />
                </label>
                <label>
                    Email :
                    <input type='email' value={form.email} name='email' onChange={handleChange} />
                </label>
                <label>
                    Contact No :
                    <input type='tel' value={form.phone} name='phone' onChange={handleChange} />
                </label>
                <label>
                    Birth Date :
                    <input type='date' value={form.dob} name='dob' onChange={handleChange} />
                </label>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default RegisterUser