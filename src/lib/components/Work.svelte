<script>
	export let src = '';
	export let href = '';
</script>

<a {href} class="project">
	<img {src} alt="a graphic design project" />
</a>

<style>
	.project {
		height: fit-content;

		& img {
			width: 100%;
			height: 100%;
			transition: filter 150ms ease-in;
			object-fit: contain;

			&:hover {
				filter: grayscale(100%);
			}
		}
	}
</style>
