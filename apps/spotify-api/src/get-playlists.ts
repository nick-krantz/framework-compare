import { GET_PLAYLISTS_RESPONSE } from "./responses/get-playlists.response";

export const getPlaylists = (token: string) => {
  if (process.env.USE_STORED_API_RESPONSES === "true") {
    return Promise.resolve(GET_PLAYLISTS_RESPONSE);
  }

  return fetch("https://api.spotify.com/v1/me/playlists", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    if (res.ok) {
      return await res.json();
    }

    return { items: [] };
  });
};
