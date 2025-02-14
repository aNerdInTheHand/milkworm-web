import "./Band.css";

export default function Band() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="band-page">
      <h1 className="band-title">THE MASTERMINDS</h1>

      <div className="members">
        <div className="member">
          <div
            className="member-image nick"
            style={{ backgroundImage: `url(${base}nick-milkworm.png)` }}
          ></div>
          <h2>NICK</h2>
          <p className="role">Guitar / Bass / Vocals / Production</p>
          <div className="bio">
            <span className="bio-title">Likes:</span> <br />
            <ul>
              <li>Strats</li>
              <li>Whammy Bars</li>
              <li>Cats</li>
            </ul>
            <span className="bio-title">Dislikes:</span> <br />
            <ul>
              <li>Major chords</li>
              <li>Or is it minor chords..?</li>
            </ul>
          </div>
        </div>

        <div className="member">
          <div
            className="member-image matthew"
            style={{ backgroundImage: `url(${base}matthew-milkworm.png)` }}
          ></div>
          <h2>MATTHEW</h2>
          <p className="role">Guitar / Bass / Vocals / Production</p>
          <div className="bio">
            <span className="bio-title">Likes:</span> <br />
            <ul>
              <li>Vocal Saturation</li>
              <li>Toms</li>
              <li>Going fast</li>
            </ul>
            <span className="bio-title">Dislikes:</span> <br />
            <ul>
              <li>Bm7</li>
              <li>Snakes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
