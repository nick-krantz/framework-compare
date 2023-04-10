import ReactDOM from "react-dom/client";
import { createBrowserRouter, json, Navigate, RouterProvider } from "react-router-dom";
import "./index.css";

import { SpotifyProvider } from "providers/SpotifyProvider/SpotifyProvider";
import { Playlist } from "routes/playlist";
import { PlaylistDetails } from "routes/playlist-detailts";
import Root from "routes/root";
import { api } from "service/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/playlist",
        element: <Playlist />,
        loader: async () => {
          const playlistResponse = await api.getPlaylists();
          return json(playlistResponse);
        },
      },
      {
        path: "/playlist/:id",
        element: <PlaylistDetails />,
        loader: async ({ params }) => {
          const playlistResponse = await api.getPlaylistDetails(params.id!);
          return json(playlistResponse);
        },
      },
      { index: true, element: <Navigate to="/playlist" /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <SpotifyProvider>
    <RouterProvider router={router} />
  </SpotifyProvider>
);
