<template>
  <th class="text-xl font-normal py-2 px-2 text-start"><slot /></th>
</template>

<script lang="ts">
type TrackTableHeaderTitleProps = {
  children: any;
};

export default {
  name: "track-table-header-title",

  props: [],
};
</script>