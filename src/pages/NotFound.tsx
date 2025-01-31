import { Link } from "react-router-dom";
import "./NotFound.css";

const base = import.meta.env.BASE_URL;
export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
      <div
        className="milkworm-jumpscare"
        style={{ backgroundImage: `url(${base}milkworm-jumpscare.png)` }}
      ></div>
      <p>Looks like this page has curdled and gone bad...</p>
      <Link to="/" className="home-link">
        Return Home
      </Link>
    </div>
  );
}
