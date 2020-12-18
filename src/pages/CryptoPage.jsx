import React from 'react'
import CryptoItem from '../components/CryptoItem';

/*
Takes API from APP.JS and deconstructs

Converts API object to Array via Object.entries(variable/object)
Then maps over api.usd and returns CryptoiItem component
key == name of instrument
value == instrument object
*/

export default function CryptoPage({api}) {
  
    return (
        <div className="container">
            <ul className="m-2 list-group">
                {api && Object.entries(api.usd).map( item => {
                    const key = item[0]
                    const value = item[1]
                    return <CryptoItem key={key} value={value} />
                })}
            </ul>
        </div>
    )
}
