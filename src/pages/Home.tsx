import "./Home.css";

export default function Home() {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      {/* <section className="hero">
        <div className="hero-content">
          <h2>NEXT SHOW</h2>
          <div className="show-details">
            <p className="date">JUNE 15, 2026</p>
            <p className="venue">The Budokan</p>
            <p className="location">Tokyo, Japan</p>
            <button className="tickets-btn">GET TICKETS</button>
          </div>
        </div>
      </section> */}

      <section className="about">
        <h2>ATTACK OF THE MILKWORMS</h2>
        <p className="bio">
          There's something happening here...
          <br />
          What it is ain't exactly clear...
          <br />
          Brace yourself, for THE MILKWORMS are coming.
        </p>
      </section>

      <section className="latest-release">
        <h2>LATEST RELEASE</h2>
        <div className="album">
          <img
            src={`${base}attack-of-the-milkworms.webp`}
            alt="Attack of the Milkworms Album Cover"
            className="album-art"
          />
          <div className="album-info">
            <h3>"ATTACK OF THE MILKWORMS"</h3>
            <p>Coming soon...</p>
            {/* <button className="listen-btn">LISTEN NOW</button> */}
          </div>
        </div>
      </section>
    </>
  );
}
