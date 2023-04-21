import { GetPlaylistResponse } from "./types/GetPlaylistResponse";
import { GetPlaylistsResponse } from "./types/GetPlaylistsResponse";

export const generateSpotifyAPI = (spotifyEndpoint: string) => ({
  isLoggedIn: (redirectURL: string): Promise<true | null> => {
    return fetch(`${spotifyEndpoint}/is-logged-in`, {
      method: "GET",
      credentials: "include",
    }).then(async (res) => {
      const authDetails = await res.json();
      // When auth is true assume the user is logged in
      // otherwise redirect to the login page
      if (authDetails.auth) {
        return Promise.resolve(true);
      } else {
        window.location.href = `${spotifyEndpoint}/login?redirect=${encodeURIComponent(
          redirectURL
        )}`;
        return null;
      }
    });
  },
  getPlaylists: (cookie?: string): Promise<GetPlaylistsResponse> => {
    return fetch(`${spotifyEndpoint}/get-playlists`, {
      method: "GET",
      credentials: "include",
      headers: cookie
        ? {
          cookie: `access_token=${cookie};`,
        }
        : undefined,
    }).then(async (res) => {
      return await res.json();
    });
  },
  getPlaylistDetails: (id: string, cookie?: string): Promise<GetPlaylistResponse> => {
    return fetch(`${spotifyEndpoint}/get-playlist-details?id=${id}`, {
      method: "GET",
      credentials: "include",
      headers: cookie
        ? {
          cookie: `access_token=${cookie};`,
        }
        : undefined,
    }).then(async (res) => {
      return await res.json();
    });
  },
});

export type { GetPlaylistsResponse, GetPlaylistResponse };
