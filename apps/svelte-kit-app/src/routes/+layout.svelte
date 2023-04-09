<script>
	import { PageWrapper, Header, PlaylistIcon } from '../mitosis';
	import '../app.css';
</script>

<PageWrapper>
	<Header>
		<a href="/playlist" class="block border rounded-full p-2 text-white border-white">
			<PlaylistIcon />
		</a>
	</Header>
	<main>
		<slot />
	</main>
</PageWrapper>
