import React, {useState, useEffect } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import NavLinkItem from './components/NavLinkItem'
import CryptoDetailPage from './pages/CryptoDetailPage'
import CryptoPage from './pages/CryptoPage'
import CurrenciesPage from './pages/CurrenciesPage'
import CurrenciesDetailPage from './pages/CurrenciesDetailPage'
import IndexesPage from './pages/IndexesPage'
import IndexesDetailPage from './pages/IndexesDetailPage'
import MarketsPage from './pages/MarketsPage'
import MarketsDetailPage from './pages/MarketsDetailPage'
import MarketsStockDetailPage from './pages/MarketsStockDetailPage'
import styled from 'styled-components'
import { Container } from './Styles/HomeStyled'
import { NavBar } from './Styles/HomeStyled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlobe, faStream, faCoins} from '@fortawesome/free-solid-svg-icons'
import {faBtc} from '@fortawesome/free-brands-svg-icons'


function App() {

  const [list, setList] = useState({})
   useEffect( () => {
    const url ="https://market-data-collector.firebaseio.com/market-collector.json"

    fetch(url)
    .then(response => response.json())
    .then(data => setList(data))

  }, [])

  return (
    <Container className="container-fluid">
    <NavBar className="navbar navbar-expand-xs p-4 mb-5" >
        <p className="nav-item mb-0">
          <NavLinkItem className="nav-link" to="/Crypto" text="Crypto" icon={faBtc} />
        </p>  
        <p className="nav-item mb-0">
          <NavLinkItem className="nav-link" to="/Currencies" text="Currencies" icon={faCoins} />
        </p>  
        <p className="nav-item mb-0">
          <NavLinkItem className="nav-link" to="/Indexes" text="Indexes" icon={faStream} />
         </p>  
        <p className="nav-item mb-0">
        
          <NavLinkItem className="nav-link" to="/Markets" text="Markets" icon={faGlobe}/>
        </p>  
    
      </NavBar>

        <Switch>
          <Route path="/Crypto/:id" component={CryptoDetailPage}/>
          <Route path="/Crypto">
            <CryptoPage api={list && list.crypto} />
          </Route>
          <Route path="/Currencies/:id" component={CurrenciesDetailPage} />
          <Route path="/Currencies">
            <CurrenciesPage api={list && list.currencies} />
          </Route>
          <Route path="/Indexes/:id" component={IndexesDetailPage} />
          <Route path="/Indexes">
            <IndexesPage api={list && list.indexes} />
          </Route>
          <Route path="/Markets/:id/:id2" component={MarketsStockDetailPage} />
          <Route path="/Markets/:id" component={MarketsDetailPage} />
          <Route path="/Markets">
            <MarketsPage api={list && list.markets} />
		      </Route>
          <Route path="/" exact></Route>
          <Route path="*"><Redirect to="/" /></Route>
        </Switch>
        
    </Container>
  );
}

export default App;
