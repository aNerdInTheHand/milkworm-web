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
        <h2>ATTACK OF THE MILKWORMS Reviews</h2>
        <p className="bio">
          <em>
            You've cornered the gap in the market of having worms wearing hats
            appear from the side of the screen
          </em>{" "}
          - Ali H
          <br />
          <br />
          <em>
            I don't think other people in the library would appreciate me
            blasting ATTACK OF THE MILKWORMS
          </em>{" "}
          - Helen K
          <br />
          <br />
          <em>Get in.</em> - Anth U
        </p>
      </section>

      <section className="latest-release">
        <h2>LATEST RELEASE</h2>
        <div className="album">
          <a href="/#/discography/attack-of-the-milkworms">
            <img
              src={`${base}attack-of-the-milkworms.webp`}
              alt="Attack of the Milkworms Album Cover"
              className="album-art"
            />
          </a>
          <div className="album-info">
            <h3>"ATTACK OF THE MILKWORMS"</h3>
            <p>Listen now on all your favourite streaming services</p>
            {/* <button className="listen-btn">LISTEN NOW</button> */}
            {/* update to spotify link */}
          </div>
        </div>
      </section>
    </>
  );
}
