import React from 'react'
import { Link } from 'react-router-dom'

export default function CurrenciesItem({value}) {
    return (
        <>
            <Link to={`/Currencies/${value.ticker}`}>
                    <li className="list-group-item">{value.name}<span className="badge badge-secondary ml-5">Price: {value.price} $ </span><span className="badge badge-secondary ml-5">Today: {value.today} {value.today > 0 ? "⬆" : "⬇"} </span></li>
            </Link>
        </>
        
    )
}
