import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async (response) => {
  throw response.redirect(308, "/playlist");
};

export const head: DocumentHead = {
  title: "Qwik",
};
