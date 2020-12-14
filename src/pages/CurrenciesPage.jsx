import React from 'react'
import CurrenciesItem from '../components/CurrenciesItem';

export default function CurrenciesPage({api}) {

    return (
        <div>
            {api && Object.entries(api.sek).map( item => {
                const key = item[0]
                const value = item[1]
                return <CurrenciesItem key={key} value={value} />
            })}
        </div>
    )
}
