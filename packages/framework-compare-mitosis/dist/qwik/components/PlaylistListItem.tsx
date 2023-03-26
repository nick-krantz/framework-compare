// GENERATED BY MITOSIS

import { Fragment, Slot, component$, h } from "@builder.io/qwik";
type PlaylistListItemProps = {
  children: any;
};
export const PlaylistListItem = component$((props: PlaylistListItemProps) => {
  return (
    <li class="flex gap-4" {...props}>
      <Slot></Slot>
    </li>
  );
});
export default PlaylistListItem;
