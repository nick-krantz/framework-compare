import { GetPlaylistResponse } from "framework-compare-api";
import { useLoaderData } from "react-router-dom";
import { millisecondDisplay, sortTracks } from "framework-compare-utils";
import {
  TrackTable,
  TrackTableRow,
  TableHeader,
  PlaylistDetailTitle,
  TrackTableHeaderTitle,
  TrackTableHeaderAlbumImage,
  TrackTableHeaderArtist,
  TrackTableHeaderDuration,
} from "framework-compare-mitosis/react";
import { useState } from "react";
import {
  ARTIST_COLUMN,
  ASCENDING,
  DESCENDING,
  DURATION_COLUMN,
  NAME_COLUMN,
  PlaylistColumns,
  SortState,
} from "framework-compare-types";

export const PlaylistDetails = () => {
  const playlist = useLoaderData() as GetPlaylistResponse;

  const { name, description } = playlist;
  const initialSort = sortTracks(
    playlist.tracks.items.map((i) => i.track),
    NAME_COLUMN,
    DESCENDING
  );

  const [{ sortDirection, sortedColumn, tracks }, setSortState] = useState<SortState>({
    tracks: initialSort.tracks,
    sortedColumn: NAME_COLUMN,
    sortDirection: ASCENDING,
  });

  const sort = (column: PlaylistColumns) => () => {
    const newSort = sortTracks(
      playlist.tracks.items.map((i) => i.track),
      column,
      sortedColumn === column ? sortDirection : DESCENDING
    );
    setSortState({
      tracks: newSort.tracks,
      sortedColumn: column,
      sortDirection: newSort.newDirection,
    });
  };

  const ascending = sortDirection === ASCENDING;

  return (
    <section>
      <PlaylistDetailTitle name={name} description={description ?? ""} />

      <TrackTable>
        <thead>
          <tr>
            <TrackTableHeaderAlbumImage />
            <TrackTableHeaderTitle>
              <button onClick={sort(NAME_COLUMN)} className="w-full">
                <TableHeader sorted={sortedColumn === NAME_COLUMN} ascending={ascending}>
                  TITLE
                </TableHeader>
              </button>
            </TrackTableHeaderTitle>
            <TrackTableHeaderArtist>
              <button onClick={sort(ARTIST_COLUMN)} className="w-full">
                <TableHeader sorted={sortedColumn === ARTIST_COLUMN} ascending={ascending}>
                  ARTIST
                </TableHeader>
              </button>
            </TrackTableHeaderArtist>
            <TrackTableHeaderDuration>
              <button onClick={sort(DURATION_COLUMN)} className="w-full">
                <TableHeader sorted={sortedColumn === DURATION_COLUMN} ascending={ascending}>
                  DURATION
                </TableHeader>
              </button>
            </TrackTableHeaderDuration>
          </tr>
        </thead>

        <tbody>
          {tracks.map((track) => (
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
};
