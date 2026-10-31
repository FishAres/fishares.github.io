import type { ReactNode } from "react";
import Markdown, { type Components } from "react-markdown";
import cv from "../cv.md?raw";
import "./Resume.css";

// Entry headings end in " | <dates>"; split off the dates so they sit on the right.
const EntryHeading: Components["h3"] = ({ children }) => {
  const parts: ReactNode[] = Array.isArray(children) ? children : [children];
  const last = parts[parts.length - 1];
  if (typeof last !== "string") return <h3>{children}</h3>;

  const cut = last.lastIndexOf(" | ");
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
