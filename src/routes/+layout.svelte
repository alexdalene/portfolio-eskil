<script>
	import { gsap, ScrollTrigger } from '$lib/gsap';

	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let coords = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.1,
			damping: 0.4,
		}
	);

	let size = spring(20);

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('.navbar', {
			scrollTrigger: {
				trigger: 'body',
				start: 'top top',
				end: '=+100',
				scrub: true
			},
			y: -200,
			ease: 'power1.inOut'
		});
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://use.typekit.net/xua3jwt.css" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
	/>
</svelte:head>

<svelte:window
	on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY });
	}}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(20)}
/>

<svg class="cursor" role="presentation">
	<circle cx={$coords.x} cy={$coords.y} r={$size} />
</svg>

<header class="navbar">
	<nav>
		<a href="/" aria-label="logo"><img src="/logo.webp" alt="logo for the portfolio" /></a>
		<a href="/">home</a>
		<a href="/about">about&nbsp;me</a>
		<a href="/contact">contact</a>
	</nav>
	<a href="mailto:efalnesmalmo@gmail.com" id="mail"
		><span class="material-symbols-outlined"> mail </span></a
	>
</header>

<main>
	<slot />
</main>

<footer class="footer">
	<section>
		<div>
			<a href="."><img src="/icons/instagram.svg" alt="instagram logo" /> @fmdoesdesign</a>
			<a href="."><img src="/icons/behance.svg" alt="behance logo" /> Eskil Falnes-Malmo</a>
			<a href="."><img src="/icons/tiktok.svg" alt="tiktok logo" /> @fmdoesdesign</a>
			<a href="."><img src="/icons/linkedin.svg" alt="linkedin logo" /> Eskil Falnes-Malmo</a>
		</div>
		<p>© Eskil Falnes-Malmo 2023</p>
	</section>
</footer>

<style>
	:global(*) {
		cursor: none !important;
		box-sizing: border-box;
		margin: 0;
		padding: 0;

		&::selection {
			background: #e49644;
			color: #fff;
		}
	}

	:global(body) {
		font-family: 'azo-sans-web', sans-serif;
		font-weight: 400;
		font-style: normal;
		font-size: 16px;
		-webkit-font-smoothing: antialiased;
		overflow-x: hidden;
	}

	.cursor {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 999;
		fill: #e49644;
		pointer-events: none;
		mix-blend-mode: difference;
		transition: all 150ms ease-in;
	}

	.navbar {
		position: sticky;
		top: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: 1rem;
		padding-inline: 5%;
		max-width: 1400px;
		margin: 0 auto;
		z-index: 100;

		& nav {
			display: flex;
			align-items: center;
			gap: 2rem;
		}

		& a img {
			width: auto;
			height: 2.5rem;
		}

		& a {
			color: #1c1c1c;
			text-decoration: none;
			font-size: 1rem;
			text-transform: lowercase;
			transition: color 150ms ease-in;

			&:hover {
				color: #e49644;
			}
		}

		& #mail {
			@media (max-width: 768px) {
				display: none;
			}
		}
	}

	main {
		min-height: calc(100svh);
		padding-top: 2rem;
		position: relative;
	}

	.footer {
		background: #1c1c1c;
		color: #fff;
		min-height: 14rem;
		display: flex;
		align-items: center;
		padding-inline: 5%;

		& a {
			color: #fff;
			text-decoration: none;
		}

		& section {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			width: 100%;
			max-width: 1100px;
			margin: 0 auto;

			@media (max-width: 768px) {
				flex-direction: column;
				align-items: center;
				gap: 2rem;
			}

			& div {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-gap: 1rem;

				& a {
					display: flex;
					gap: 0.5rem;
					align-items: center;
					color: #fff;
					text-decoration: none;
				}
			}

			& p {
				color: #909090;
			}
		}
	}

	@font-face {
		font-family: 'Trap';
		font-style: normal;
		font-weight: 400;
		src:
			local('Trap Regular'),
			local('Trap-Regular'),
			url('$lib/fonts/trapRegular.otf') format('opentype');
	}

	@font-face {
		font-family: 'Trap';
		font-style: normal;
		font-weight: 600;
		src:
			local('Trap Semibold'),
			local('Trap-Semibold'),
			url('$lib/fonts/trapSemiBold.otf') format('opentype');
	}

	@font-face {
		font-family: 'Trap';
		font-style: normal;
		font-weight: 700;
		src:
			local('Trap Bold'),
			local('Trap-Bold'),
			url('$lib/fonts/trapBold.otf') format('opentype');
	}
</style>
