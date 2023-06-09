import { GetPlaylistsResponse } from "framework-compare-api";
import {
  PlaylistDetails,
  PlaylistImage,
  PlaylistLink,
  PlaylistList,
  PlaylistListItem,
} from "mitosis";
import { useLoaderData } from "react-router-dom";

export const Playlist = () => {
  const response = useLoaderData() as GetPlaylistsResponse;

  return (
    <PlaylistList>
      {response.items.map((p) => (
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
};
