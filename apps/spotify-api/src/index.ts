import express from "express";
import cors, { CorsOptions } from "cors";
import cookieParser from "cookie-parser";
import { getUserDetails } from "./get-user-details";
import { getPlaylists } from "./get-playlists";

const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REDIRECT_URI,
  SPOTIFY_API_PORT,
  CREATE_REACT_APP_ENDPOINT,
} = process.env;

if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REDIRECT_URI || !SPOTIFY_API_PORT) {
  throw new Error("Missing SPOTIFY* env variables");
}

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = (length: number) => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const stateKey = "spotify_auth_state";

let access_token: string | null = null;
let frontend_redirect: string | null = null;

const whitelist = [CREATE_REACT_APP_ENDPOINT];
const corsOptions: CorsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const app = express();

app.use(cors(corsOptions)).use(cookieParser());

app.get("/login", function (req, res) {
  frontend_redirect = req.query.redirect as string;

  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  const scope = "user-read-private user-read-email";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
    new URLSearchParams({
      response_type: "code",
      client_id: SPOTIFY_CLIENT_ID,
      scope: scope,
      redirect_uri: SPOTIFY_REDIRECT_URI,
      state: state,
    }).toString()
  );
});

app.get("/callback", function (req, res) {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      "/#" +
      new URLSearchParams({
        error: "state_mismatch",
      }).toString()
    );
  } else {
    res.clearCookie(stateKey);
    const body = [
      ["code", code as string],
      ["redirect_uri", SPOTIFY_REDIRECT_URI],
      ["grant_type", "authorization_code"],
    ]
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join("&");

    const postOptions: RequestInit = {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    };

    fetch("https://accounts.spotify.com/api/token", postOptions).then(async (response) => {
      if (response.ok && response.status === 200 && frontend_redirect) {
        const body = await response.json();
        access_token = body.access_token;
        res.cookie("access_token", access_token);
        res.redirect(302, frontend_redirect);
      } else if (!frontend_redirect) {
        throw new Error("cannot find frontend_redirect");
      } else {
        res.redirect(
          "/" +
          new URLSearchParams({
            error: "invalid_token",
          }).toString()
        );
      }
    });
  }
});

app.get("/get-user-details", async (req, res) => {
  const userDetails = await getUserDetails(req.cookies.access_token);

  res.send(userDetails);
});

app.get("/is-logged-in", async (req, res) => {
  const userDetails = await getUserDetails(req.cookies.access_token);

  res.send({ auth: !!userDetails });
});

app.get("/get-playlists", async (req, res) => {
  const playlists = await getPlaylists(req.cookies.access_token);

  res.send(playlists);
});

console.log(`Spotify API listening on ${SPOTIFY_API_PORT}`);
app.listen(SPOTIFY_API_PORT);
