import TrackIcon from "./TrackIcon.lite";

type PlaylistDetailsProps = {
  name: string;
  description: string | null;
  tracksTotal: number;
};

export default function PlaylistDetails({ name, description, tracksTotal }: PlaylistDetailsProps) {
  return (
    <div className="grid grid-rows-2">
      <div>
        <h2 className="text-2xl font-medium">{name}</h2>
        <p className="font-light">{description}</p>
      </div>
      <div className="flex gap-3 font-light self-center mb-2">
        <TrackIcon />
        {tracksTotal}
      </div>
    </div>
  );
}
