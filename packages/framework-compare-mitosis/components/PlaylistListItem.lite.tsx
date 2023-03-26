type PlaylistListItemProps = {
  children: any;
};

export default function PlaylistListItem({ children, ...props }: PlaylistListItemProps) {
  return (
    <li {...props} className="flex gap-4">
      {children}
    </li>
  );
}
