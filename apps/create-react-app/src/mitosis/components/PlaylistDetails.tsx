import * as React from "react";

type PlaylistDetailsProps = {
  name: string;
  description: string | null;
  tracksTotal: number;
};
import TrackIcon from "./TrackIcon";

function PlaylistDetails(props: PlaylistDetailsProps) {
  return (
    <div className="grid grid-rows-2">
      <div>
        <h2 className="text-2xl font-medium">{props.name}</h2>

        <p className="font-light">{props.description}</p>
      </div>

      <div className="flex gap-3 font-light self-center mb-2">
        <TrackIcon />

        {props.tracksTotal}
      </div>
    </div>
  );
}

export default PlaylistDetails;
