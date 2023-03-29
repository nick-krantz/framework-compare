type TrackTableRowProps = {
  name: string;
  imageURL: string;
  artist: string;
  duration: string;
};

import TrackImage from "./TrackImage.jsx";

function TrackTableRow(props: TrackTableRowProps) {
  return (
    <tr class="bg-fadedWhite border-y border-white border-left-0 last-of-type:border-b-0">
      <td class="py-6 px-2 pl-6">
        <TrackImage url={props.imageURL} name={props.name}></TrackImage>
      </td>
      <td class="py-2 px-2 font-light">{props.name}</td>
      <td class="py-2 px-2 font-light">{props.artist}</td>
      <td class="py-2 px-2 pr-6 text-end font-light">{props.duration}</td>
    </tr>
  );
}

export default TrackTableRow;
