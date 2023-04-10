import { generateSpotifyAPI } from "framework-compare-api";

export const api = generateSpotifyAPI(process.env.SPOTIFY_API_URL!);
