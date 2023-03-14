import React from 'react'

function FunctionClick() {
    function clickHandler() {

        console.log("Button Clicked!")
        alert('Button Clicked!')

    }
    // It's function not a function call.
    return (
        <div>
            <h3><button onClick={clickHandler}>Click</button></h3>
        </div>
    )
}

export default FunctionClick