import { cookies } from "next/headers";
import {
  PlaylistDetails,
  PlaylistImage,
  PlaylistLink,
  PlaylistList,
  PlaylistListItem,
} from "../../mitosis";
import { api } from "../../service/api";

export default async function Playlist() {
  const access_token = cookies().get("access_token");
  const playlistResponse = await api.getPlaylists(access_token?.value);

  return (
    <PlaylistList>
      {playlistResponse.items.map((p) => (
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
}
