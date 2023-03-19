import { generateSpotifyAPI } from "framework-compare-api";

export const api = generateSpotifyAPI(process.env.REACT_APP_SPOTIFY_API_ENDPOINT!);
