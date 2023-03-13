import React from "react"

function Functionalprops(props) {
    return (
        <div>
            <h3>This is Functional Component</h3>
            <h2>Hello {props.name} from {props.place}! Best React Developer</h2>
        </div>
    )
}

export default Functionalprops