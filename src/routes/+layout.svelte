<svelte:head>
    <link rel="stylesheet" href="https://use.typekit.net/xua3jwt.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</svelte:head>

<script>
    import Gradient from "$lib/components/Gradient.svelte";
    import { gsap, ScrollTrigger } from "$lib/gsap";

    import { onMount } from "svelte";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".navbar", {
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "=+100",
                scrub: true,
            },
            y: -200,
            ease: "power1.inOut",
        });
    });
</script>

<Gradient />

<header class="navbar">
    <nav>
        <a href="/" aria-label="logo"><img src="/logo.webp" alt="logo for the portfolio"></a>
        <a href="/">home</a>
        <a href="/about">about&nbsp;me</a>
        <a href="/contact">contact</a>
    </nav>
    <a href="mailto:efalnesmalmo@gmail.com" class="mail"><span class="material-symbols-outlined">
        mail
        </span></a>
</header>

<main>
    <slot />
</main>

<footer class="footer">
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
        font-family: 'azo-sans-web', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    :global(h1, h2, h3, h4, h5, h6, p, a, li, ul, ol, figure, figcaption, blockquote, dl, dd, dt, hr) {
        margin: 0;

        &::selection {
            background: #E49644;
            color: #fff;
        }
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
            color: #1C1C1C;
            text-decoration: none;
            font-size: 1rem;
            text-transform: lowercase;
            transition: color 150ms ease-in;

            &:hover {
                color: #E49644;
            }
        }

        & .mail {
            @media (max-width: 768px) {
                display: none;
            }
        }
    }

    main {
        min-height: calc(100svh);
        padding-inline: 5%;
        padding-top: 2rem;
        position: relative;
    }

    .footer {
        background: #1C1C1C;
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

    @font-face {
        font-family: 'Trap';
        font-style: normal;
        font-weight: 400;
        src: 
        local('Trap Regular'), local('Trap-Regular'),
        url('fonts/trapRegular.otf') format('opentype');
    }

    @font-face {
        font-family: 'Trap';
        font-style: normal;
        font-weight: 600;
        src: 
        local('Trap Semibold'), local('Trap-Semibold'),
        url('fonts/trapSemiBold.otf') format('opentype');
    }

    @font-face {
        font-family: 'Trap';
        font-style: normal;
        font-weight: 700;
        src: 
        local('Trap Bold'), local('Trap-Bold'),
        url('fonts/trapBold.otf') format('opentype');
    }
</style>