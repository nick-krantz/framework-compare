"use client";

import {
  ARTIST_COLUMN,
  ASCENDING,
  DESCENDING,
  DURATION_COLUMN,
  NAME_COLUMN,
  PlaylistColumns,
  SortState,
  Track,
} from "framework-compare-types";
import { millisecondDisplay, sortTracks } from "framework-compare-utils";
import { useState } from "react";
import {
  TableHeader,
  TrackTable,
  TrackTableHeaderAlbumImage,
  TrackTableHeaderArtist,
  TrackTableHeaderDuration,
  TrackTableHeaderTitle,
  TrackTableRow,
} from "../mitosis";

type ClientSideTrackTableProps = {
  initialTracks: Track[];
};

export const ClientSideTrackTable = ({ initialTracks }: ClientSideTrackTableProps) => {
  const [{ sortDirection, sortedColumn, tracks }, setSortState] = useState<SortState>({
    tracks: initialTracks,
    sortedColumn: NAME_COLUMN,
    sortDirection: ASCENDING,
  });

  const sort = (column: PlaylistColumns) => () => {
    const newSort = sortTracks(
      tracks,
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
  );
};
