<script setup>
  const config = useRuntimeConfig()
  const cookie = useCookie("access_token")

  const {data} = await useFetch(`${config.public.spotifyAPIEndpoint}/get-playlists`, {
    method: "GET",
    credentials: "include",
    headers: {
      cookie: `access_token=${cookie.value};`,
    }
  })
  const playlists = data.value.items
</script>

<template>
  <PlaylistList>
      <PlaylistListItem v-for="playlist in playlists">
        <PlaylistLink :href="'/playlist/' + playlist.id">
          <PlaylistImage :name="playlist.name" :url="playlist.images[0].url" />
          <PlaylistDetails
            :name="playlist.name"
            :description="playlist.description"
            :tracks-total="playlist.tracks.total"
          />
        </PlaylistLink>
      </PlaylistListItem>
    </PlaylistList>
</template>
