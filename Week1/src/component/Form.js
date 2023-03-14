import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            passWord: '',
            topic: 'react'
        }
    }

    handlerchange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handler = (event) => {
        this.setState({
            passWord: event.target.value
        })
    }
    handlecomment = (event) => {
        this.setState({
            Comment: event.target.value
        })
    }

    handletopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handlesubmit = (event) => {
        alert(`${this.state.userName} ${this.state.passWord} ${this.state.topic} is Submitted Successfully!!`)
        // event.preventDefault()
        // If we don't want to change the submit form then use prevent default function.
    }
    render() {

        const { username, comments, topic, password } = this.state
        return (
            < form onClick={this.handlesubmit} >

                <div>
                    <label>Username</label>
                    <input type='text' value={username} onChange={this.handlerchange} placeholder='Username'></input>

                </div>

                <label>password</label>
                <input type='password' value={password} onChange={this.handler} placeholder='password'></input>

                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handlecomment}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handletopic} >
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>

                <div>
                    <button value='button' >Submit</button>

                </div>
            </form >
        )
    }
}

export default Form