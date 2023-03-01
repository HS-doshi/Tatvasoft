import React from 'react'

function Childcompo(props) {
    return (
        <div>
            <button onClick={() => props.greeetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default Childcompo