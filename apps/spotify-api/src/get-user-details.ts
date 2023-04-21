import { GET_USER_DETAILS_RESPONSE } from "./responses/get-user-details.response";

export const getUserDetails = (token: string) => {
  if (process.env.USE_STORED_API_RESPONSES === "true") {
    return Promise.resolve(GET_USER_DETAILS_RESPONSE);
  }

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
