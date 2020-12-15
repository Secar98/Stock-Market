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

        <div className="card mx-auto" style={{width: "18rem"}}>
            <div className="card-body">
                
                <h3 className="card-title">{list.name}</h3>
                <div className="card-text">
                    <p> market: {list.market}</p>
                    <p> today: {list.today}</p>
                    <p> price: {list.price}</p>
                </div>
            </div>
           { /*{Object.entries(list).map( (item, index) => {
                return <div className="card-text" key={index}>{item[0]} : {item[1]} </div>
            } )}
        */}
        </div>
    )
}
