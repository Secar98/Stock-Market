import React, { useState, useEffect} from 'react'

export default function CurrenciesDetailPage(props) {
    const [list, setList] = useState({})
    useEffect( () => {
        const id = props.match.params.id
        const url = `https://market-data-collector.firebaseio.com/market-collector/currencies/sek/${id}.json`
        
        fetch(url)
        .then(response => response.json())
        .then(data => setList(data))
    })
  

    return (
        <div>
            <h2>Currencies detail page</h2>
            {Object.entries(list).map( (item) => {
                return <p>{item[0]} : {item[1]}</p>
            })}


            {/* <p>{list.link}</p>
            <p>{list.market}</p>
            <p>{list.mtd}</p>
            <p>{list.omni_ticker}</p>
            <p>{list.price}</p>
            <p>{list.source}</p>
            <p>{list.today}</p>
            <p>{list.w1}</p>
            <p>{list.y1}</p>
            <p>{list.y3}</p>
            <p>{list.y5}</p>
            <p>{list.ytd}</p> */}
        </div>
    )
}
