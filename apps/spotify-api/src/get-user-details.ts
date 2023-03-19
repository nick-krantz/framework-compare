export const getUserDetails = (token: string) => {
  return fetch("https://api.spotify.com/v1/me", {
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
