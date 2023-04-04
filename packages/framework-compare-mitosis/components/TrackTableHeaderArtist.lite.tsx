type TrackTableHeaderArtistProps = { children: any };

export default function TrackTableHeaderArtist({ children }: TrackTableHeaderArtistProps) {
  return <th className="text-xl font-normal py-2 px-2 text-start">{children}</th>;
}
