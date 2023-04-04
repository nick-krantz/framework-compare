import { PlaylistColumns } from "./PlaylistColumns";
import { SortDirection } from "./SortDirection";
import { Track } from "./Track";

export type SortState = {
  sortDirection: SortDirection;
  sortedColumn: PlaylistColumns;
  tracks: Track[];
};
