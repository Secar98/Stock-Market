import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { LinkStyle } from '../Styles/HomeStyled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlobe, faStream, faCoins} from '@fortawesome/free-solid-svg-icons'
import {faBtc} from '@fortawesome/free-brands-svg-icons'




export default function NavLinkItem({to, text, icon}) {

   function HandleOnClick(){
     
    }

    /*useEffect(()=> {
        Icons();
    },[])
    function Icons (){
       if (to === "/Crypto"){
           icon = iconCrypto;
       }
      if (to ==="/Currencies"){
           icon = iconCurrency
       }
      if (to ==="/Indexes"){
           icon=iconIndex
       }
      if (to ==="/Markets"){
          icon=iconMarket
      }*/

       
        
    
    return (
        <LinkStyle>
            <Link onClick={HandleOnClick} to={to}> <FontAwesomeIcon icon={icon} /> {text} </Link>        
        </LinkStyle>
    )
}
