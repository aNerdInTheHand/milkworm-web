import { Link, Outlet } from "react-router-dom";
import MilkwormPeek from "./MilkwormPeek";
import "./Layout.css";

export default function Layout() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="layout">
      <MilkwormPeek />
      <header className="header">
        <div className="content-container">
          <h1 className="band-name">
            <Link to="/" className="band-name-link">
              THE MILKWORMS
            </Link>
          </h1>
          <div className="tagline">Curdle Your World</div>
          <nav className="main-nav">
            <Link to="/" className="nav-link">
              HOME
            </Link>
            <Link to="/band" className="nav-link">
              THE BAND
            </Link>
            <Link to="/discography" className="nav-link">
              THE MUSIC
            </Link>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <div className="content-container">
          <div className="social-links">
            <a
              href="https://www.instagram.com/the_milkworms?igsh=dWh0cnVwcXprOTk3"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
              src={`${base}wormgram.png`}
              alt="Instagram"
              style={{ width: 20, height: 20, marginRight: 8, verticalAlign: "middle" }}
              />
              @THE_MILKWORMS
            </a>
            {/* 
            <a href="#" className="social-link">
              SPOTIFY
            </a>
            <a href="#" className="social-link">
              BANDCAMP
            </a> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
