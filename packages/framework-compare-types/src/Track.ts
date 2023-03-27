import { SpotifyExternalURL } from "./SpotifyExternalURL";
import { User } from "./User";
import { Artist } from "./Artist";

export type Track = {
  /** The date and time the track was added */
  added_at: string | null;

  /**
   * The Spotify user who added the track or episode. Note: some very old playlists may return null
   * in this field.
   */
  added_by: Pick<User, "external_urls" | "followers" | "href" | "id" | "type" | "uri"> | null;

  /**
   * The artists who performed the track. Each artist object includes a link in href to more
   * detailed information about the artist.
   */
  artists: Artist[];

  /**
   * A list of the countries in which the track can be played, identified by their ISO 3166 - 1
   * alpha - 2 code.
   */
  available_markets: string[];

  /** The disc number(usually 1 unless the album consists of more than one disc). */
  disc_number: number;

  /** The track length in milliseconds. */
  duration_ms: number;

  /**
   * Whether or not the track has explicit lyrics(true = yes it does; false = no it does not OR
   * unknown).
   */
  explicit: boolean;

  /** Known external IDs for the track. */
  external_ids: {
    /** International Standard Recording Code */
    isrc: string;

    /** International Article Number */
    ean: string;

    /** Universal Product Code */
    upc: string;
  };

  external_urls: SpotifyExternalURL[];

  /** A link to the Web API endpoint providing full details of the track. */
  href: string;

  /** The Spotify ID for the track. */
  id: string;

  /**
   * Part of the response when Track Relinking is applied.If true, the track is playable in the
   * given market.Otherwise false.
   */
  is_playable: boolean;

  /**
   * Part of the response when Track Relinking is applied, and the requested track has been replaced
   * with different track.The track in the linked_from object contains information about the
   * originally requested track.
   */
  linked_from: {};

  /** Included in the response when a content restriction is applied. */
  restrictions: {
    /**
     * The reason for the restriction. Supported values: market - The content item is not available
     * in the given market. product - The content item is not available for the user's subscription
     * type. explicit - The content item is explicit and the user's account is set to not play
     * explicit content. Additional reasons may be added in the future. Note: If you use this field,
     * make sure that your application safely handles unknown values.
     */
    reason: string;
  };
  /** The name of the track. */
  name: string;
  /**
   * The popularity of the track. The value will be between 0 and 100, with 100 being the most
   * popular. The popularity of a track is a value between 0 and 100, with 100 being the most
   * popular. The popularity is calculated by algorithm and is based, in the most part, on the total
   * number of plays the track has had and how recent those plays are. Generally speaking, songs
   * that are being played a lot now will have a higher popularity than songs that were played a lot
   * in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated
   * independently. Artist and album popularity is derived mathematically from track popularity.
   * Note: the popularity value may lag actual popularity by a few days: the value is not updated in
   * real time.
   */
  popularity: number;

  /** A link to a 30 second preview (MP3 format) of the track. Can be null */
  preview_url: string;

  /**
   * The number of the track. If an album has several discs, the track number is the number on the
   * specified disc.
   */
  track_number: number;

  /** The object type: "track". */
  type: string;

  /** The Spotify URI for the track. */
  uri: string;

  /** Whether or not the track is from a local file */
  is_local: boolean;
};
