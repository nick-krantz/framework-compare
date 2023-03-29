import { GetPlaylistResponse } from "framework-compare-api";
import { useLoaderData } from "react-router-dom";
import { millisecondDisplay, sortTracks } from "framework-compare-utils";
import { TrackTable, TrackTableRow, TableHeader } from "framework-compare-mitosis/react";
import { useState } from "react";
import {
  ARTIST_COLUMN,
  ASCENDING,
  DESCENDING,
  DURATION_COLUMN,
  NAME_COLUMN,
  PlaylistColumns,
  SortDirection,
  Track,
} from "framework-compare-types";

type SortState = {
  sortDirection: SortDirection;
  sortedColumn: PlaylistColumns;
  tracks: Track[];
};

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

  const ascending = sortDirection === ASCENDING;

  const sort = (column: PlaylistColumns) => () => {
    const newSort = sortTracks(
      playlist.tracks.items.map((i) => i.track),
      column,
      sortDirection
    );
    setSortState({
      tracks: newSort.tracks,
      sortedColumn: column,
      sortDirection: newSort.newDirection,
    });
  };

  return (
    <section>
      <h1>{name}</h1>
      <p>{description}</p>

      <TrackTable
        titleSlot={
          <button onClick={sort(NAME_COLUMN)} className="w-full">
            <TableHeader sorted={sortedColumn === NAME_COLUMN} ascending={ascending}>
              TITLE
            </TableHeader>
          </button>
        }
        artistSlot={
          <button onClick={sort(ARTIST_COLUMN)} className="w-full">
            <TableHeader sorted={sortedColumn === ARTIST_COLUMN} ascending={ascending}>
              ARTIST
            </TableHeader>
          </button>
        }
        durationSlot={
          <button onClick={sort(DURATION_COLUMN)} className="w-full">
            <TableHeader sorted={sortedColumn === DURATION_COLUMN} ascending={ascending}>
              DURATION
            </TableHeader>
          </button>
        }
      >
        {tracks.map((track) => (
          <TrackTableRow
            key={track.id}
            name={track.name}
            artist={track.artists.map((a) => a.name).join(", ")}
            imageURL={track.album.images[0].url}
            duration={millisecondDisplay(track.duration_ms)}
          />
        ))}
      </TrackTable>
    </section>
  );
};
