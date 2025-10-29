import { useState, isValidElement } from "react";

export default function SkillCard({ title, desc }) {
  const [expanded, setExpanded] = useState(false);
  const isJSX = isValidElement(desc);

  // If it's a string, limit on mobile; JSX will just render directly
  const safeDesc =
    typeof desc === "string"
      ? desc
      : isJSX
      ? desc
      : String(desc || "");

  return (
    <>    
    <div className="card skill-card">
      <h3>{title || "Untitled Skill"}</h3>

      <p className={`desc ${expanded ? "expanded" : "collapsed"}`}>
        {safeDesc}
      </p>

      {/* Only show Read more button on mobile */}
      <button
        className="read-more"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Read less ▲" : "Read more ▼"}
      </button>
    </div>
    </>

  );
}
