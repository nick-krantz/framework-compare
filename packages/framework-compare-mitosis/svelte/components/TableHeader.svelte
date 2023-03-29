<script context="module" lang="ts">
  type TableHeaderProps = {
    children: any;
    sorted: boolean;
    ascending: boolean;
  };
</script>

<script lang="ts">
  import DownArrow from "./DownArrow.svelte";
  import UpArrow from "./UpArrow.svelte";

  export let sorted: TableHeaderProps["sorted"];
  export let ascending: TableHeaderProps["ascending"];
</script>

<div class="flex items-center gap-4 w-full">
  <div><slot /></div>

  {#if sorted}
    {#if ascending}
      <div>
        <UpArrow />
      </div>
    {:else}
      <div>
        <DownArrow />
      </div>
    {/if}
  {:else}
    <div class="w-6" />
  {/if}
</div>