import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="app">
      <header className="header">
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
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="social-links">
          <a href="#" className="social-link">
            INSTAGRAM
          </a>
          <a href="#" className="social-link">
            SPOTIFY
          </a>
          <a href="#" className="social-link">
            BANDCAMP
          </a>
        </div>
      </footer>
    </div>
  );
}
