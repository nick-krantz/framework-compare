<script context="module" lang="ts">
  type PageWrapperProps = {
    children: any;
  };
</script>

<script lang="ts">
</script>

<div
  class="bg-gradient-to-br from-slate to-darkPurple text-white min-h-screen	w-full"
  {...$$props}
>
  <slot />
</div>