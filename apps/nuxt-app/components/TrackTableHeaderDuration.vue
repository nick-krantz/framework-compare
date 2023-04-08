<template>
  <th class="text-xl font-normal py-2 px-2 pr-6"><slot /></th>
</template>

<script lang="ts">
type TrackTableHeaderDurationProps = {
  children: any;
};

export default {
  name: "track-table-header-duration",

  props: [],
};
</script>