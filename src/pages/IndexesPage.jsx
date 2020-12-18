import React from 'react'
import IndexesItem from '../components/IndexesItem';

/*
Takes API from APP.JS and deconstructs

Converts API object to Array via Object.entries(variable/object)
Then maps over api.usd and returns CryptoiItem component
key == name of instrument
value == instrument object
*/

export default function IndexesPage({api}) {
   
    return (
        <div className="container">
            <ul className="m-2 list-group">
                {api && Object.entries(api.se).map( item => {
                    const key = item[0]
                    const value = item[1]
                    return <IndexesItem key={key} value={value} />
                })}
            </ul>
            
        </div>
    )
}
