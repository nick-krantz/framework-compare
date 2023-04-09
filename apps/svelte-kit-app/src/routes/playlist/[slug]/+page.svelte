<script>
	import { ARTIST_COLUMN, ASCENDING, DESCENDING, DURATION_COLUMN, NAME_COLUMN } from "framework-compare-types";
  import {
    PlaylistDetailTitle,
    TrackTable,
    TrackTableHeaderAlbumImage,
    TrackTableHeaderTitle,
    TrackTableHeaderArtist,
    TrackTableHeaderDuration,
    TrackTableRow,
    TableHeader,
  } from "../../../mitosis";
  import {millisecondDisplay, sortTracks} from "framework-compare-utils";

  /** @type {import('./$types').PageData} */
  export let data;

  const {name, description} = data;

  const initialState = sortTracks(
    data.tracks?.items.map((i) => i.track) ?? [],
    NAME_COLUMN,
    DESCENDING
  );

  let playlistState = {
    tracks: initialState.tracks,
    sortedColumn: NAME_COLUMN,
    sortDirection: initialState.newDirection,
  }

  /**
   * @param {import("framework-compare-types").PlaylistColumns} column
   */
  const sort = (column) => () => {
    const { tracks, sortDirection, sortedColumn } = playlistState;

    const newSort = sortTracks(
      tracks,
      column,
      sortedColumn === column ? sortDirection : DESCENDING
    );

    playlistState.tracks = newSort.tracks;
    playlistState.sortedColumn = column;
    playlistState.sortDirection = newSort.newDirection;
  };

  $: ascending = playlistState.sortDirection === ASCENDING;

</script>

<section>
  <PlaylistDetailTitle name={name} description={description ?? ""} />

  <TrackTable>
    <thead>
      <tr>
        <TrackTableHeaderAlbumImage />
        <TrackTableHeaderTitle>
          <button on:click={sort(NAME_COLUMN)} class="w-full">
            <TableHeader sorted={playlistState.sortedColumn === NAME_COLUMN} {ascending}>
              TITLE
            </TableHeader>
          </button>
        </TrackTableHeaderTitle>
        <TrackTableHeaderArtist>
          <button on:click={sort(ARTIST_COLUMN)} class="w-full">
            <TableHeader sorted={playlistState.sortedColumn === ARTIST_COLUMN} {ascending}>
              ARTIST
            </TableHeader>
          </button>
        </TrackTableHeaderArtist>
        <TrackTableHeaderDuration>
          <button on:click={sort(DURATION_COLUMN)} class="w-full">
            <TableHeader sorted={playlistState.sortedColumn === DURATION_COLUMN} {ascending}>
              DURATION
            </TableHeader>
          </button>
        </TrackTableHeaderDuration>
      </tr>
    </thead>

    <tbody>
      {#each playlistState.tracks as track (track.id)}
        <TrackTableRow
          name={track.name}
          artist={track.artists.map((a) => a.name).join(", ")}
          imageURL={track.album.images[0].url}
          duration={millisecondDisplay(track.duration_ms)}
        />
      {/each}
      </tbody>
  </TrackTable>
</section>
