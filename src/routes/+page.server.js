import { API_URL, API_TOKEN } from '$lib/loadEnv';

/** @type {import('@sveltejs/kit').Load} */
export async function load({ fetch }) {
	try {
		const [response1, response2] = await Promise.all([
			fetch(API_URL + 'collections/65aa2d77d0107e155736d10a/items', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${API_TOKEN}`
				}
			}),
			fetch(API_URL + 'collections/65c39776374883a499be0a1e/items', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${API_TOKEN}`
				}
			})
		]);

		const data1 = await response1.json();
		const data2 = await response2.json();

		const projects = data1.items.filter((item) => item.fieldData['featured-project']);
		const posters = data2.items.filter((item) => item.fieldData['featured-project']);

		return { projects, posters };
	} catch (error) {
		console.log(error);
		return { status: 500, error: 'Failed to fetch items' };
	}
}
