import { Link } from "react-router-dom";
import { albums } from "../const";
import "./Discography.css";

export default function Discography() {
  return (
    <div className="discography-page">
      <h1 className="page-title">THE MUSIC</h1>

      <div className="intro">
        <p>
          The music of the Milkworms has grown organically down the years,
          between <Link to="/band">two guitarists</Link> with pretty different,
          but complementary, styles, who have been playing together for the best
          part of two decades.
        </p>
        <br />
        <p>
          Attack Of The Milkworms is our debut album, coming soon. It's the
          culmination of several years of casual jamming and songwriting,
          written and recorded in our home studios around our full time jobs and
          busy lives. Of the many, many songs we've written, these are the ones
          we've chosen to put together for our first album.
        </p>
        <br />
        <p>We're excited to share it with you.</p>
      </div>

      <div className="albums">
        {albums.map((album) => {
          const isUpcoming = new Date(album.releaseDate) > new Date();
          const formattedDate = new Date(album.releaseDate).toLocaleDateString(
            "en-GB",
            {
              year: "numeric",
              month: "long",
            }
          );

          return (
            <div key={album.id} className="album-entry">
              <img
                src={album.coverImage}
                alt={`${album.title} Album Cover`}
                className="album-cover"
              />
              <div className="album-info">
                <h2>{album.title}</h2>
                <p className="release-date">
                  {isUpcoming ? "Releasing" : "Released"}: {formattedDate}
                </p>
                <p className="album-description">{album.description}</p>
                <Link
                  to={`/discography/${album.id}`}
                  className="view-album-btn"
                >
                  {isUpcoming ? "VIEW PREVIEW" : "VIEW TRACKLIST"}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
