type PlaylistDetailTitleProps = {
  name: string;
  description: string;
};

export default function PlaylistDetailTitle({ name, description }: PlaylistDetailTitleProps) {
  return (
    <>
      <h1 className="text-5xl font-normal text-center">{name}</h1>
      <p className="text-2xl font-light mb-5 text-center">{description}</p>
    </>
  );
}
