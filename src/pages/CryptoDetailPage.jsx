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
    console.log(list);

    return (
        <div>
            <p>{list.link}</p>
            <p>{list.market}</p>
            <p>{list.name}</p>
            <p>{list.omni_ticker}</p>
            <p>{list.price}</p>
            <p>{list.source}</p>
            <p>{list.ticker}</p>
            <p>{list.today}</p>
        </div>
    )
}
