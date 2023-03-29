import * as React from "react";

type TrackImageProps = {
  /** URL of the track image */
  url: string;
  /** Name of the track */
  name: string;
};

function TrackImage(props: TrackImageProps) {
  return (
    <div className="relative max-w-max">
      <img
        className="h-20 min-w-[5rem] z-[2] relative"
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

export default TrackImage;
