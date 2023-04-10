type PlaylistDetailTitleProps = {
  name: string;
  description: string;
};

function PlaylistDetailTitle(props: PlaylistDetailTitleProps) {
  return (
    <>
      <h1 className="text-5xl font-normal text-center">{props.name}</h1>

      <p className="text-2xl font-light mb-5 text-center">{props.description}</p>
    </>
  );
}

export default PlaylistDetailTitle;
