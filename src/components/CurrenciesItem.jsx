import React from 'react'
import { Link } from 'react-router-dom'

export default function CurrenciesItem({value}) {
    return (
        <div className="col-3 border m-4 p-4">
            <div>
                <Link  to={`/Currencies/${value.ticker}`}>
                    {value.name}
                </Link>
            </div>
        </div>
    )
}
