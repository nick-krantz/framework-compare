import * as React from "react";

function PlaylistIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" className="w-10 h-10 md:w-14 md:h-14">
      <g>
        <path fill="none" d="M0 0H24V24H0z" />

        <path
          d="M22 18v2H2v-2h20zM2 3.5l8 5-8 5v-10zM22 11v2H12v-2h10zm0-7v2H12V4h10z"
          className="fill-current"
        />
      </g>
    </svg>
  );
}

export default PlaylistIcon;
