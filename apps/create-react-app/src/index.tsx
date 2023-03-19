import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { SpotifyProvider } from "providers/SpotifyProvider/SpotifyProvider";
import Root from "routes/root";
import { Playlist } from "routes/playlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/playlist", element: <Playlist /> },
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
