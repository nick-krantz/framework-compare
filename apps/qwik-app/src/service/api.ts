import { generateSpotifyAPI } from "framework-compare-api";

export const api = generateSpotifyAPI(import.meta.env.VITE_SPOTIFY_API_ENDPOINT!);
