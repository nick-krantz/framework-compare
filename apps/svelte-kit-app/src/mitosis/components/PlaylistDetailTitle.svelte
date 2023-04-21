<script context="module" lang="ts">
  type PlaylistDetailTitleProps = {
    name: string;
    description: string;
  };
</script>

<script lang="ts">
  export let name: PlaylistDetailTitleProps["name"];
  export let description: PlaylistDetailTitleProps["description"];
</script>

<h1 class="text-5xl font-normal text-center">{name}</h1>

<p class="text-2xl font-light mb-5 text-center">{description}</p>
