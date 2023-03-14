import React, { Component } from "react"

// function Title(props) {

//     return (
//         <>
//             <h1>Hello! {props.name} {props.surname}</h1>
//         </>
//     )
// }


// Destructor in Parameter!1.
// const Title = ({ name, surname }) => {
//     return (
//         <div>
//             <h1>
//                 Hello! {name}  {surname}
//             </h1>
//         </div>
//     )
// }
// export default Title

// Destructor in another way!2.

class Title extends Component {
    render() {

        const { name, surname } = this.props
        //  const {state1, state2} = this.state
        return (
            <div>
                <h1>
                    Hello I'm {name} {surname}!
                </h1>
                <h3>TatvaSoft Project : Week 1</h3>
                <p>This file is functional component & class component. </p>
                <h3>Here, it's rendering props react concept - Day 1 & 2</h3>

                <hr></hr>
            </div>
        )
    }
}
export default Title