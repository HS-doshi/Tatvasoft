import React, { Component } from 'react'
import MemoCom from './MemoCom'
import Pure from './Pure'
import RegComp from './RegComp'

class ParentCom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Heet'
        }
    }
    componentDidMount = () => {
        setInterval(() => {
            this.setState({
                name: 'Heet'
            })
        }, 2000)
    }

    render() {
        console.log('***** Parent Component *****')
        return (
            <div>
                Parent Component
                <MemoCom name={this.state.name} />
                <RegComp name={this.state.name}></RegComp>
                <Pure name={this.state.name}></Pure>
            </div>
        )
    }
}

export default ParentCom