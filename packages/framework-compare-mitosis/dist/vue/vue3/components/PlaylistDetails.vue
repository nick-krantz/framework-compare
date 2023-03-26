<template>
  <div class="grid grid-rows-2">
    <div>
      <h2 class="text-2xl font-medium">{{ name }}</h2>
      <p class="font-light">{{ description }}</p>
    </div>
    <div class="flex gap-3 font-light self-center mb-2">
      <track-icon></track-icon>
      {{ tracksTotal }}
    </div>
  </div>
</template>

<script lang="ts">
type PlaylistDetailsProps = {
  name: string;
  description: string | null;
  tracksTotal: number;
};

import TrackIcon from "./TrackIcon.vue";

export default {
  name: "playlist-details",
  components: { TrackIcon: TrackIcon },
  props: ["name", "description", "tracksTotal"],
};
</script>