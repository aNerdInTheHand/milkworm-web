import { useParams } from "react-router-dom";
import Song from "../components/Song";
import Countdown from "../components/Countdown";
import {
  albums,
  type Song as SongType,
  type Album as AlbumType,
} from "../const/index";
import "./Album.css";

export default function Album() {
  const { albumId } = useParams<{ albumId: string }>();
  const album = albums.find((a: AlbumType) => a.id === albumId);

  if (!album) {
    return <div className="album-page">Album not found</div>;
  }

  const isUpcoming = new Date(album.releaseDate) > new Date();
  const formattedDate = new Date(album.releaseDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="album-page">
      <div className="album-header">
        <img
          src={album.coverImage}
          alt={`${album.title} Album Cover`}
          className="album-artwork"
        />
        <div className="album-details">
          <h1>{album.title}</h1>
          <p className="album-meta">
            {isUpcoming ? "Releasing" : "Released"}: {formattedDate}
          </p>
          <p className="album-description">{album.description}</p>
        </div>
      </div>

      {isUpcoming && <Countdown releaseDate={album.releaseDate} />}

      {!isUpcoming && (
        <div className="song-list">
          {album.songs.map((song: SongType, index: number) => (
            <Song
              key={index}
              title={song.title}
              lyrics={song.lyrics}
              writtenBy={song.writtenBy}
            />
          ))}
        </div>
      )}
    </div>
  );
}
