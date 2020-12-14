import React, { useState, useEffect } from 'react'


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
            {Object.entries(list).map( item => {
                return <p>{item[0]} : {item[1]}</p>
            })}
        </div>
    )
}
