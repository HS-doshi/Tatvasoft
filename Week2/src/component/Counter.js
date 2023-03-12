import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        //     this.setState({
        //         count: this.state.count + 1
        //     }, () => { console.log('callback value', this.state.count) })
        //     console.log(this.state.count)
        // }
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }
    incrementFive() {
        this.increment()
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        }, () => { console.log('callback value : ', this.state.count) }
        )
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <div>
                    <h3>Counter</h3> {this.state.count}
                </div>
                <button onClick={() => this.incrementFive()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
                <div>  <h3>Day - 3 & 4</h3></div>
            </div>
        )
    }
}
export default Counter

// import React, { Component } from 'react'

// class Counter extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             count: 0
//         }
//     }
//     increment() {
//         this.setState({
//             count: this.state.count + 1
//         }, () => { console.log('Callback Func!', this.state.count) })
//         console.log(this.state.count)
//     }

//     render() {
//         return (
//             <div>
//                 <div>
//                     count - {this.state.count}
//                 </div>
//                 <button onClick={() => this.increment}>Increment</button>
//             </div>
//         )
//     }
// }

// export default Counter