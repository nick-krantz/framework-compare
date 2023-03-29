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

export const millisecondDisplay = (ms: number): string => {
  var minutes = Math.floor(ms / 60000);
  var seconds = Number(((ms % 60000) / 1000).toFixed(0));

  if (isNaN(minutes) || isNaN(seconds)) {
    return "0:00";
  }

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

type SortResult = {
  tracks: Track[];
  newDirection: SortDirection;
};

const sortByName = (a: Track, b: Track) => a.name.localeCompare(b.name);
const sortByArtist = (a: Track, b: Track) => a.artists[0].name.localeCompare(b.artists[0].name);
const sortByDuration = (a: Track, b: Track) => a.duration_ms - b.duration_ms;

const applyNewSort = (tracks: Track[], oldDirection: SortDirection): SortResult => {
  if (oldDirection === DESCENDING) {
    return { tracks, newDirection: ASCENDING };
  }
  return { tracks: tracks.reverse(), newDirection: DESCENDING };
};

export const sortTracks = (
  oldSortedTracks: Track[],
  sortColumn: PlaylistColumns,
  oldDirection: SortDirection
): SortResult => {
  // shallow copy
  const tracks = [...oldSortedTracks];

  if (sortColumn === NAME_COLUMN) {
    return applyNewSort(tracks.sort(sortByName), oldDirection);
  }

  if (sortColumn === ARTIST_COLUMN) {
    return applyNewSort(tracks.sort(sortByArtist), oldDirection);
  }

  if (sortColumn === DURATION_COLUMN) {
    return applyNewSort(tracks.sort(sortByDuration), oldDirection);
  }

  return { tracks, newDirection: oldDirection };
};
