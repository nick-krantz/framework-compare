<script setup>
  import { millisecondDisplay, sortTracks } from "framework-compare-utils";

  const config = useRuntimeConfig()
  const cookie = useCookie("access_token")
  const route = useRoute()

  const data = await $fetch(`${config.public.spotifyAPIEndpoint}/get-playlist-details?id=${route.params.id}`, {
    method: "GET",
    credentials: "include",
    headers: {
      cookie: `access_token=${cookie.value};`,
    }
  })

  const name = data.name
  const description = data.description

  const initialState = sortTracks(
    data.tracks?.items.map((i) => i.track) ?? [],
    NAME_COLUMN,
    DESCENDING
  );

  const playlistState = ref({
    tracks: initialState.tracks,
    sortedColumn: NAME_COLUMN,
    sortDirection: initialState.newDirection,
  })

  const sort = (column) => () => {
    const { tracks, sortDirection, sortedColumn } = playlistState.value;

    const newSort = sortTracks(
      tracks,
      column,
      sortedColumn === column ? sortDirection : DESCENDING
    );

    playlistState.value.tracks = newSort.tracks;
    playlistState.value.sortedColumn = column;
    playlistState.value.sortDirection = newSort.newDirection;
  };

</script>

<template>
  <section>
      <PlaylistDetailTitle :name="name" :description="description" />

      <TrackTable>
        <thead>
          <tr>
            <TrackTableHeaderAlbumImage />
            <TrackTableHeaderTitle>
              <button @click="sort(NAME_COLUMN)()" class="w-full">
                <TableHeader :sorted="playlistState.sortedColumn === NAME_COLUMN" :ascending="playlistState.sortDirection === ASCENDING">
                  TITLE
                </TableHeader>
              </button>
            </TrackTableHeaderTitle>
            <TrackTableHeaderArtist>
              <button @click="sort(ARTIST_COLUMN)()" class="w-full">
                <TableHeader :sorted="playlistState.sortedColumn === ARTIST_COLUMN" :ascending="playlistState.sortDirection === ASCENDING">
                  ARTIST
                </TableHeader>
              </button>
            </TrackTableHeaderArtist>
            <TrackTableHeaderDuration>
              <button @click="sort(DURATION_COLUMN)()" class="w-full">
                <TableHeader :sorted="playlistState.sortedColumn === DURATION_COLUMN" :ascending="playlistState.sortDirection === ASCENDING">
                  DURATION
                </TableHeader>
              </button>
            </TrackTableHeaderDuration>
          </tr>
        </thead>

        <tbody>
          <TrackTableRow
            v-for="track in playlistState.tracks"
            :key="track.id"
            :name="track.name"
            :artist="track.artists.map((a) => a.name).join(', ')"
            :imageURL="track.album.images[0].url"
            :duration="millisecondDisplay(track.duration_ms)"
          />
        </tbody>
      </TrackTable>
    </section>
</template>
