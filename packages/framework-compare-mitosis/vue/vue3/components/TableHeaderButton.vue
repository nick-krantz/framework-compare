<template>
  <button v-bind="$props">
    <slot />

    <template v-if="sorted">
      <div>
        <template v-if="ascending">
          <up-arrow></up-arrow>
        </template>

        <template v-else>
          <down-arrow></down-arrow>
        </template>
      </div>
    </template>
  </button>
</template>

<script lang="ts">
type TableHeaderButtonProps = {
  children: any;
  sorted: boolean;
  ascending: boolean;
} & HTMLButtonElement;

import { ASCENDING, SortDirection } from "framework-compare-types";
import DownArrow from "./DownArrow.vue";
import UpArrow from "./UpArrow.vue";

export default {
  name: "table-header-button",
  components: { DownArrow: DownArrow, UpArrow: UpArrow },
  props: ["sorted", "ascending"],
};
</script>