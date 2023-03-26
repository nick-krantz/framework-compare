import * as React from "react";

type PlaylistListItemProps = {
  children: any;
};

function PlaylistListItem(props: PlaylistListItemProps) {
  return (
    <li className="flex gap-4" {...props}>
      {props.children}
    </li>
  );
}

export default PlaylistListItem;
