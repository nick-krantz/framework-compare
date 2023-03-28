<template>
  <div class="border border-[#f4f4f444] rounded-lg">
    <table class="table-auto">
      <thead>
        <tr>
          <th class="absolute max-w-0 overflow-hidden left-[-99999px]">
            Album Image
          </th>
          <th class="text-xl font-normal py-2 px-2 text-start">TITLE</th>
          <th class="text-xl font-normal py-2 px-2 text-start">ARTISTS</th>
          <th class="text-xl font-normal py-2 px-2 pr-6 text-end">DURATION</th>
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
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