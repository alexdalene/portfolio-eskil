<script>
    export let data;

    const { projects } = data;

    console.log(projects);
</script>

<section>
    <h1>My Projects</h1>

   <div class="projects-grid">
        {#each projects as project}
            <a class="project" href={`/projects/${project.fieldData.slug}`}>
                <img src={project.fieldData['main-project-image']?.url} alt={project.fieldData.name} />
                <!-- <h2>{project.fieldData.name}</h2> -->
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
            gap: 1rem;
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
        gap: 1rem;
        text-decoration: none;
        color: #fff;
        transition: filter 150ms ease-in;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            aspect-ratio: 1 / 1;
        }

        & h2 {
            font-family: 'azo-sans-web', sans-serif;
            font-weight: 400;
            font-size: 1.5rem;
            color: #000;
        }

        &:hover {
            filter: grayscale(100%);
        }
    }


</style>