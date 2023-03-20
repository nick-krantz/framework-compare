export const getPlaylists = (token: string) => {
  return fetch("https://api.spotify.com/v1/me/playlists", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    return await res.json();
  });
};
