import TrackImage from "./TrackImage";

type TrackTableRowProps = {
  name: string;
  imageURL: string;
  artist: string;
  duration: string;
};

function TrackTableRow(props: TrackTableRowProps) {
  return (
    <tr className="bg-fadedWhite border-y border-white border-left-0 last-of-type:border-b-0">
      <td className="py-6 px-2 pl-6">
        <TrackImage url={props.imageURL} name={props.name} />
      </td>

      <td className="py-2 px-2 font-light">{props.name}</td>

      <td className="py-2 px-2 font-light">{props.artist}</td>

      <td className="py-2 px-2 pr-6 font-light">{props.duration}</td>
    </tr>
  );
}

export default TrackTableRow;
