import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Component } from 'react'

function DataFetching1() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(' ')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(
                response => {
                    setLoading(false)
                    setPost(response.data)
                    setError('')
                }
            )
            .catch(
                error => {
                    setLoading(false)
                    setPost({})
                    setError('Something went wrong!')
                }
            )

    }, [])

    const make = 'Ford';
    const model = 'Mustang';
    const car = { make, model };
    console.log(car);

    return (
        <div>
            <h3>API fetching data using useState.</h3>
            {loading ? 'Loading' : post.title}
            {error ? error : null}


            {/* const make = 'Ford';
            const model = 'Mustang';
            const car = {make, model};
            console.log(car); */}


        </div>
    )
}

export default DataFetching1