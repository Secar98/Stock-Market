import React, { useState, useEffect } from 'react'

/*
Takes props from routes in APP.js
useEffect => fetch
    URL takes ID from props.match.params.id

Converts object to array
map over array
    return p-tag with array-content

*/

export default function MarketsStockDetailPage(props) {
    const [list, setList] = useState({})
    console.log(props);

    useEffect( () => {
        const id = props.match.params.id
        const id2 = props.match.params.id2
        const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${id}/${id2}.json`

        fetch(url)
        .then(response => response.json())
        .then(data => setList(data))
    }, [])

   list && console.log(list);
    return (
        <div>
         {list && Object.entries(list).map( (item, index) => {
             return <p key={index}> {item[0]} : {item[1]}</p>
         })}
        </div>
    )
}
