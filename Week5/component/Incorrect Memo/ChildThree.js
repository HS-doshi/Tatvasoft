import React from 'react'

export const ChildThree = ({ children, name }) => {
    console.log('Child Three Rendering!');
    return (
        <div>{children} {name}</div>
    )
}


export const MemoizedChildThree = React.memo(ChildThree)