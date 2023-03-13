import React, { Component } from 'react'

export class LifecycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Heet'
        }
        console.log("LifeCycle B constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleB getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log('LifeCycle B Component Didmount')
    }


    shouldComponentUpdate() {
        console.log("LifeCycle B ShouldComponent Update")
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log("LifeCycle B getSnapshotBefore Update")
        return null
    }
    componentDidUpdate() {
        console.log('LifeCycle B component Didupdate')
    }


    render() {
        console.log('LifeCycle B render')
        return (
            <div>LifeCycle B</div>
        )
    }
}

export default LifecycleB