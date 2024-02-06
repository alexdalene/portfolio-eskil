import { API_URL, API_TOKEN } from '$lib/loadEnv';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	try {
		const response = await fetch(API_URL + 'collections/65b149a41a06e445f87ec7fe/items', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${API_TOKEN}`
			}
		});

		const data = await response.json();

		return { user: data.items[0] };
	} catch (error) {
		console.log(error);
		return { status: 500, error: 'Failed to fetch items' };
	}
}
