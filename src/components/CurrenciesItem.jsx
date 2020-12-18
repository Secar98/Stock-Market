import React from 'react'
import { Link } from 'react-router-dom'


import { BorderDiv, StyledBadge } from '../Styles/PageStyle'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons'


export default function CurrenciesItem({value}) {
    return (
        <BorderDiv className="col-3 m-4 p-4">
            <div>
                <Link  to={`/Currencies/${value.ticker}`}>
                <div className="text-center">{value.name}
                   <div className="row justify-content-center m-2">
                   <StyledBadge className="badge badge-secondary m-2 p-2 align-self-center"> {value.today > 0 ? <FontAwesomeIcon className="arrowup" icon={faArrowUp}/> 
                    : <FontAwesomeIcon className="arrowdown" icon={faArrowDown}/>} today:  {value.today}% </StyledBadge> <StyledBadge className="badge badge-secondary p-2 align-self-center"> price: {value.price}</StyledBadge> 
                   </div> 
                   </div>
                </Link>
            </div>
        </BorderDiv>
    )
}
