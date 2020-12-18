import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BorderDiv} from "../Styles/PageStyle";
import { StyledBadge } from "../Styles/PageStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import boxicons from 'boxicons'
/*
Takes props from routes in APP.js
useEffect => fetch
    URL takes ID from props.match.params.id

Converts object to array
map over array
    return link-tag to markets/marketsdetailspage/marketsstockdetailpage

*/

export default function MarketsDetailPage(props) {
  const [list, setList] = useState(null);
  const id = props.match.params.id;
  console.log(props);

  useEffect(() => {
    const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${id}.json`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);
  console.log(list);
  return (
    <div className="row mt-5 justify-content-center">
      {list &&
        Object.entries(list).map((item, index) => {
          return (
            <>
              <BorderDiv className="col-3 m-4 p-4">
                <div className="text-center title">
                  <Link
                    key={index}
                    to={`/markets/${id}/${item[0]}`}
                    className="noborder"
                  >
                    <h4>{item[1].name}</h4>
                  </Link>
                  <div className="row justify-content-center m-2">
                    <StyledBadge className="badge badge-secondary m-2 p-2 align-self-center">
                      {" "}
                      {item[1].today > 0 ? (
                        <FontAwesomeIcon className="arrowup" icon={faArrowUp} />
                      ) : (
                        <FontAwesomeIcon
                          className="arrowdown"
                          icon={faArrowDown}
                        />
                      )}{" "}
                      today: {item[1].today}%{" "}
                    </StyledBadge>{" "}
                    <StyledBadge className="badge badge-secondary p-2 align-self-center">
                      {" "}
                      price: {item[1].price}
                    </StyledBadge>
                  </div>
                  <p className="nolink">{item[1].market}</p>
                </div>
              </BorderDiv>
            </>
          );
        })}
    </div>
  );
}
