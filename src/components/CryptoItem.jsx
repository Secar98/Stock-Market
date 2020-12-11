import React from 'react'
import { Link } from 'react-router-dom'

export default function CryptoItem({value}) {
    return (
        <div>
            <Link to={`/Crypto/${value.ticker}`}>
                {value.ticker}
            </Link>
        </div>
    )
}
