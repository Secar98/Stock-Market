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
        <div className="col-12">
            {api && Object.entries(api).map( (item, index) => {

                return <Link key={index} className="btn btn-secondary mb-2" to={`/Markets/${item[0]}`}>
                    {item[0]}
                </Link>
            })}
        </div>
    )
}
