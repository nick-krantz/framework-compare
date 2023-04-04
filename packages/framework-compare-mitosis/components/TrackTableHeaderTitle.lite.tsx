type TrackTableHeaderTitleProps = { children: any };

export default function TrackTableHeaderTitle({ children }: TrackTableHeaderTitleProps) {
  return <th className="text-xl font-normal py-2 px-2 text-start">{children}</th>;
}
