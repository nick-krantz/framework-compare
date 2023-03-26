type PlaylistListProps = {
  children: any;
};

export default function PlaylistList({ children, ...props }: PlaylistListProps) {
  return (
    <ul {...props} className="flex flex-col gap-8">
      {children}
    </ul>
  );
}
