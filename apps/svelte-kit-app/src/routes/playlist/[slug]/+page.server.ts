import { api } from '../../../service/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, params }) {
  const access_token = cookies.get('access_token');
  const playlistDetails = await api.getPlaylistDetails(params.slug, access_token);

  return playlistDetails;
}
