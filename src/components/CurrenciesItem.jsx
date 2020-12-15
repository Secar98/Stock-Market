import React from 'react'
import { Link } from 'react-router-dom'

export default function CurrenciesItem({value}) {
    return (
        <>
            <Link to={`/Currencies/${value.ticker}`}>
                <ul className="m-2 list-group">
                    <li className="list-group-item">{value.name}<span className="badge badge-secondary ml-5">Price: {value.price} {Math.sign(value.price) > 0 ? "⬆" : "⬇"} </span><span className="badge badge-secondary ml-5">Today: {value.today} {Math.sign(value.today) > 0 ? "⬆" : "⬇"} </span></li>
                </ul>
            </Link>
        </>
        
    )
}
