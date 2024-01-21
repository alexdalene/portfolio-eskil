<section>
    <h1>About Me</h1>
    <div class="wrapper">
        <div>
            <p>Hi, my name is Eskil Falnes-Malmo. I am a graphic designer from Norway, currently living in Kristiansand.</p>
            <p>I am passionate for branding, marketing, illustration and typography. I love finding ways to visualise feelings and creating cohesive identities.</p>
            <p>I am currently on my second year of a two-year Graphic Design Vocational Degree at Noroff Vocational School. I´m learning a lot about how to approach projects in the correct way and how to not skip any steps in the process.</p>
            <p>I am taking on projects when I can on the side, to build up crucial experience and to expand my portfolio.</p>
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
            font-weight: 700;
            font-size: 3rem;
            margin-bottom: 2rem;
        }

        & p {
            line-height: 1.5;
            margin-bottom: 1rem;
            max-width: 500px;
        }

        & .wrapper {
            display: flex;
            gap: 1rem;

            @media (max-width: 920px) {
                flex-direction: column-reverse;
            }

            & div {
                flex: 1 1 0;
            }

            & img {
                width: fit-content;
                height: 400px;
                object-fit: contain;
                flex: 1 1 0;
                margin-bottom: 2rem;

                @media (max-width: 920px) {
                flex-direction: column-reverse;
                height: 100%;
            }
            }
        }
    }
</style>