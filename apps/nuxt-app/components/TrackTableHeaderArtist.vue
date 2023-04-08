<template>
  <th class="text-xl font-normal py-2 px-2 text-start"><slot /></th>
</template>

<script lang="ts">
type TrackTableHeaderArtistProps = {
  children: any;
};

export default {
  name: "track-table-header-artist",

  props: [],
};
</script>