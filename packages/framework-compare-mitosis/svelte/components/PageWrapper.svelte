<script context="module" lang="ts">
  type PageWrapperProps = {
    children: any;
  };
</script>

<script lang="ts">
</script>

<div
  class="min-h-screen bg-gradient-to-br from-slate to-darkPurple text-white min-h-screen	w-full px-6 py-8"
  {...$$props}
>
  <slot />
</div>