import "./Song.css";

interface SongProps {
  title: string;
  lyrics: string[];
}

export default function Song({ title, lyrics }: SongProps) {
  return (
    <div className="song">
      <h3 className="song-title">{title}</h3>
      <div className="lyrics">
        {lyrics.map((verse, index) => (
          <p key={index} className="verse">
            {verse}
          </p>
        ))}
      </div>
    </div>
  );
}
