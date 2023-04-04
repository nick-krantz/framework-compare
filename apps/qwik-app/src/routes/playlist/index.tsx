import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import {
  PlaylistDetails,
  PlaylistImage,
  PlaylistLink,
  PlaylistList,
  PlaylistListItem,
} from "~/mitosis";
import { api } from "~/service/api";

export const usePlaylists = routeLoader$(async ({ cookie }) => {
  const playlistResponse = await api.getPlaylists(cookie.get("access_token")?.value);
  return playlistResponse;
});

export default component$(() => {
  const playlists = usePlaylists();

  return (
    <PlaylistList>
      {playlists.value.items.map((p) => (
        <PlaylistListItem key={p.id}>
          <PlaylistLink href={`/playlist/${p.id}`}>
            <PlaylistImage name={p.name} url={p.images[0].url} />
            <PlaylistDetails
              name={p.name}
              description={p.description}
              tracksTotal={p.tracks.total}
            />
          </PlaylistLink>
        </PlaylistListItem>
      ))}
    </PlaylistList>
  );
});
