import { useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router";

// Exactly one of `to` (a route inside the site) or `link` (an external URL).
type LinkTextProps = { children: ReactNode } & (
  | { to: string; link?: never }
  | { link: string; to?: never }
);

const restStyle: CSSProperties = { textDecoration: "none", color: "inherit" };
const hoverStyle: CSSProperties = { textDecoration: "underline", color: "blue" };

export default function LinkText(props: LinkTextProps) {
  const [linkStyle, setLinkStyle] = useState<CSSProperties>(restStyle);

  const handleMouseOver = () => {
    setLinkStyle(hoverStyle);
  };

  const handleMouseOut = () => {
    setLinkStyle(restStyle);
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
