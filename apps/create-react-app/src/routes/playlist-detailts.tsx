import { GetPlaylistResponse } from "framework-compare-api";
import { useLoaderData } from "react-router-dom";
import { millisecondDisplay } from "framework-compare-utils";
import { TrackTable, TrackTableRow } from "framework-compare-mitosis/dist/react";

export const PlaylistDetails = () => {
  const playlist = useLoaderData() as GetPlaylistResponse;

  const { name, description, tracks } = playlist;

  return (
    <section>
      <h1>{name}</h1>
      <p>{description}</p>

      <TrackTable>
        {tracks.items.map(({ track }) => (
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
