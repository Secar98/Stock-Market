import React, {useState, useEffect} from 'react'

/*
Takes props from routes in APP.js
useEffect => fetch
    URL takes ID from props.match.params.id


*/

export default function CryptoDetailPage(props) {
    const [list, setList] = useState({})
    useEffect( () => {
        const id = props.match.params.id
        const url =`https://market-data-collector.firebaseio.com/market-collector/crypto/usd/${id}.json`
        
        fetch(url)
        .then(response => response.json())
        .then(data => setList(data))
        
    }, [])

    return (
        <div className="container">
            <h2>{list.name}</h2>
            {Object.entries(list).map( (item, index) => {
                return(
                    <ul className="list-group my-3">
                        <li className="list-group-item" key={index}>{item[0]} : {item[1]} </li>
                    </ul>
                )
                    
            } )}
            
        </div>
    )
}
