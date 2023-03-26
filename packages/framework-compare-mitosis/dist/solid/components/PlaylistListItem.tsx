type PlaylistListItemProps = {
  children: any;
};

function PlaylistListItem(props: PlaylistListItemProps) {
  return (
    <li class="flex gap-4" {...props}>
      {props.children}
    </li>
  );
}

export default PlaylistListItem;
