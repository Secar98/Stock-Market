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
    </div>
  );
}

export default App;
