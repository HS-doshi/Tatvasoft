import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentF extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (username) => {
                            return <div>Hello Guys! I'm learning {username}</div>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentF 