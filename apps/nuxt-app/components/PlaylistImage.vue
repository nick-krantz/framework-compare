<template>
  <div class="relative max-w-max">
    <img
      class="h-32 min-w-[8rem] z-[2] relative"
      :src="url"
      :alt="name"
      :style="{
        clipPath: `url(#squircleClip)`,
      }"
    />
    <img
      class="absolute top-0 left-0 z-[1] scale-90 blur-[16px]"
      :src="url"
      :alt="name"
      :aria-hidden="true"
    />

    <svg width="10" height="10" viewBox="0 0 10 10" class="absolute">
      <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
        <path
          fill="red"
          stroke="none"
          d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"
        ></path>
      </clipPath>
    </svg>
  </div>
</template>

<script lang="ts">
type PlaylistImageProps = {
  /** URL of the playlist image */
  url: string;
  /** Name of the playlist */
  name: string;
};

export default {
  name: "playlist-image",

  props: ["url", "name"],
};
</script>