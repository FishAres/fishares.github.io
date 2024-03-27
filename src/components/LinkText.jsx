import React from "react";

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
