import { GET_PLAYLIST_DETAILS_RESPONSE } from "./responses/get-playlist-details.response";

export const getPlaylistDetails = (token: string, playlistId: string) => {
  if (process.env.USE_STORED_API_RESPONSES === "true") {
    if (!GET_PLAYLIST_DETAILS_RESPONSE[playlistId]) {

      return null;
    }
    return Promise.resolve(GET_PLAYLIST_DETAILS_RESPONSE[playlistId]);
  }
  console.log("$$$$$$$$$$$$$$$$$$$$$");

  return fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    if (res.ok) {
      return await res.json();
    }

    return null;
  });
};
