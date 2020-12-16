import React from 'react'
import { Link } from 'react-router-dom'
import { BorderDiv } from '../Styles/PageStyle'

export default function CryptoItem({value}) {
    return (
        <BorderDiv className="col-2 m-4 p-4">
               
                    
                <Link to={`/Crypto/${value.ticker}`}>
                    {value.name}
                </Link>
               
              
        </BorderDiv>
    )
}
