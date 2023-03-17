import React, { Component } from 'react'

class NewCompo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Welcome Dear Heet! You are best react Developer!!',

            sub: 'Subscribe',
            count: 0
        }
    }
    styles = {
        fontStyle: 'italic',
        color: 'purple'
    };
    buttonChange = () => {
        this.setState({
            message: 'Hit the bell icon to never miss update!',
            sub: 'subscribed'
        });
    }
    updateClick = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.buttonChange}>{this.state.sub}</button>
                <button onClick={this.updateClick}>Clicked {count} times</button>
            </div>
        )

    }
}

export default NewCompo