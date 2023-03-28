type PlaylistDetailsProps = {
  name: string;
  description: string | null;
  tracksTotal: number;
};

import TrackIcon from "./TrackIcon.jsx";

function PlaylistDetails(props: PlaylistDetailsProps) {
  return (
    <div class="grid grid-rows-2">
      <div>
        <h2 class="text-2xl font-medium">{props.name}</h2>
        <p class="font-light">{props.description}</p>
      </div>
      <div class="flex gap-3 font-light self-center mb-2">
        <TrackIcon></TrackIcon>
        {props.tracksTotal}
      </div>
    </div>
  );
}

export default PlaylistDetails;
