const { SPOTIFY_API_ENDPOINT } = process.env;

export const getUserDetails = (redirectURL: string) => {
  return fetch(`${SPOTIFY_API_ENDPOINT}/is-logged-in`, { method: 'GET', credentials: 'include' }).then(async (res) => {
    const authDetails = await res.json();
    if (authDetails.auth) {
      fetch(`${SPOTIFY_API_ENDPOINT}/get-user-details`, { method: 'GET', credentials: 'include' }).then((res) => {
        console.log(res);
      })
    } else {
      window.location.href = `${SPOTIFY_API_ENDPOINT}/login?redirect=${encodeURIComponent(redirectURL)}`
    }
  })
}
