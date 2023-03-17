import React, { Component } from 'react'
import './styless.css'
class Form1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }
    }
    handleUsernamechange = (event) => {
        this.setState({
            username: event.target.value
            // password: event.target.value
        })
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username
            } ${this.state.password} ${this.state.email} ${this.state.topic} `)
        event.preventDefault()
    }

    render() {
        return (
            <div className='background' >

                <form onSubmit={this.handleSubmit} >
                    <h1>Day 7 : Task</h1>
                    <h3>Login Form</h3>
                    <div>
                        <label >UserName : </label>
                        <input type='text' value={this.state.username} onChange={this.handleUsernamechange}></input>

                    </div>
                    <div>
                        <label>PassWord : </label>
                        <input type='password' value={this.state.password} onChange={this.handlePasswordChange}></input>

                    </div>

                    <div>
                        <label>Email : </label>
                        <input type='email' value={this.state.email} onChange={this.handleEmailChange}></input>
                    </div>
                    <div>
                        <label>Topic : </label>
                        <select value={this.state.topic} onChange={this.handleTopicChange}>
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                            <option value='vue'>Vue</option>
                        </select>
                    </div>
                    <button type='submit' onChange={this.handleSubmit}>Submit</button>
                </form>

            </div>
        )
    }
}

export default Form1