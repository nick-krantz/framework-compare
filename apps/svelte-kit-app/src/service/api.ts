import { env } from "$env/dynamic/private";
import { generateSpotifyAPI } from "framework-compare-api";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const api = generateSpotifyAPI(env.SPOTIFY_API_URL!);
