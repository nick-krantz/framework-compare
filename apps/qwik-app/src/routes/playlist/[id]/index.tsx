import { $, component$, useStore } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { PlaylistColumns, SortState } from "framework-compare-types";
import {
  ARTIST_COLUMN,
  ASCENDING,
  DESCENDING,
  DURATION_COLUMN,
  NAME_COLUMN,
} from "framework-compare-types";
import { millisecondDisplay, sortTracks } from "framework-compare-utils";
import {
  PlaylistDetailTitle,
  TableHeader,
  TrackTable,
  TrackTableHeaderAlbumImage,
  TrackTableHeaderArtist,
  TrackTableHeaderDuration,
  TrackTableHeaderTitle,
  TrackTableRow,
} from "~/mitosis";
import { api } from "~/service/api";

export const usePlaylists = routeLoader$(async ({ cookie, params }) => {
  const playlistResponse = await api.getPlaylistDetails(
    params.id,
    cookie.get("access_token")?.value
  );
  return playlistResponse;
});

export default component$(() => {
  const playlist = usePlaylists();

  const { name, description, tracks } = playlist.value;

  const initialSort = sortTracks(
    tracks.items.map((i) => i.track),
    NAME_COLUMN,
    DESCENDING
  );

  const state = useStore<SortState>({
    tracks: initialSort.tracks,
    sortedColumn: NAME_COLUMN,
    sortDirection: ASCENDING,
  });

  const ascending = state.sortDirection === ASCENDING;

  const sort = (column: PlaylistColumns) =>
    $(() => {
      const newSort = sortTracks(
        tracks.items.map((i) => i.track),
        column,
        state.sortedColumn === column ? state.sortDirection : DESCENDING
      );
      state.tracks = newSort.tracks;
      state.sortedColumn = column;
      state.sortDirection = newSort.newDirection;
    });

  return (
    <section>
      <PlaylistDetailTitle name={name} description={description ?? ""} />

      <TrackTable>
        <thead>
          <tr>
            <TrackTableHeaderAlbumImage />
            <TrackTableHeaderTitle>
              <button onClick$={sort(NAME_COLUMN)} class="w-full">
                <TableHeader sorted={state.sortedColumn === NAME_COLUMN} ascending={ascending}>
                  TITLE
                </TableHeader>
              </button>
            </TrackTableHeaderTitle>
            <TrackTableHeaderArtist>
              <button onClick$={sort(ARTIST_COLUMN)} class="w-full">
                <TableHeader sorted={state.sortedColumn === ARTIST_COLUMN} ascending={ascending}>
                  ARTIST
                </TableHeader>
              </button>
            </TrackTableHeaderArtist>
            <TrackTableHeaderDuration>
              <button onClick$={sort(DURATION_COLUMN)} class="w-full">
                <TableHeader sorted={state.sortedColumn === DURATION_COLUMN} ascending={ascending}>
                  DURATION
                </TableHeader>
              </button>
            </TrackTableHeaderDuration>
          </tr>
        </thead>

        <tbody>
          {tracks.items.map(({ track }) => (
            <TrackTableRow
              key={track.id}
              name={track.name}
              artist={track.artists.map((a) => a.name).join(", ")}
              imageURL={track.album.images[0].url}
              duration={millisecondDisplay(track.duration_ms)}
            />
          ))}
        </tbody>
      </TrackTable>
    </section>
  );
});
