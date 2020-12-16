import React from 'react'
import { Link } from 'react-router-dom'
import { BorderDiv } from '../Styles/PageStyle'

export default function CurrenciesItem({value}) {
    return (
        <BorderDiv className="col-2 m-4 p-4">
            <div>
                <Link  to={`/Currencies/${value.ticker}`}>
                    {value.name}
                </Link>
            </div>
        </BorderDiv>
    )
}
