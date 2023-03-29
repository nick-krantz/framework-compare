<script context="module" lang="ts">
  type TableHeaderButtonProps = {
    children: any;
    sorted: boolean;
    ascending: boolean;
  } & HTMLButtonElement;
</script>

<script lang="ts">
  import { ASCENDING, SortDirection } from "framework-compare-types";
  import DownArrow from "./DownArrow.svelte";
  import UpArrow from "./UpArrow.svelte";

  export let sorted: TableHeaderButtonProps["sorted"];
  export let ascending: TableHeaderButtonProps["ascending"];
</script>

<button {...$$props}>
  <slot />

  {#if sorted}
    <div>
      {#if ascending}
        <UpArrow />
      {:else}
        <DownArrow />
      {/if}
    </div>
  {/if}
</button>