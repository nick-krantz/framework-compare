import { SpotifyExternalURL } from "./SpotifyExternalURL";
import { SpotifyImage } from "./SpotifyImage";

export type Artist = {
  external_urls: SpotifyExternalURL[];

  followers: {
    /** This will always be set to null, as the Web API does not support it at the moment. */
    href: null;
    /** The total number of followers. */
    total: number;
  }[];

  /** A list of the genres the artist is associated with.If not yet classified, the array is empty. */
  genres: string[];

  /** A link to the Web API endpoint for this artist. */
  href: string;

  /**
   * The [Spotify user
   * ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) for the artist.
   */
  id: string;

  /** The artist's profile image. */
  images: SpotifyImage[];

  /** The name of the artist. */
  name: string;

  /**
   * The popularity of the artist.The value will be between 0 and 100, with 100 being the most
   * popular.The artist's popularity is calculated from the popularity of all the artist's tracks.
   */
  popularity: number;

  /** The object type: artist */
  type: "artist";

  /**
   * The [Spotify URI](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
   * for the artist.
   */
  uri: string;
};
