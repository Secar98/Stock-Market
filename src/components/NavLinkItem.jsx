import React from 'react'
import { Link } from 'react-router-dom'
import { LinkStyle } from '../Styles/HomeStyled'

export default function NavLinkItem({to, text}) {
    return (
        <LinkStyle>
            <Link to={to}> {text} </Link>        
        </LinkStyle>
    )
}
