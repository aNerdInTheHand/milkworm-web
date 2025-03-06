import { useState, useEffect, useCallback } from "react";
import "./RandomLyrics.css";

type LyricSnippet = {
  lines: string[];
  songTitle: string;
};

type RandomLyricsProps = {
  album: {
    songs: {
      title: string;
      previewLyrics: string;
    }[];
  };
};

export default function RandomLyrics({ album }: RandomLyricsProps) {
  const [currentSnippet, setCurrentSnippet] = useState<LyricSnippet | null>(
    null
  );
  const [isVisible, setIsVisible] = useState(false);

  const getRandomSnippet = useCallback((): LyricSnippet => {
    const randomSongIndex = Math.floor(Math.random() * album.songs.length);
    const song = album.songs[randomSongIndex];

    const lines =
      song.previewLyrics[Math.floor(Math.random() * song.previewLyrics.length)];

    return {
      lines: lines.split("\n"),
      songTitle: song.title,
    };
  }, [album]);

  useEffect(() => {
    // Initial snippet
    setCurrentSnippet(getRandomSnippet());
    setIsVisible(true);

    // Set up the interval for changing snippets
    const intervalId = setInterval(() => {
      // First fade out
      setIsVisible(false);

      // After fade out completes, change the snippet and fade in
      setTimeout(() => {
        setCurrentSnippet(getRandomSnippet());
        setIsVisible(true);
      }, 3000); // Match this with the CSS transition time
    }, 8000); // Change every 5 seconds

    return () => clearInterval(intervalId);
  }, [album, getRandomSnippet]);

  if (!currentSnippet) return null;

  return (
    <div className={`random-lyrics ${isVisible ? "visible" : ""}`}>
      <div className="lyrics-content">
        {currentSnippet.lines.map((line, index) => (
          <p key={index} className="lyric-line">
            {line}
          </p>
        ))}
      </div>
      <div className="song-title">— {currentSnippet.songTitle}</div>
    </div>
  );
}
