import Markdown from "react-markdown";
import cv from "../cv.md?raw";
import "./Resume.css";

// Entry headings end in " | <dates>"; split off the dates so they sit on the right.
const EntryHeading = ({ children }) => {
  const parts = [].concat(children);
  const last = parts[parts.length - 1];
  const cut = typeof last === "string" ? last.lastIndexOf(" | ") : -1;
  if (cut === -1) return <h3>{children}</h3>;

  return (
    <h3>
      <span>
        {parts.slice(0, -1)}
        {last.slice(0, cut)}
      </span>
      <span className="cv-dates">{last.slice(cut + 3)}</span>
    </h3>
  );
};

const Resume = () => {
  return (
    <div id="cv" className="cv">
      <Markdown components={{ h3: EntryHeading }}>{cv}</Markdown>
    </div>
  );
};

export default Resume;
