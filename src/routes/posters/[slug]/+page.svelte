<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    export let data;

    let item;
    let posters;

    $: {
        posters = data.posters;
        item = posters.find((item) => item.fieldData.slug === $page.params.slug);
        updateNextProject();
    }

    let nextProjectSlug;

    function updateNextProject() {
        const currentIndex = posters.indexOf(item);
        nextProjectSlug = posters[(currentIndex + 1) % posters.length].fieldData.slug;
    }

    function nextProject() {
        goto(`/posters/${nextProjectSlug}`);
    }
</script>

<div class="title">
	<h1>POSTER</h1>
</div>
<section class="container">
	<div class="wrapper">
        <img src={item.fieldData.thumbnail?.url} alt="poster thumbnail" />
	</div>
	<button on:click={nextProject}
		>Next project <span class="material-symbols-outlined">east</span></button
	>
</section>

<section class="carousel">
    {#each posters as poster}
        {#if poster.fieldData.slug !== item.fieldData.slug}
            <a class="project" href={`/posters/${poster.fieldData.slug}`}>
                <img src={poster.fieldData.thumbnail?.url} alt={poster.fieldData.name} />
            </a>
        {/if}
    {/each}
</section>

<style>
	.title {
		margin-bottom: 2rem;

		& h1 {
			font-family: 'Trap', sans-serif;
			font-weight: 700;
			font-size: 3rem;
		}
	}

	.container {
		display: flex;
        flex-direction: column;

        & button {
            margin-top: 2rem;
            background: none;
            border: none;
            font-family: 'Trap', sans-serif;
            font-weight: 700;
            font-size: 1.25rem;
            transition: color 150ms ease-in;
            align-self: end;
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
	}

	.wrapper {
		max-width: 1400px;
        margin: 0 auto;

		& img {
				width: 100%;
				height: 100%;
				object-fit: cover;
                aspect-ratio: 3 / 4;
                max-width: 568px;
		}
	}

    .carousel {
        display: flex;
        gap: 1rem;
        margin-bottom: 6rem;
        margin-top: 8rem;
        overflow-x: scroll;
        padding-bottom: 10px;
        width: 100%;


        @media (max-width: 768px) {
                margin-block: 4rem;
            }
        mask-image: linear-gradient(to right, transparent, #fff 10%, #fff 90%, transparent);

        &::-webkit-scrollbar {
            height: 8px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #e49644;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-track {
            background-color: #fff;
        }

        & a {
            flex: 0 0 25%;
            width: 100%;
            height: 100%;
            transition: filter 150ms ease-in;

            @media (max-width: 768px) {
                flex: 0 0 50%;
            }

            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                aspect-ratio: 3 / 4;
            }

            &:hover {
                filter: grayscale(100%);
            }
        }
    }
</style>
