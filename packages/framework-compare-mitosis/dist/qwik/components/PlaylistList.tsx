// GENERATED BY MITOSIS

import { Fragment, Slot, component$, h } from "@builder.io/qwik";
type PlaylistListProps = {
  children: any;
};
export const PlaylistList = component$((props: PlaylistListProps) => {
  return (
    <ul class="flex flex-col gap-8" {...props}>
      <Slot></Slot>
    </ul>
  );
});
export default PlaylistList;
