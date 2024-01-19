import { API_URL, API_TOKEN } from '$lib/loadEnv';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch }) {
	try {
		const url = API_URL;
		const token = API_TOKEN;

		const response = await fetch(url + 'collections/65aa2d77d0107e155736d10a/items', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
		throw new Error('Failed to fetch items');
	}
}
