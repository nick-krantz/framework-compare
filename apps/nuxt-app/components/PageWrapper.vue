<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate to-darkPurple text-white min-h-screen w-full px-6 py-8"
    v-bind="$props"
  >
    <slot />
  </div>
</template>

<script lang="ts">
type PageWrapperProps = {
  children: any;
};

export default {
  name: "page-wrapper",

  props: [],
};
</script>