import React from 'react'
import CryptoItem from '../components/CryptoItem';

export default function CryptoPage({api}) {
  
    return (
        <>
            {api && Object.entries(api.usd).map( item => {
                const key = item[0]
                const value = item[1]
                return <CryptoItem key={key} value={value} />
            })}
        </>
    )
}
