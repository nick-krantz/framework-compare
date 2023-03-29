<template>
  <div class="border border-[#f4f4f444] rounded-lg">
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th class="absolute max-w-0 overflow-hidden left-[-99999px]">
            Album Image
          </th>
          <th class="text-xl font-normal py-2 px-2 text-start">
            {{ titleSlot }}
          </th>

          <th class="text-xl font-normal py-2 px-2 text-start">
            {{ artistSlot }}
          </th>
          <th class="text-xl font-normal py-2 px-2 pr-6 text-end">
            {{ durationSlot }}
          </th>
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
  titleSlot: any;
  artistSlot: any;
  durationSlot: any;
};

export default {
  name: "track-table",

  props: ["titleSlot", "artistSlot", "durationSlot"],
};
</script>