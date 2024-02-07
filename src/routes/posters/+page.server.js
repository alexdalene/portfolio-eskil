import { API_URL, API_TOKEN } from '$lib/loadEnv';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	try {
		const response = await fetch(API_URL + 'collections/65c39776374883a499be0a1e/items', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${API_TOKEN}`
			}
		});

		const data = await response.json();

		return { posters: data.items };
	} catch (error) {
		console.log(error);
		return { status: 500, error: 'Failed to fetch items' };
	}
}
