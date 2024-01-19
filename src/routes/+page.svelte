<script>
    import Work from "$lib/components/Work.svelte";

    import { gsap } from "$lib/gsap";
    import { onMount } from "svelte";

    const tl = gsap.timeline();

    onMount(() => {
        tl.from(".hero h1", {
            x: -100,
            opacity: 0,
            duration: 0.4,
        })
        .from(".hero h2", {
            x: -100,
            opacity: 0,
            duration: 0.4,
        }, "<=0.2")
        .from(".hero svg", {
            x: -200,
            opacity: 0,
            duration: 0.4,
        }, "<=0.2")
        .from(".navigation li", {
            x: -100,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
        }, "<=0.2")
    });

    /** @type {import('./$types').LayoutData} */
	export let data;
    console.log(data.items);
</script>

<section class="hero">
    <h1>Eskil Falnes-Malmo</h1>
    <h2>graphic designer</h2>
    <svg xmlns="http://www.w3.org/2000/svg" width="504" height="21" viewBox="0 0 504 21" fill="none">
        <path d="M2 10.5C18.6667 0.5 35.3333 0.5 52 10.5C68.6667 20.5 85.3333 20.5 102 10.5C118.667 0.5 135.333 0.5 152 10.5C168.667 20.5 185.333 20.5 202 10.5C218.667 0.5 235.333 0.5 252 10.5C268.667 20.5 285.333 20.5 302 10.5C318.667 0.5 335.333 0.5 352 10.5C368.667 20.5 385.333 20.5 402 10.5C418.667 0.5 435.333 0.5 452 10.5C468.667 20.5 485.333 20.5 502 10.5" stroke="#101010" stroke-width="5"/>
    </svg>
</section>

<ul class="navigation">
    <li><a href="/brand-identity"><span>01</span>Brand Identity</a></li>
    <li><a href="/logo-design"><span>02</span>Logo Design</a></li>
    <li><a href="/packaging"><span>03</span>Packaging</a></li>
    <li><a href="/posters"><span>04</span>Posters</a></li>
    <li><a href="/ux-ui"><span>05</span>UX / UI</a></li>
</ul>

<section class="featured">
    <h2>Featured Work</h2>
    <div class="project-container">
        {#each data.items as item}
            <Work src={item.fieldData["main-project-image"].url} href={"/projects/" + item.fieldData.slug}/>
        {/each}
    </div>
</section>

<section class="cta">
    <a href="/contact">Contact me</a>
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
        }

        & h2 {
            font-family: 'Trap', sans-serif;
            font-weight: 600;
            font-size: 3rem;
        }

        & svg {
            margin-top: 2rem;
            width: 100%;
            max-width: 468px;
            height: auto;
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

        & a {
            color: #1C1C1C;
            text-decoration: none;
            transition: color 150ms ease-in;
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            width: fit-content;
            margin: 0 auto;

            &:hover {
                color: #E49644;
            }
        }
    }

    .navigation {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
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
        margin-top: 4rem;

        & li {
            width: fit-content;
        }

        & span {
            color: #a0a0a0;
            font-weight: 400;
            font-family: 'azo-sans-web', sans-serif;
        }

        & a {
            color: #1C1C1C;
            text-decoration: none;
            transition: color 150ms ease-in;
            display: flex;
            flex-direction: column;
            gap: 0.25rem;

            &:hover {
                color: #E49644;
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
            font-size: 2rem;
            margin-top: 4rem;
            margin-bottom: 1.5rem;
        }

        & .project-container {
            display: grid;
            grid-template-columns: repeat(2, minmax(200px, 1fr));
            
            @media (max-width: 768px) {
                grid-template-columns: 1fr;
            }
        }
    }

</style>
