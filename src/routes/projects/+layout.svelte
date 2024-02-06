<div>
	<button on:click={() => history.back()}>
		<span class="material-symbols-outlined">west</span>
	</button>

	<slot />
</div>

<style>
	button {
		background: none;
		border: none;
		font-family: 'Trap', sans-serif;
		font-weight: 700;
		font-size: 1.25rem;
		color: #1c1c1c;
		cursor: pointer;
		transition: all 150ms ease-in;
		margin-bottom: 2rem;

		&:hover {
			color: #e49644;
			transform: translateX(-0.5rem);
		}
	}

	div {
		max-width: 1400px;
		padding-inline: 5%;
		margin: 0 auto;
	}
</style>
