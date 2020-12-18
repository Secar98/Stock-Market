import React, { useState, useEffect } from "react";
import {StyledCard} from '../Styles/PageStyle'
import boxicons from 'boxicons'
/*
Takes props from routes in APP.js
useEffect => fetch
    URL takes ID from props.match.params.id

Converts object to array
map over array
    return p-tag with with array-content

*/

export default function IndexesDetailPage(props) {
  const [list, setList] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    const url = `https://market-data-collector.firebaseio.com/market-collector/indexes/se/${id}.json`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

 
  return (
    <StyledCard className="card mx-auto" style={{ width: "18rem" }}>
       {!list ? (
        <box-icon name="loader" animation="spin" size="lg"></box-icon>
      ) : (
        <div className="card-body">
          <h3 className="card-title">{list.name}</h3>
          <div className="card-text">
          <p> today: {list.today}%</p>
            <p> w1: {list.w1}%</p>
            <p> y3: {list.y3}%</p>
            <p> y5: {list.y5}%</p>
            <p> mtd: {list.mtd}%</p>
            <p> ytd: {list.ytd}%</p>
            <p> market: {list.market}</p>
            <p> price: {list.price}</p>
          </div>
        </div>
      )}
      {/*Object.entries(list).map( (item, index) => {
                return <p key={index}>{item[0]} : {item[1]}</p>
            })*/}
    </StyledCard>
  );
}
