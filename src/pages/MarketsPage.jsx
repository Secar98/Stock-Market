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
        <div className="row mt-5 justify-content-center">
            {api && Object.entries(api).map( (item, index) => {

                return <Link className="col-3 border m-4 p-4" key={index} to={`/Markets/${item[0]}`}>
                    {item[0]}
                </Link>
            })}
        </div>
    )
}
