export type User = {
  /**
   * The country of the user, as set in the user's account profile.
   * An [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   * This field is only available when the current user has granted access
   * to the [user-read-private scope](https://developer.spotify.com/documentation/general/guides/authorization-guide/#list-of-scopes).
   */
  country: string;
  /** The name displayed on the user's profile. `null` if not available. */
  display_name: string | null;
  /**
   * The user's email address, as entered by the user when creating their account.
   * <b>Important!</b> This email address is unverified; there is no proof that it
   * actually belongs to the user. This field is only available when the current
   * user has granted access to the [user-read-email scope](https://developer.spotify.com/documentation/general/guides/authorization-guide/#list-of-scopes).
   */
  email: string;
  /**
   * The user's explicit content settings.
   * This field is only available when the current user has granted access to
   * the [user-read-private scope](https://developer.spotify.com/documentation/general/guides/authorization-guide/#list-of-scopes).
   */
  explicit_content: {
    /** When `true`, indicates that explicit content should not be played. */
    filter_enabled: boolean;
    /** When `true`, indicates that the explicit content setting is locked and can't be changed by the user. */
    filter_locked: boolean;
  };
  /** Known external URLs for this user. */
  external_urls: {
    /** The [Spotify URL](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) for the object. */
    spotify: string;
  };
  /** Information about the followers of the user. */
  followers: {
    /** This will always be set to null, as the Web API does not support it at the moment. */
    href: null;
    /** The total number of followers. */
    total: number;
  };
  /** A link to the Web API endpoint for this user. */
  href: string;
  /** The [Spotify user ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) for the user. */
  id: string;
  /** The user's profile image. */
  images: {
    /** The source URL of the image. */
    url: string;
    /** The image height in pixels */
    height: number;
    /** The image width in pixels */
    width: number;
  }[];
  /**
   * The user's Spotify subscription level: "premium", "free", etc.
   * (The subscription level "open" can be considered the same as "free".)
   *
   * This field is only available when the current user has granted access to the
   * [user-read-private scope](https://developer.spotify.com/documentation/general/guides/authorization-guide/#list-of-scopes).
   */
  product: string;
  /** The object type: `user` */
  type: "user";
  /** The [Spotify URI](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) for the user. */
  uri: string;
};
