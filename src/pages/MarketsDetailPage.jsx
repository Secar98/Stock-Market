import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

/*
Takes props from routes in APP.js
useEffect => fetch
    URL takes ID from props.match.params.id

Converts object to array
map over array
    return link-tag to markets/marketsdetailspage/marketsstockdetailpage

*/

export default function MarketsDetailPage(props) {
    const [list, setList] = useState({})
    const id = props.match.params.id
    console.log(props);

    useEffect( () => {
        const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${id}.json` 

        fetch(url)
        .then(response => response.json())
        .then(data => setList(data))        

    }, [])
    console.log(list);
    return (
        <div>
            {list && Object.entries(list).map( (item, index) => {

                return <Link key={index} to={`/markets/${id}/${item[0]}`}>
                    {item[0]}
                </Link>
            })}
        </div>
    )
}
