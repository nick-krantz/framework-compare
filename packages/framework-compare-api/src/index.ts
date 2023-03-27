import { User } from "framework-compare-types";
import { GetPlaylistsResponse } from "./types/GetPlaylistsResponse";
import { GetPlaylistResponse } from "./types/GetPlaylistResponse";

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
  getPlaylists: (): Promise<GetPlaylistsResponse> => {
    return fetch(`${spotifyEndpoint}/get-playlists`, {
      method: "GET",
      credentials: "include",
    }).then(async (res) => {
      return await res.json();
    });
  },
});

export type { GetPlaylistsResponse, GetPlaylistResponse };
