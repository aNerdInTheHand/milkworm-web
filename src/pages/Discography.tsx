import { Link } from "react-router-dom";
import "./Discography.css";

export default function Discography() {
  return (
    <div className="discography-page">
      <h1 className="page-title">THE MUSIC</h1>

      <div className="intro">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          fermentum lacus, in fermentum lectus. Nulla facilisi. Proin vehicula
          ipsum ut lacus tincidunt, vel fermentum nisi faucibus. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae.
        </p>
      </div>

      <div className="albums">
        <div className="album-entry">
          <img
            src="/attack-of-the-milkworms.webp"
            alt="Attack of the Milkworms Album Cover"
            className="album-cover"
          />
          <div className="album-info">
            <h2>ATTACK OF THE MILKWORMS</h2>
            <p className="release-date">Released: January 2024</p>
            <p className="album-description">
              Our debut album, featuring an eclectic mix of psychedelic rock and
              dairy-inspired soundscapes.
            </p>
            <Link
              to="/discography/attack-of-the-milkworms"
              className="view-album-btn"
            >
              VIEW TRACKLIST
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
