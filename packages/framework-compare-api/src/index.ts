import { GetPlaylistsResponse, User } from "framework-compare-types";

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
