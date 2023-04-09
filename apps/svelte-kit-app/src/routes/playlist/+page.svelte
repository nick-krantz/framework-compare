<script>
	import {
		PlaylistList,
		PlaylistListItem,
		PlaylistLink,
		PlaylistImage,
		PlaylistDetails
	} from '../../mitosis';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<PlaylistList>
	{#each data.items as playlist}
		<PlaylistListItem v-for="playlist in playlists">
			<PlaylistLink href={`/playlist/${playlist.id}`}>
				<PlaylistImage name={playlist.name} url={playlist.images[0].url} />
				<PlaylistDetails
					name={playlist.name}
					description={playlist.description}
					tracksTotal={playlist.tracks.total}
				/>
			</PlaylistLink>
		</PlaylistListItem>
	{/each}
</PlaylistList>
