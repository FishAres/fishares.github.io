import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const items = ["Home", "Research", "CV", "Contact"];
  const item_divs = ["home", "research", "cv", "contact"];

  const renderItems = () => {
    return (
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex" }}>
        {items.map((item, index) => (
          <li key={index} style={{ margin: "0", padding: "14px 16px" }}>
            <a
              href={`#${item_divs[index]}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const renderIcons = () => {
    return (
      <div>
        <a href="https://github.com/FishAres">
          <FaGithub
            style={{ color: "white", fontSize: "20px", marginRight: "6px" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/aris-fiser/"
          style={{ color: "white", marginRight: "10px" }}
        >
          <FaLinkedin style={{ fontSize: "20px" }} />
        </a>
      </div>
    );
  };

  return (
    <nav
      style={{
        backgroundColor: "#333",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {renderItems()}
      {renderIcons()}
    </nav>
  );
};

export default Navbar;
