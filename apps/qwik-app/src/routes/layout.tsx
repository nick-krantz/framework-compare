import { component$, Slot } from "@builder.io/qwik";
import { Header, PageWrapper, PlaylistIcon } from "~/mitosis";

export default component$(() => {
  return (
    <PageWrapper>
      <Header>
        <a href="/playlist" class="block border rounded-full p-2 text-white border-white">
          <PlaylistIcon />
        </a>
      </Header>
      <main>
        <Slot />
      </main>
    </PageWrapper>
  );
});
