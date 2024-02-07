<script>
	import Work from '$lib/components/Work.svelte';
	import Gradient from '$lib/components/Gradient.svelte';

	import { gsap } from '$lib/gsap';
	import { onMount } from 'svelte';

	const tl = gsap.timeline();

	onMount(() => {
		tl.from('.hero h1', {
			x: -100,
			opacity: 0,
			duration: 0.4
		})
			.from(
				'.hero h2',
				{
					x: -100,
					opacity: 0,
					duration: 0.4
				},
				'<=0.2'
			)
			.from(
				'.navigation li',
				{
					x: -100,
					opacity: 0,
					duration: 0.4,
					stagger: 0.1
				},
				'<=0.2'
			)
			.to(
				'#path',
				{
					strokeDashoffset: 0,
					duration: 2,
					ease: 'power1.inOut'
				},
				'<=0.2'
			);
	});

	export let data;

	console.log(data);

	const { projects, posters } = data;
</script>

<Gradient />

<section class="hero">
	<h1>Eskil Falnes-Malmo</h1>
	<h2>graphic designer</h2>
	<svg xmlns="http://www.w3.org/2000/svg" width="504" height="21" viewBox="0 0 504 21" fill="none">
		<path
			d="M2 10.5C18.6667 0.5 35.3333 0.5 52 10.5C68.6667 20.5 85.3333 20.5 102 10.5C118.667 0.5 135.333 0.5 152 10.5C168.667 20.5 185.333 20.5 202 10.5C218.667 0.5 235.333 0.5 252 10.5C268.667 20.5 285.333 20.5 302 10.5C318.667 0.5 335.333 0.5 352 10.5C368.667 20.5 385.333 20.5 402 10.5C418.667 0.5 435.333 0.5 452 10.5C468.667 20.5 485.333 20.5 502 10.5"
			stroke="#101010"
			stroke-width="5"
			id="path"
		/>
	</svg>
</section>

<ul class="navigation">
	<li><a href="/projects">Projects</a></li>
	<li><a href="/posters">Posters</a></li>
</ul>

<section class="featured">
	<h2>Featured Work</h2>
	<div class="project-wrapper">
		<div class="project-container">
			<Work
				src={projects[0].fieldData['main-project-image'].url}
				href={'/projects/' + projects[0].fieldData.slug}
			/>
			<Work
				src={posters[0].fieldData.thumbnail.url}
				href={'/posters/' + posters[0].fieldData.slug}
			/>
		</div>
		<div class="project-container">
			<Work
				src={posters[1].fieldData.thumbnail.url}
				href={'/posters/' + posters[1].fieldData.slug}
			/>
			<Work
				src={projects[1].fieldData['main-project-image'].url}
				href={'/projects/' + projects[1].fieldData.slug}
			/>
		</div>
	</div>
</section>

<section class="cta">
	<a href="/about">Contact me</a>
</section>

<style>
	.hero {
		max-width: 1400px;
		padding-inline: 5%;
		width: 100%;
		margin: 0 auto;

		& h1 {
			font-family: 'Trap', sans-serif;
			font-weight: 700;
			font-size: 4rem;

			@media (max-width: 768px) {
				font-size: 3rem;
			}
		}

		& h2 {
			font-family: 'Trap', sans-serif;
			font-weight: 600;
			font-size: 3rem;

			@media (max-width: 768px) {
				font-size: 2rem;
			}
		}

		& svg {
			margin-top: 1rem;
			width: 100%;
			max-width: 468px;
			height: auto;
		}

		& #path {
			stroke-dasharray: 528.55810546875;
			stroke-dashoffset: 528.55810546875;
		}
	}

	.cta {
		max-width: 1100px;
		padding-inline: 5%;
		width: 100%;
		margin: 0 auto;
		margin-block: 6rem;
		text-align: center;
		font-family: 'Trap', sans-serif;
		font-weight: 700;
		font-size: 2rem;
		text-transform: uppercase;

		& a {
			color: #1c1c1c;
			text-decoration: none;
			transition: color 150ms ease-in;
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
			width: fit-content;
			margin: 0 auto;
			transition: transform 150ms ease-in;

			&:hover {
				transform: translateY(-2px);
			}
		}
	}

	.navigation {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		list-style: none;
		padding: 0;
		margin: 0;
		text-transform: uppercase;
		font-family: 'Trap', sans-serif;
		font-weight: 700;
		font-size: 1.5rem;
		max-width: 1400px;
		padding-inline: 5%;
		width: 100%;
		margin: 0 auto;
		margin-top: 5rem;

		& li {
			width: fit-content;
		}

		& span {
			color: #a0a0a0;
			font-weight: 400;
			font-family: 'azo-sans-web', sans-serif;
		}

		& a {
			color: #1c1c1c;
			text-decoration: none;
			transition: color 150ms ease-in;
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
			transition: transform 150ms ease-in;

			&:hover {
				transform: translateX(0.5rem);
			}
		}
	}

	.featured {
		margin: 0 auto;
		max-width: 1400px;
		padding-inline: 5%;

		& h2 {
			font-family: 'Trap', sans-serif;
			font-weight: 700;
			font-size: 3rem;
			margin-top: 5rem;
			margin-bottom: 1rem;

			@media (max-width: 768px) {
				font-size: 2rem;
			}
		}

		& .project-wrapper {
			display: grid;
			grid-template-columns: 1fr 0.75fr;
			gap: 1rem;

			@media (max-width: 768px) {
				grid-template-columns: 1fr;
			}
		}

		& .project-container {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			@media (max-width: 768px) {
				grid-template-columns: 1fr;
			}
		}
	}
</style>
