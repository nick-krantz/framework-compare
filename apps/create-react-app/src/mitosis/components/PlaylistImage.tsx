type PlaylistImageProps = {
  /** URL of the playlist image */
  url: string;
  /** Name of the playlist */
  name: string;
};

function PlaylistImage(props: PlaylistImageProps) {
  return (
    <div className="relative max-w-max">
      <img
        className="h-32 min-w-[8rem] z-[2] relative"
        src={props.url}
        alt={props.name}
        style={{
          clipPath: `url(#squircleClip)`,
        }}
      />

      <img
        className="absolute top-0 left-0 z-[1] scale-90 blur-[16px]"
        src={props.url}
        alt={props.name}
        aria-hidden={true}
      />

      <svg width="10" height="10" viewBox="0 0 10 10" className="absolute">
        <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
          <path
            fill="red"
            stroke="none"
            d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"
          />
        </clipPath>
      </svg>
    </div>
  );
}

export default PlaylistImage;
