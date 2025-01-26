import Song from "../components/Song";
import "./Album.css";

const ALBUM_SONGS = [
  {
    title: "DAIRY DREAMS",
    lyrics: [
      "In the depths of fermented night",
      "Where cultures dance in pale moonlight",
      "Bacterial symphonies grow",
      "In petri dishes down below",
      "",
      "Chorus:",
      "Dairy dreams in technicolor",
      "Floating through a sea of cream",
      "Microscopic revolution",
      "Nothing is quite what it seems",
    ],
  },
  {
    title: "CHEDDAR FEVER",
    lyrics: [
      "Got that cheddar fever running through my veins",
      "Sharp and tangy feelings driving me insane",
      "Aged for twelve long months in caves of stone",
      "Now this cheese has got a mind of its own",
      "",
      "Bridge:",
      "Crystalline structure",
      "Breaking down walls",
      "Protein chains dancing",
      "As empire falls",
    ],
  },
  {
    title: "PSYCHEDELIC YOGURT",
    lyrics: [
      "Swirling patterns in my bowl",
      "Probiotics take their toll",
      "Colors blend in cosmic dance",
      "Giving bacteria a chance",
      "",
      "Chorus:",
      "Psychedelic yogurt",
      "Taking me higher",
      "Fermented visions",
      "Setting my mind on fire",
    ],
  },
];

export default function Album() {
  return (
    <div className="album-page">
      <div className="album-header">
        <img
          src="/attack-of-the-milkworms.webp"
          alt="Attack of the Milkworms Album Cover"
          className="album-artwork"
        />
        <div className="album-details">
          <h1>ATTACK OF THE MILKWORMS</h1>
          <p className="album-meta">Released: January 2024</p>
          <p className="album-description">
            Our debut album, featuring an eclectic mix of psychedelic rock and
            dairy-inspired soundscapes.
          </p>
        </div>
      </div>

      <div className="song-list">
        {ALBUM_SONGS.map((song, index) => (
          <Song key={index} title={song.title} lyrics={song.lyrics} />
        ))}
      </div>
    </div>
  );
}
