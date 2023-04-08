<template>
  <div class="border border-[#f4f4f444] rounded-lg">
    <table class="table-auto w-full">
      <slot />
    </table>
  </div>
</template>

<script lang="ts">
type TrackTableProps = {
  children: any;
};

export default {
  name: "track-table",

  props: [],
};
</script>