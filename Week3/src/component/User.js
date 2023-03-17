import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                <h3>I'm Coming from render prop.</h3>
                {this.props.render(false)}
            </div>
        )
    }
}

export default User