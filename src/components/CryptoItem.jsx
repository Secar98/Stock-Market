import React from "react";
import { Link } from "react-router-dom";
import { BorderDiv, StyledBadge } from "../Styles/PageStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function CryptoItem({ value }) {
  return (
    <BorderDiv className="col-3 m-4 p-4">
      <Link to={`/Crypto/${value.ticker}`}>
        <div className="text-center">
          <h4>{value.name}</h4>
          <div className="row justify-content-center m-2">
            <StyledBadge className="badge badge-secondary m-2 p-2 align-self-center">
              {" "}
              {value.today > 0 ? (
                <FontAwesomeIcon className="arrowup" icon={faArrowUp} />
              ) : (
                <FontAwesomeIcon className="arrowdown" icon={faArrowDown} />
              )}{" "}
              today: {value.today}%{" "}
            </StyledBadge>{" "}
            <StyledBadge className="badge badge-secondary p-2 align-self-center">
              {" "}
              price: {value.price}
            </StyledBadge>
          </div>
        </div>
      </Link>
    </BorderDiv>
  );
}
