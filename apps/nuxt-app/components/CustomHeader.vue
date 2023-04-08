<template>
  <header
    :class="
      _classStringToObject(`
      flex w-full justify-between items-center pb-8 relative mb-14
      before:contents-[''] before:w-full before:absolute before:bottom-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent
    `)
    "
  >
    <nav><slot /></nav>
    <div>
      <img
        class="w-12 h-12 md:w-14 md:h-14 rounded-full ring-2 ring-[#f4f4f4]"
        src="https://i.scdn.co/image/ab6775700000ee850e0f669f4d297b951d26f771"
        alt="user avatar"
      />
    </div>
  </header>
</template>

<script lang="ts">
export type HeaderProps = {
  children: any;
};

export default {
  name: "custom-header",

  props: [],

  methods: {
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== "string") {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
};
</script>
