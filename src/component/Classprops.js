import React, { Component } from 'react'

class Classprops extends Component {
    render() {
        return (
            <div>Hello {this.props.name}! Are you from {this.props.place} He is a {this.props.profession} </div>

        )
    }
}

export default Classprops