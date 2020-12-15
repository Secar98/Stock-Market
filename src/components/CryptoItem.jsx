import React from 'react'
import { Link } from 'react-router-dom'

export default function CryptoItem({value}) {
    return (
        <div className="row">
            <div>
                <Link className="btn btn-secondary mb-2" to={`/Crypto/${value.ticker}`}>
                    {value.name}
                </Link>
            </div>
        </div>
    )
}
