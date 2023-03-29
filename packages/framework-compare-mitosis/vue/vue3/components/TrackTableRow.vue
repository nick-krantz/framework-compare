<template>
  <tr
    class="bg-fadedWhite border-y border-white border-left-0 last-of-type:border-b-0"
  >
    <td class="py-6 px-2 pl-6">
      <track-image :url="imageURL" :name="name"></track-image>
    </td>
    <td class="py-2 px-2 font-light">{{ name }}</td>
    <td class="py-2 px-2 font-light">{{ artist }}</td>
    <td class="py-2 px-2 pr-6 font-light">{{ duration }}</td>
  </tr>
</template>

<script lang="ts">
type TrackTableRowProps = {
  name: string;
  imageURL: string;
  artist: string;
  duration: string;
};

import TrackImage from "./TrackImage.vue";

export default {
  name: "track-table-row",
  components: { TrackImage: TrackImage },
  props: ["imageURL", "name", "artist", "duration"],
};
</script>