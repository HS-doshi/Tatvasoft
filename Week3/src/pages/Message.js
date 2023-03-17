import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: "Hello Dear Heet! & Best react Developer"
        }
    }

    changeEvent() {
        this.setState({
            message: "Thank You For Your Joining in TatvaSoft! You are starting salary is 6.7LPA! Congratulations!!"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeEvent()}>Subscribe</button>
            </div>
        )
    }
}

export default Message
