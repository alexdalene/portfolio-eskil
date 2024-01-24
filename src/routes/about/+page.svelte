<script>
    import Gradient from "$lib/components/Gradient.svelte";
</script>

<Gradient />

<section>
    <h1>About Me</h1>
    <div class="wrapper">
        <div>
            <p>Hi, my name is Eskil Falnes-Malmo. I am a graphic designer from Norway, currently living in Kristiansand.</p>
            <p>I am passionate for branding, marketing, illustration and typography. I love finding ways to visualise feelings and creating cohesive identities.</p>
            <p>I am currently on my second year of a two-year Graphic Design Vocational Degree at Noroff Vocational School. I´m learning a lot about how to approach projects in the correct way and how to not skip any steps in the process.</p>
            <p>I am taking on projects when I can on the side, to build up crucial experience and to expand my portfolio.</p>
            <div class="social">
                <a href=".">Instagram</a>
                <a href=".">Behance</a>
                <a href=".">LinkedIn</a>
                <a href=".">TikTok</a>
            </div>
        </div>
        <img src="/images/profile.webp" alt="this is what eskil looks like, blonde norwegian">
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
            margin-bottom: 0.5rem;
            max-width: 500px;
        }

        & .wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 0.5rem;

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
                height: 100%;
                max-height: 400px;
                object-fit: contain;
                margin-block: 4rem;
            }
        }
    }
</style>