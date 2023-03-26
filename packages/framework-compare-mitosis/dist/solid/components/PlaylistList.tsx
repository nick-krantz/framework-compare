type PlaylistListProps = {
  children: any;
};

function PlaylistList(props: PlaylistListProps) {
  return (
    <ul class="flex flex-col gap-8" {...props}>
      {props.children}
    </ul>
  );
}

export default PlaylistList;
