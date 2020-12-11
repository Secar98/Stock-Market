import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NavLinkItem from './components/NavLinkItem'
import CryptoPage from './pages/CryptoPage'
import CurrenciesPage from './pages/CurrenciesPage'
import IndexesPage from './pages/IndexesPage'
import MarketsPage from './pages/MarketsPage'

function App() {
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
            <CryptoPage />
          </Route>
          <Route path="/Currencies">
            <CurrenciesPage />
          </Route>
          <Route path="/Indexes">
            <IndexesPage />
          </Route>
          <Route path="/Markets">
            <MarketsPage />
		      </Route>
          <Route path="/"></Route>
        </Switch>
    </div>
  );
}

export default App;
