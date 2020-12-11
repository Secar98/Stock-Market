import React, {useState, useEffect } from 'react'
import {Switch, Route} from 'react-router-dom'
import NavLinkItem from './components/NavLinkItem'
import CryptoPage from './pages/CryptoPage'
import CurrenciesPage from './pages/CurrenciesPage'
import IndexesPage from './pages/IndexesPage'
import MarketsPage from './pages/MarketsPage'

function App() {

  const [list, setList] = useState({})
   useEffect( () => {
    const url ="https://market-data-collector.firebaseio.com/market-collector.json"

    fetch(url)
    .then(response => response.json())
    .then(data => setList(data))

  }, [])

  return (
    <div className="container">
      <ul>
        <li>
          <NavLinkItem to="/" text="Home" />
        </li>
        <li>
          <NavLinkItem to="/Crypto" text="Crypto" />
        </li>  
        <li>
          <NavLinkItem to="/Currencies" text="Currencies" />
        </li>  
        <li>
          <NavLinkItem to="/Indexes" text="Indexes" />
         </li>  
        <li>
          <NavLinkItem to="/Markets" text="Markets" />
        </li>  
      </ul>
        <Switch>
          <Route path="/Crypto">
            <CryptoPage api={list && list.crypto}/>
          </Route>
          <Route path="/Currencies">
            <CurrenciesPage api={list && list.currencies}/>
          </Route>
          <Route path="/Indexes">
            <IndexesPage api={list && list.indexes}/>
          </Route>
          <Route path="/Markets">
            <MarketsPage api={list && list.markets}/>
		      </Route>
          <Route path="/"></Route>
        </Switch>
    </div>
  );
}

export default App;
