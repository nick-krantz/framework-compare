import * as React from "react";

type TrackTableHeaderDurationProps = {
  children: any;
};

function TrackTableHeaderDuration(props: TrackTableHeaderDurationProps) {
  return (
    <th className="text-xl font-normal py-2 px-2 pr-6">{props.children}</th>
  );
}

export default TrackTableHeaderDuration;
