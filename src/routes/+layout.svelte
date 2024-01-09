<nav>
    <a href="/"><img src="/logo.webp" alt="logo for the portfolio"></a>
    <a href="/">home</a>
    <a href="/about">about me</a>
    <a href="/contact">contact</a>
    <img src="/illustrations/WavyLangTynn.svg" alt="a decorative wavy line" aria-hidden="true">
    <a href="mailto:efalnesmalmo@gmail.com">efalnesmalmo@gmail.com</a>
</nav>

<main>
    <slot />
</main>

<footer>
    <section>
        <div>
           <a href="."><img src="/icons/instagram.svg" alt="instagram logo"> @fmdoesdesign</a> 
           <a href="."><img src="/icons/behance.svg" alt="behance logo"> Eskil Falnes-Malmo</a> 
           <a href="."><img src="/icons/tiktok.svg" alt="tiktok logo"> @fmdoesdesign</a> 
           <a href="."><img src="/icons/linkedin.svg" alt="linkedin logo"> Eskil Falnes-Malmo</a> 
        </div>
    <p>© Eskil Falnes-Malmo 2023</p>
    </section>
</footer>

<style>
    :global(body) {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        text-rendering: geometricPrecision;
    }

    :global(h1, h2, h3, h4, h5, h6, p, a, li, ul, ol, figure, figcaption, blockquote, dl, dd, dt, hr) {
        margin: 0;
    }

    nav {
        position: sticky;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 5%;
        padding-block: 1rem;

        & img {
            width: auto;
            height: 0.8rem;
        }

        & a img {
            width: auto;
            height: 2.5rem;
        }
    }

    main {
        min-height: calc(100svh - 10rem);
        padding-inline: 5%;
    }

    footer {
        background: #1C1C1C;
        color: #fff;
        min-height: 10rem;
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
            min-width: 100%;

            & div {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 1rem;

                &  a {
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
</style>