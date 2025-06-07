import "./Band.css";

export default function Band() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="band-page">
      <h1 className="band-title">THE BAND</h1>

      <div className="intro">
        <p>The Milkworms are a two-piece rock band from Nort East England.</p>
        <br />
        <p>
          We're a pair of (primarily) guitarists who've been playing together
          for the best part of two decades, across a few different bands.
        </p>
        <br />
        <p>
          The band doesn't have a lead and rhythm guitarist, we just each pick
          the parts we want to play on a song-by-song basis.
        </p>
        <br />
        <p>
          We've been discussing our influences recently, and it occurred to us
          that the artsts who have <i>influenced</i> us our sounds aren't
          necessarily just our <i>favourite</i> artists. With that in mind, you
          can see below our influences (what you might hear in our playing, or
          songwriting, or tonal choices), our favourite artists, and what we're
          listening to right now.
        </p>
      </div>

      <div className="members">
        <div className="member">
          <div
            className="member-image nick"
            style={{ backgroundImage: `url(${base}nick-milkworm.png)` }}
          ></div>
          <h2>NICK</h2>
          <p className="role">Guitar / Bass / Vocals / Production</p>
          <div className="bio">
            <span className="bio-title">Influences:</span> <br />
            <ul>
              <li>Eric Clapton</li>
              <li>Carlos Santana</li>
              <li>Joe Walsh</li>
              <li>Jimi Hendrix</li>
              <li>Pete Townshend</li>
            </ul>
            <span className="bio-title">Favourite Artists:</span> <br />
            <ul>
              <li>The Who</li>
              <li>Led Zeppelin</li>
              <li>The Beatles</li>
              <li>Deep Purple</li>
              <li>Hannah Wicklund</li>
            </ul>
            <span className="bio-title">Currently Listening To:</span> <br />
            <ul>
              <li>Jax Hollow</li>
              <li>Brad Paisley</li>
              <li>Jim Croce</li>
              <li>Eilen Jewell</li>
              <li>The Cadillac Three</li>
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
            <span className="bio-title">Influences:</span> <br />
            <ul>
              <li>Bon Jovi</li>
              <li>Def Leppard</li>
              <li>Sum 41</li>
              <li>Stevie Ray Vaughan</li>
              <li>Nickelback</li>
            </ul>
            <span className="bio-title">Favourite Artists:</span> <br />
            <ul>
              <li>Iron Maiden</li>
              <li>The Eagles</li>
              <li>Aerosmith</li>
              <li>Bon Jovi</li>
              <li>Def Leppard</li>
            </ul>
            <span className="bio-title">Currently Listening To:</span> <br />
            <ul>
              <li>The Commoners</li>
              <li>Greta Van Fleet</li>
              <li>Sam Fender</li>
              <li>The 1975</li>
              <li>Dave Hause</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
