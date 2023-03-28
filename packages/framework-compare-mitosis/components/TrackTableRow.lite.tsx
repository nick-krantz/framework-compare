import TrackImage from "./TrackImage.lite";

type TrackTableRowProps = {
  name: string;
  imageURL: string;
  artist: string;
  duration: string;
};

export default function TrackTableRow({
  name,
  imageURL,
  artist,
  duration,
  ...props
}: TrackTableRowProps) {
  return (
    <tr
      {...props}
      className="bg-fadedWhite border-y border-white border-left-0 last-of-type:border-b-0"
    >
      <td className="py-6 px-2 pl-6">
        <TrackImage url={imageURL} name={name} />
      </td>
      <td className="py-2 px-2 font-light"> {name} </td>
      <td className="py-2 px-2 font-light">{artist}</td>
      <td className="py-2 px-2 pr-6 text-end font-light">{duration}</td>
    </tr>
  );
}
