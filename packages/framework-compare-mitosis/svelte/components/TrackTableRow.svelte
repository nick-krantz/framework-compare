<script context="module" lang="ts">
  type TrackTableRowProps = {
    name: string;
    imageURL: string;
    artist: string;
    duration: string;
  };
</script>

<script lang="ts">
  import TrackImage from "./TrackImage.svelte";

  export let imageURL: TrackTableRowProps["imageURL"];
  export let name: TrackTableRowProps["name"];
  export let artist: TrackTableRowProps["artist"];
  export let duration: TrackTableRowProps["duration"];
</script>

<tr
  class="bg-fadedWhite border-y border-white border-left-0 last-of-type:border-b-0"
  {...$$props}
>
  <td class="py-6 px-2 pl-6">
    <TrackImage url={imageURL} {name} />
  </td>
  <td class="py-2 px-2 font-light"> {name} </td>
  <td class="py-2 px-2 font-light">{artist}</td>
  <td class="py-2 px-2 pr-6 text-end font-light">{duration}</td>
</tr>