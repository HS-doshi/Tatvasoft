import React, { Component } from 'react'
import axios from 'axios';
import UserDetail from './UserDetai';

class UserChange extends Component {

    constructor(props) {
        super(props)

        this.state = {
            UserChange: []
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            this.setState({ UserChange: response.data });
        });
    }
    render() {
        return (
            <div>
                <h3>Day - 15 : Task</h3>
                {this.state.UserChange.map((user) => (
                    <UserDetail user={user} key={user.id} />
                ))}
            </div>
        )
    }
}

export default UserChange