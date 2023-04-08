<template>
  <ul class="flex flex-col gap-8" v-bind="$props">
    <slot />
  </ul>
</template>

<script lang="ts">
type PlaylistListProps = {
  children: any;
};

export default {
  name: "playlist-list",

  props: [],
};
</script>