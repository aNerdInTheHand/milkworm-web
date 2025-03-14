import albums from "./albums";

export interface Song {
  title: string;
  lyrics: string;
  writtenBy?: string;
  trackPosition: number;
}

export interface Album {
  id: string;
  title: string;
  releaseDate: string; // ISO date string
  description: string;
  coverImage: string;
  songs: Song[];
  soundcloudLink: string;
}

export { albums };
