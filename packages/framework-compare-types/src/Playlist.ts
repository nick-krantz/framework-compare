import { SpotifyExternalURL } from "./SpotifyExternalURL";
import { SpotifyImage } from "./SpotifyImage";
import { User } from "./User";

export type GetPlaylistsResponse = {
  /** A link to the Web API endpoint returning the full result of the request */
  href: string;
  /** The maximum number of items in the response (as set in the query or by default). */
  limit: number;
  /** URL to the next page of items. (`null` if none) */
  next: string | null;
  /** The offset of the items returned (as set in the query or by default) */
  offset: number;
  /** URL to the previous page of items. (`null` if none) */
  previous: string | null;
  /** The total number of items available to return. */
  total: number;
  items: PlaylistBase[];
};

export type PlaylistBase = {
  /** if the owner allows other users to modify the playlist. */
  collaborative: boolean;
  /** The playlist description. Only returned for modified, verified playlists, otherwise null. */
  description: string | null;
  /** Known external URLs for this playlist. */
  external_urls: SpotifyExternalURL;
  /** A link to the Web API endpoint providing full details of the playlist. */
  href: string;
  /** The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) for the playlist. */
  id: string;
  /**
   * Images for the playlist.
   * The array may be empty or contain up to three images.
   * The images are returned by size in descending order. See [Working with Playlists](https://developer.spotify.com/documentation/general/guides/working-with-playlists/).
   *
   * Note: If returned, the source URL for the image (url) is temporary and will expire in less than a day.
   */
  images: SpotifyImage[];
  /** The name of the playlist. */
  name: string;
  /** The user who owns the playlist */
  owner: Pick<
    User,
    "display_name" | "id" | "type" | "external_urls" | "followers" | "href" | "uri"
  >;
  /**
   * The playlist's public/private status:
   * `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant.
   *
   * For more about public/private status, see [Working with Playlists](https://developer.spotify.com/documentation/general/guides/working-with-playlists/)
   */
  public: boolean;
  /**
   * A collection containing a link ( href ) to the Web API endpoint where full details of the playlist's tracks can be retrieved,
   *  along with the total number of tracks in the playlist. Note, a track object may be null.
   * This can happen if a track is no longer available.
   */
  tracks: {
    /** A link to the Web API endpoint where full details of the playlist's tracks can be retrieved. */
    href: string;
    /** Number of tracks in the playlist. */
    total: number;
  };
  /** The object type: "playlist" */
  type: "playlist";
  /** The [Spotify URI](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) for the playlist. */
  uri: string;
};
