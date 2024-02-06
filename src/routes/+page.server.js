import { API_URL, API_TOKEN } from '$lib/loadEnv';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	try {
		const response = await fetch(API_URL + 'collections/65aa2d77d0107e155736d10a/items', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${API_TOKEN}`
			}
		});

		const data = await response.json();

		const featured = data.items.filter((item) => item.fieldData['featured-project']);

		return { featured };
	} catch (error) {
		console.log(error);
		return { status: 500, error: 'Failed to fetch items' };
	}
}
