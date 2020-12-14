import React, { useState, useEffect} from 'react'

export default function CurrenciesDetailPage(props) {
    const [list, setList] = useState({})
    useEffect( () => {
        const id = props.match.params.id
        const url = `https://market-data-collector.firebaseio.com/market-collector/currencies/sek/${id}.json`
        
        fetch(url)
        .then(response => response.json())
        .then(data => setList(data))
    }, [])
  

    return (
        <div>
            <h2>Currencies detail page</h2>
            {Object.entries(list).map( (item, index) => {
                return <p key={index}>{item[0]} : {item[1]}</p>
            })}

        </div>
    )
}
