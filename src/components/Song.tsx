import { useState } from "react";
import "./Song.css";

interface SongProps {
  title: string;
  lyrics: string;
  writtenBy?: string;
  trackPosition: number;
}

export default function Song({
  title,
  lyrics,
  writtenBy,
  trackPosition,
}: SongProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="song">
      <div className="song-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="title-section">
          <h3 className="song-title">
            {trackPosition}) {title}
          </h3>
          {writtenBy && <p className="written-by">({writtenBy})</p>}
        </div>
        <button className={`expand-button ${isExpanded ? "expanded" : ""}`}>
          LYRICS {isExpanded ? "−" : "+"}
        </button>
      </div>
      {isExpanded && (
        <div className="lyrics">
          {lyrics.split("\n").map((line, index) => (
            <p key={index} className="verse">
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
