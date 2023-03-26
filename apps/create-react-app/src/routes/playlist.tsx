import { PlaylistResponse } from "framework-compare-types";
import { PlaylistImage, PlaylistList, PlaylistListItem, PlaylistDetails, TrackIcon } from "mitosis";
import { useLoaderData } from "react-router-dom";

export const Playlist = () => {
  const response = useLoaderData() as PlaylistResponse;

  return (
    <PlaylistList>
      {response.items.map((p) => (
        <PlaylistListItem key={p.id}>
          <PlaylistImage name={p.name} url={p.images[0].url} />
          <div className="grid grid-rows-2">
            <div>
              <h2 className="text-2xl font-medium">{p.name}</h2>
              <p className="font-light">{p.description}</p>
            </div>
            <div className="flex gap-3 font-light self-center mb-2">
              <TrackIcon />
              {p.tracks.total}
            </div>
          </div>
        </PlaylistListItem>
      ))}
    </PlaylistList>
  );
};
