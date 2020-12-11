import React, {useState, useEffect} from 'react'



export default function CryptoDetailPage(props) {
    const [list, setList] = useState({})
    useEffect( () => {
        const id = props.match.params.id
        const url =`https://market-data-collector.firebaseio.com/market-collector/crypto/usd/${id}.json`
        
        fetch(url)
        .then(response => response.json())
        .then(data => setList(data))
        
    }, [])
    console.log(Object.entries(list));

    return (
        <div>
            <h2>Crypto details page</h2>
            {Object.entries(list).map( item => {
                return <p>{item[0]} : {item[1]} </p>
            } )}
            
            {/* <p>{props.match.params.id}</p>
            <p>{list.link}</p>
            <p>{list.market}</p>
            <p>{list.name}</p>
            <p>{list.omni_ticker}</p>
            <p>{list.price}</p>
            <p>{list.source}</p>
            <p>{list.ticker}</p>
            <p>{list.today}</p> */}
        </div>
    )
}
