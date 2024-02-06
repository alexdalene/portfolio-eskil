<script>
	import Gradient from '$lib/components/Gradient.svelte';

	export let data;

	const { user } = data;
</script>

<Gradient />

<section>
	<h1>About Me</h1>
	<div class="wrapper">
		<div>
			{@html user.fieldData.bio}
			<div class="social">
				<a href={user.fieldData.instagram || "#"}>Instagram</a>
				<a href={user.fieldData.behance || "#"}>Behance</a>
				<a href={user.fieldData.linkedin || "#"}>LinkedIn</a>
				<a href={user.fieldData.tiktok || "#"}>TikTok</a>
			</div>
		</div>
		<img src={user.fieldData.picture.url} alt="this is what eskil looks like, blonde norwegian" />
	</div>
</section>

<style>
	section {
		max-width: 1400px;
		padding-inline: 5%;
		width: 100%;
		margin: 0 auto;

		& h1 {
			font-family: 'Trap', sans-serif;
			font-weight: 600;
			font-size: 3rem;
			margin-bottom: 2rem;
			text-transform: uppercase;
		}

		& p {
			line-height: 1.5;
			margin-bottom: 0.75rem;
			max-width: 500px;
		}

		& .wrapper {
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-items: center;
			gap: 3rem;

			@media (max-width: 920px) {
				grid-template-columns: 1fr;
				padding-bottom: 4rem;
			}

			& .social {
				display: flex;
				gap: 1rem;
				margin-top: 2rem;

				@media (max-width: 920px) {
					flex-direction: column;
					gap: 0.5rem;
				}

				& a {
					color: #1c1c1c;
					text-decoration: none;
					transition: color 150ms ease-in;
					display: flex;
					flex-direction: column;
					gap: 0.25rem;
					font-family: 'Trap', sans-serif;
					font-weight: 700;
					font-size: 1.25rem;
					transition: transform 150ms ease-in;
					width: fit-content;

					&:hover {
						transform: translateY(-2px);
					}
				}
			}

			& img {
				width: fit-content;
				max-width: 100%;
				height: 100%;
				max-height: 400px;
				object-fit: contain;
				margin-block: 4rem;
			}
		}
	}
</style>
