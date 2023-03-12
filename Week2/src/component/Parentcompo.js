import React, { Component } from 'react'
import Childcompo from './Childcompo'

export class Parentcompo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: "Parents"
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from  ${childName}`)
    }

    render() {
        return (
            <div>
                <Childcompo greeetHandler={this.greetParent} />
            </div>
        )
    }
}

export default Parentcompo