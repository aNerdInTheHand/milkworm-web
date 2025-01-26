import { Link } from "react-router-dom";
import { albums } from "../const";
import "./Discography.css";

export default function Discography() {
  return (
    <div className="discography-page">
      <h1 className="page-title">THE MUSIC</h1>

      <div className="intro">
        <p>
          Step into our dairy-fueled sonic laboratory, where we craft
          mind-bending soundscapes that blur the lines between psychedelia and
          fermentation. Each album is a carefully cultured experiment in audio
          alchemy.
        </p>
      </div>

      <div className="albums">
        {albums.map((album) => {
          const isUpcoming = new Date(album.releaseDate) > new Date();
          const formattedDate = new Date(album.releaseDate).toLocaleDateString(
            "en-US",
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
