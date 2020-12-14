import React, { useState, useEffect } from 'react'

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
    })

   list && console.log(list);
    return (
        <div>
         {list && Object.entries(list).map( item => {
             return <p>{item[0]} : {item[1]}</p>
         })}
        </div>
    )
}
