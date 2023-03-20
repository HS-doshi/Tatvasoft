import React, { useState } from 'react'

function LoginForm() {

    const [password, setPassword] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [name, setName] = useState(' ');

    function handleSubmit(e) {
        if (!name || !email || !password) {
            alert("Please Enter all your details.")
        }
        else {
            e.preventDefault();
            alert(` Name is : ${name},
                Email is : ${email} ,
                Password is : ${password} `)

        }
    }

    return (
        <div>
            <h2>Day - 14 : Task 1</h2>
            <h3>Login Form </h3>
            <br />
            <form onSubmit={handleSubmit}>
                <br />
                <label>
                    Name :
                    <input type='text' value={name} onChange={e => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Email :
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    PassWord :
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm