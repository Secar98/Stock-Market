import React from 'react'
import { Link } from 'react-router-dom'

/*
Takes API from APP.JS and deconstructs

Converts API object to Array via Object.entries(variable/object)
Then maps over api.usd and returns Link to detail page
index == Array with 2 indexpositions

key == index 
item[0] == Name of specific stock market
*/

export default function MarketsPage({api}) {

    return (
        <div className="container">
            {api && Object.entries(api).map( (item, index) => {
                return <Link key={index} to={`/Markets/${item[0]}`}>
                    <ul className="m-2 list-group">
                        <li className="list-group-item">
                            {item[0]}
                        </li>
                    </ul>
                </Link>
            })}
        </div>
    )
}
