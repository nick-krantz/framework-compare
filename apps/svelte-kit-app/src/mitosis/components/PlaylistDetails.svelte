<script context="module" lang="ts">
	type PlaylistDetailsProps = {
		name: string;
		description: string | null;
		tracksTotal: number;
	};
</script>

<script lang="ts">
	import TrackIcon from './TrackIcon.svelte';

	export let name: PlaylistDetailsProps['name'];
	export let description: PlaylistDetailsProps['description'];
	export let tracksTotal: PlaylistDetailsProps['tracksTotal'];
</script>

<div class="grid grid-rows-2">
	<div>
		<h2 class="text-2xl font-medium">{name}</h2>
		<p class="font-light">{description}</p>
	</div>
	<div class="flex gap-3 font-light self-center mb-2">
		<TrackIcon />
		{tracksTotal}
	</div>
</div>
