import { Link, Outlet } from "react-router-dom";
import MilkwormPeek from "./MilkwormPeek";
import "./Layout.css";

export default function Layout() {
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
            {/* <Link to="/discography" className="nav-link">
              THE MUSIC
            </Link> */}
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
            <p>Look out for socials coming soon...</p>
            {/* <a href="#" className="social-link">
              INSTAGRAM
            </a>
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
