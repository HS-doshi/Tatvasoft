import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Heet'
        }
        console.log("LifeCycle A constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log('LifeCycle A Component Didmount')
    }

    shouldComponentUpdate() {
        console.log("LifeCycle A ShouldComponent Update")
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log("LifeCycle A getSnapshotBefore Update")
        return null
    }
    componentDidUpdate() {
        console.log('LifeCycle A component Didupdate')
    }
    changeState = () => {
        this.setState(
            {
                name: 'Heet is a Best React Developer!'
            }
        )
    }

    render() {
        console.log('LifeCycle A render')
        return (
            <div>
                <h2>Day : 8 - Component LifeCycle Method!</h2>
                <div>LifeCycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA