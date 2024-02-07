<script>
    export let data;

    const { posters } = data;

    console.log(posters);
</script>

<section>
    <h1>My Posters</h1>

   <div class="projects-grid">
        {#each posters as poster}
            <a class="project" href={`/posters/${poster.fieldData.slug}`}>
                <img src={poster.fieldData.thumbnail?.url} alt={poster.fieldData.name} />
                <!-- <h2>{poster.fieldData.name}</h2> -->
            </a>
        {/each}
   </div>
</section>

<style>
    section {
        & h1 {
            font-family: 'Trap', sans-serif;
            font-weight: 600;
            font-size: 3rem;
            margin-bottom: 2rem;
            text-transform: uppercase;
        }
    }

    .projects-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0.5rem;
            margin-bottom: 6rem;

            @media (max-width: 768px) {
                grid-template-columns: repeat(3, 1fr);
            }

            @media (max-width: 604px) {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
    }

    .project {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        text-decoration: none;
        color: #fff;
        transition: filter 150ms ease-in;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            aspect-ratio: 3 / 4;
        }

        & h2 {
            font-family: 'azo-sans-web', sans-serif;
            font-weight: 400;
            font-size: 1.3rem;
            color: #000;
        }

        &:hover {
            filter: grayscale(100%);
        }
    }


</style>