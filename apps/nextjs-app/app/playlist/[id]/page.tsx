import { cookies } from "next/headers";
import { ClientSideTrackTable } from "../../../components/ClientSideTrackTable";
import { PlaylistDetailTitle } from "../../../mitosis";
import { api } from "../../../service/api";
import { sortTracks } from "framework-compare-utils";
import { DESCENDING, NAME_COLUMN } from "framework-compare-types";

export default async function PlaylistDetails({ params }: { params: { id: string } }) {
  const access_token = cookies().get("access_token");
  const playlistResponse = await api.getPlaylistDetails(params.id, access_token?.value);

  const { name, description } = playlistResponse;

  const initialSort = sortTracks(
    playlistResponse.tracks.items.map((i) => i.track),
    NAME_COLUMN,
    DESCENDING
  );

  return (
    <section>
      <PlaylistDetailTitle name={name} description={description ?? ""} />
      <ClientSideTrackTable initialTracks={initialSort.tracks} />
    </section>
  );
}
