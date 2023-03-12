import React, { Component } from 'react'

class Eventbind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Hello World!"
        }
        this.clickHandeler = this.clickHandeler.bind(this)
    }

    clickHandeler() {
        this.setState({
            message: "Goodbye!"
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandeler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandeler()}>Click</button> */}
                <button onClick={this.clickHandeler}>click!</button>
                {/* In 2nd approach () = parenthesis is required! */}

                {/* 3rd approach */}
                <h4>This is Eventbind Event.</h4>
                <h3>Task  1 & 2 - Day 5</h3>

                <h5>1. Binding in render - less performance</h5>
                <h5>2. aero function in render - easiest way</h5>
                <h5>3. Binding in class contructor - suggest this one - best option.</h5>

            </div>
        )
    }
}

export default Eventbind