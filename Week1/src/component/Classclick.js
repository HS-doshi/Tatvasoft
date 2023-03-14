import React, { Component } from 'react'

class ClassClick extends Component {

    classcli() {
        <h3>It's ClassClick.</h3>
    }
    render() {
        return (
            <div>
                <button onClick={this.classcli}>click me!</button>
            </div>
        )
    }
}

export default ClassClick