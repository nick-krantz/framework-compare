type PlaylistListItemProps = {
  children: any;
};

function PlaylistListItem(props: PlaylistListItemProps) {
  return <li {...props}>{props.children}</li>;
}

export default PlaylistListItem;
