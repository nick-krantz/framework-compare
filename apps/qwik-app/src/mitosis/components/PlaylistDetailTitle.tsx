// GENERATED BY MITOSIS

import { Fragment, component$ } from "@builder.io/qwik";
type PlaylistDetailTitleProps = {
  name: string;
  description: string;
};
export const PlaylistDetailTitle = component$((props: PlaylistDetailTitleProps) => {
  return (
    <Fragment>
      <h1 class="text-5xl font-normal text-center">{props.name}</h1>
      <p class="text-2xl font-light mb-5 text-center">{props.description}</p>
    </Fragment>
  );
});
export default PlaylistDetailTitle;