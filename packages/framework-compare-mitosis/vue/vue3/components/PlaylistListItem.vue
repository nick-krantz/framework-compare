<template>
  <li v-bind="$props"><slot /></li>
</template>

<script lang="ts">
type PlaylistListItemProps = {
  children: any;
};

export default {
  name: "playlist-list-item",

  props: [],
};
</script>