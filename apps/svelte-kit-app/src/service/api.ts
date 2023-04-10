import { generateSpotifyAPI } from "framework-compare-api";
import { env } from "$env/dynamic/private";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const api = generateSpotifyAPI(env.SPOTIFY_API_URL!);
