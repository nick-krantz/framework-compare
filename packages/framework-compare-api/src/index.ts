import { User } from "framework-compare-types";
import { GetPlaylistResponse } from "./types/GetPlaylistResponse";
import { GetPlaylistsResponse } from "./types/GetPlaylistsResponse";

export const generateSpotifyAPI = (spotifyEndpoint: string) => ({
  getUserDetails: (redirectURL: string): Promise<User | null> => {
    return fetch(`${spotifyEndpoint}/is-logged-in`, {
      method: "GET",
      credentials: "include",
    }).then(async (res) => {
      const authDetails = await res.json();
      if (authDetails.auth) {
        return fetch(`${spotifyEndpoint}/get-user-details`, {
          method: "GET",
          credentials: "include",
        }).then(async (res) => {
          return await res.json();
        });
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
