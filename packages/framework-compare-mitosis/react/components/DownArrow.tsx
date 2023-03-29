import * as React from "react";

function DownArrow(props: any) {
  return (
    <svg viewBox="0 0 24 24" className="w-6">
      <g>
        <path fill="none" d="M0 0h24v24H0z" />

        <path
          d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"
          className="fill-white"
        />
      </g>
    </svg>
  );
}

export default DownArrow;
