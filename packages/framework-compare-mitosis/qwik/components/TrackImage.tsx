// GENERATED BY MITOSIS

import { Fragment, component$, h } from "@builder.io/qwik";
type TrackImageProps = {
  /** URL of the track image */
  url: string;
  /** Name of the track */
  name: string;
};
export const TrackImage = component$((props: TrackImageProps) => {
  return (
    <div class="relative max-w-max">
      <img
        class="h-24 min-w-[6rem] z-[2] relative"
        src={props.url}
        alt={props.name}
        style={{
          clipPath: `url(#squircleClip)`,
        }}
      ></img>
      <img
        class="absolute top-0 left-0 z-[1] scale-90 blur-[16px]"
        src={props.url}
        alt={props.name}
        aria-hidden={true}
      ></img>
      <svg width="10" height="10" viewBox="0 0 10 10" class="absolute">
        <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
          <path
            fill="red"
            stroke="none"
            d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"
          ></path>
        </clipPath>
      </svg>
    </div>
  );
});
export default TrackImage;