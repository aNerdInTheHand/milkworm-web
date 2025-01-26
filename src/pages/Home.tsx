import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h2>NEXT SHOW</h2>
          <div className="show-details">
            <p className="date">JUNE 15, 2026</p>
            <p className="venue">The Budokan</p>
            <p className="location">Tokyo, Japan</p>
            <button className="tickets-btn">GET TICKETS</button>
          </div>
        </div>
      </section>

      <section className="about">
        <p className="bio">
          We're The Milkworms, a psychedelic rock band that crawled out of the
          underground music scene of South Shields like larvae emerging from
          spoiled dairy. Our sound? Imagine if Pink Floyd had a fever dream in a
          cheese cave.
        </p>
      </section>

      <section className="latest-release">
        <h2>LATEST RELEASE</h2>
        <div className="album">
          <img
            src="/attack-of-the-milkworms.webp"
            alt="Attack of the Milkworms Album Cover"
            className="album-art"
          />
          <div className="album-info">
            <h3>"ATTACK OF THE MILKWORMS"</h3>
            <p>Out Now on Spotify</p>
            <button className="listen-btn">LISTEN NOW</button>
          </div>
        </div>
      </section>
    </>
  );
}
