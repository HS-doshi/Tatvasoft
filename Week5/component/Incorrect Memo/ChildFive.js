import React from 'react'

export const ChildFive = ({ name }) => {
    console.log('ChildFive Rendering!')
    return (
        <div>Hello! Heet {name} </div>
    )
}

export const MemoizedChildFive = React.memo(ChildFive)