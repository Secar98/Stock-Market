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
            {Object.entries(list).map( (item, index) => {
                return <p key={index}>{item[0]} : {item[1]} </p>
            } )}
            
        </div>
    )
}
