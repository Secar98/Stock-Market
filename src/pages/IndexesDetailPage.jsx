import React, { useState, useEffect } from 'react'

/*
Takes props from routes in APP.js
useEffect => fetch
    URL takes ID from props.match.params.id

Converts object to array
map over array
    return p-tag with with array-content

*/

export default function IndexesDetailPage(props) {
    const [list, setList] = useState({})

    useEffect( () => {
        const id = props.match.params.id
        const url = `https://market-data-collector.firebaseio.com/market-collector/indexes/se/${id}.json`

        fetch(url)
        .then(response => response.json())
        .then(data => setList(data))
    }, [])

    return (
        <div>
            {Object.entries(list).map( (item, index) => {
                return <p key={index}>{item[0]} : {item[1]}</p>
            })}
        </div>
    )
}
