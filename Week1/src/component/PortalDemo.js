import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <div>
            <h1>
                Portable Demo
            </h1>
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo