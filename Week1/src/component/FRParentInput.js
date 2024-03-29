import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    clickHandler = () => {
        this.inputRef.current.focus()
    }


    render() {
        return (
            <div>
                <h2> DAY : 8</h2>
                <h3>Task 2 - React Refs with class component</h3>
                <FRInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput


