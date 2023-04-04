type TrackTableHeaderTitleProps = {
  children: any;
};

function TrackTableHeaderTitle(props: TrackTableHeaderTitleProps) {
  return (
    <th class="text-xl font-normal py-2 px-2 text-start">{props.children}</th>
  );
}

export default TrackTableHeaderTitle;
