import React, { Component } from 'react'

class Pure extends Component {
    render() {
        console.log('***** Pure Component *****')
        return (
            <div>Pure Component  {this.props.name}
            </div>
        )
    }
}

export default Pure