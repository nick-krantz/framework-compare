<template>
  <div class="flex items-center gap-4 w-full">
    <div><slot /></div>

    <template v-if="sorted">
      <template v-if="ascending">
        <div>
          <up-arrow></up-arrow>
        </div>
      </template>

      <template v-else>
        <div>
          <down-arrow></down-arrow>
        </div>
      </template>
    </template>

    <template v-else>
      <div class="w-6"></div>
    </template>
  </div>
</template>

<script lang="ts">
type TableHeaderProps = {
  children: any;
  sorted: boolean;
  ascending: boolean;
};

import DownArrow from "./DownArrow.vue";
import UpArrow from "./UpArrow.vue";

export default {
  name: "table-header",
  components: { DownArrow: DownArrow, UpArrow: UpArrow },
  props: ["sorted", "ascending"],
};
</script>