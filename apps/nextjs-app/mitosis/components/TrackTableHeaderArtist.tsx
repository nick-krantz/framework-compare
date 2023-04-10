type TrackTableHeaderArtistProps = {
  children: any;
};

function TrackTableHeaderArtist(props: TrackTableHeaderArtistProps) {
  return <th className="text-xl font-normal py-2 px-2 text-start">{props.children}</th>;
}

export default TrackTableHeaderArtist;
