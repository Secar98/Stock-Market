import React from 'react'
import CurrenciesItem from '../components/CurrenciesItem';

/*
Takes API from APP.JS and deconstructs

Converts API object to Array via Object.entries(variable/object)
Then maps over api.usd and returns CryptoiItem component
key == name of instrument
value == instrument object
*/

export default function CurrenciesPage({api}) {

    return (
        <div className="row mt-5 justify-content-center">
            {api && Object.entries(api.sek).map( item => {
                const key = item[0]
                const value = item[1]
                return <CurrenciesItem key={key} value={value} />
            })}
        </div>
    )
}
