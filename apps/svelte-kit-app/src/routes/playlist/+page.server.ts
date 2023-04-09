import { api } from '../../service/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	const access_token = cookies.get('access_token');
	const playlistResponse = await api.getPlaylists(access_token);

	return playlistResponse;
}
