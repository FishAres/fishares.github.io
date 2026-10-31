import React from "react";
import { Link } from "react-router";

export default function LinkText(props) {
  const [linkStyle, setLinkStyle] = React.useState({
    textDecoration: "none",
    color: "inherit",
  });

  const handleMouseOver = () => {
    setLinkStyle({ textDecoration: "underline", color: "blue" });
  };

  const handleMouseOut = () => {
    setLinkStyle({ textDecoration: "none", color: "inherit" });
  };

  if (props.to) {
    return (
      <Link
        to={props.to}
        style={linkStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
        {props.children}
      </Link>
    );
  }

  return (
    <a
      href={props.link}
      style={linkStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      {props.children}
    </a>
  );
}
