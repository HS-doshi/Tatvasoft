import { useEffect } from 'react'

function UseDocumenttitle(count) {

    useEffect(() => {
        document.title = `Count - ${count}`
    }, [count])
}

export default UseDocumenttitle