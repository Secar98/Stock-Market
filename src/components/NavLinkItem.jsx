import React from "react";
import { Link } from "react-router-dom";
import { LinkStyle } from "../Styles/HomeStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavLinkItem({ to, text, icon }) {
  return (
    <LinkStyle>
      <Link to={to}>
        {" "}
        <FontAwesomeIcon icon={icon} /> {text}{" "}
      </Link>
    </LinkStyle>
  );
}
