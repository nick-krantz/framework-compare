type PlaylistListItemProps = {
  children: any;
};

export default function PlaylistListItem({ children, ...props }: PlaylistListItemProps) {
  return <li {...props}>{children}</li>;
}
