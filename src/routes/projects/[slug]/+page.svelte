<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let data;

	let item;

	$: {
		item = data.items.find((item) => item.fieldData.slug === $page.params.slug);
		updateNextProject();
	}

	let nextProjectSlug;

	function updateNextProject() {
		const currentIndex = data.items.indexOf(item);
		nextProjectSlug = data.items[(currentIndex + 1) % data.items.length].fieldData.slug;
	}

	function nextProject() {
		goto(`/projects/${nextProjectSlug}`);
	}
</script>

<div class="title">
	<h1>{item.fieldData.name}</h1>
	<p>Logo & Visual Identity</p>
</div>
<section class="container">
	<div class="wrapper">
		<div class="cover-image">
			<img src={item.fieldData['cover-image']?.url} alt="project cover" />
		</div>
		<div class="description">
			{@html item.fieldData['project-details']}
		</div>
	</div>
	<div class="aside">
		<div>
			<img src={item.fieldData['new-logo']?.url} alt="new logo for client" />
		</div>
		<div>
			<img src={item.fieldData['old-logo']?.url} alt="old logo for client" />
		</div>
	</div>
	<button on:click={nextProject}
		>Next project <span class="material-symbols-outlined">east</span></button
	>
</section>

<style>
	.title {
		margin-bottom: 1.5rem;

		& h1 {
			font-family: 'Trap', sans-serif;
			font-weight: 700;
			font-size: 2rem;
		}

		& p {
			text-transform: lowercase;
			margin-top: 0.25rem;
			font-size: 1.25rem;
			font-family: 'Trap', sans-serif;
			font-weight: 600;
		}
	}

	.container {
		display: grid;
		grid-template-columns: 1fr 0.5fr;
		gap: 2rem;

		@media (max-width: 920px) {
			grid-template-columns: 1fr;
		}
	}

	.wrapper {
		max-width: 1400px;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		& .cover-image {
			width: 100%;
			height: 100%;
			height: 450px;
			display: flex;
			flex-direction: column;
			align-items: end;

			& img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		& .description {
			margin-top: 1rem;
			line-height: 1.5;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1rem;

			@media (max-width: 720px) {
				grid-template-columns: 1fr;
			}
		}
	}

	.aside {
		display: flex;
		flex-direction: column;
		max-height: 700px;
		gap: 1rem;

		@media (max-width: 920px) {
			flex-direction: row;
			max-height: 100%;
			margin-top: 2rem;
		}

		& div {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: end;
		}

		& img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	button {
		margin-top: 2rem;
		background: none;
		border: none;
		font-family: 'Trap', sans-serif;
		font-weight: 700;
		font-size: 1.25rem;
		transition: color 150ms ease-in;
		justify-self: end;
		margin-bottom: 5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		transition: all 150ms ease-in;

		&:hover {
			color: #e49644;
			transform: translateX(0.5rem);
		}
	}
</style>
