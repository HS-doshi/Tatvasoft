import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: true
        }
    }
    render() {

        // 4th is shortcircuit operator!
        // return this.state.isLoggedin && <div>Hello Best React Logical Developer Heet! You're Starting salary is 6.8 LPA Congratulations in Tatvasoft!</div> || <div>Welcome Guest</div>


        // 3rd is ternary operator
        return (
            this.state.isLoggedin ?
                <div>Hello Heet</div> :
                <div>Welcome Guest</div>
        )


        // let message
        // 2nd approach of rendering!

        // if (this.state.isLoggedin) {
        //     message = <div>You are logged in!</div>
        // }
        // else {
        //     message = <div>Hello Guest</div>
        // }
        // return <div>{message}</div>

        // 1st Approach  rendering!
        // if (this.state.isLoggedin) {
        //     return (
        //         <div>Hello Best React Developer Heet!</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Hello Guest!</div>
        //     )
        // }

        // }
        // return (
        //     <div>Hello Heet!</div>
        // )

    }
}

export default UserGreeting