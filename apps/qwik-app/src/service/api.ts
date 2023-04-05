import { generateSpotifyAPI } from "framework-compare-api";

export const api = generateSpotifyAPI(import.meta.env.VITE_QWIK_SPOTIFY_API_ENDPOINT!);
