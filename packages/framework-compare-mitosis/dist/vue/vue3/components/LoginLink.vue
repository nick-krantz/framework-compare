<template>
  <a
    class="block w-full rounded-full border border-solid border-white p-2 text-center text-white"
    v-bind="$props"
  >
    Login
  </a>
</template>

<script lang="ts">
type LoginLinkProps = {
  href: string;
};

export default {
  name: "login-link",
};
</script>