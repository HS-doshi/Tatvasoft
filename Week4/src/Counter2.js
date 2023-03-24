import React, { Component } from 'react'

class counter2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    // increment() {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    //     console.log(this.state.count)

    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }
    // decrement() {
    //     this.setState((prevState) => ({
    //         count: prevState.count - 1
    //     }))
    //     console.log(this.state.count)
    // }

    decrement() {
        this.setState({
            count: this.state.count - 1
        }, () => { console.log("callback Function!", this.state.count) })
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <div>
                    count - {this.state.count}
                </div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
            </div>
        )
    }
}


export default counter2