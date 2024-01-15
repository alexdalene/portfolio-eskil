<script>
    import Feautured from "$lib/landing/Feautured.svelte";
    import Hero from "$lib/landing/Hero.svelte";
    import Navigation from "$lib/landing/Navigation.svelte";
    import gsap from "gsap";
    import { onMount } from "svelte";

    onMount(() => {
        gsap.to("#green-1", { duration: 6, x: -200, y: 75, yoyo: true, repeat: -1, ease: "power1.inOut" });
        gsap.to("#blue-1", { duration: 6, x: -100, y: -50, yoyo: true, repeat: -1, ease: "power1.inOut" });
        gsap.to("#blue-2", { duration: 6, x: -50, y: -100, yoyo: true, repeat: -1, ease: "power1.inOut" });
        gsap.to("#orange-1", { duration: 6, x: 50, y: 100, yoyo: true, repeat: -1, ease: "power1.inOut" });
        gsap.to("#orange-2", { duration: 6, x: 50, y: -150, opacity: 0.1, yoyo: true, repeat: -1, ease: "power1.inOut" });
    });
</script>

<Hero />
<Navigation />
<Feautured />

<section class="cta">
    <a href="/contact">Contact me</a>
</section>

<div id="green-1"></div>
<div id="blue-1"></div>
<div id="blue-2"></div>
<div id="orange-1"></div>
<div id="orange-2"></div>

<style>
    div {
        position: absolute;
        width: 30rem;
        height: 30rem;
        border-radius: 100%;
        filter: blur(65px);
    }

    #green-1 {
        background: #28faa9c2;
        top: -100px;
        right: -50px;
        z-index: -1;
    }

    #blue-1 {
        background: #3067e7b3;
        top: -75px;
        right: 200px;
        z-index: -1;
    }

    #blue-2 {
        background: #3067e7b3;
        top: 50px;
        right: -100px;
        z-index: -1;
    }
    
    #orange-1 {
        background: #e87d1fbc;
        top: -300px;
        right: -100px;
        z-index: -3;
    }

    #orange-2 {
        background: #e87d1fbc;
        top: 150px;
        right: 0px;
        z-index: -1;
    }

    .cta {
        max-width: 1100px;
        width: 100%;
        margin: 0 auto;
        margin-block: 4rem;
        text-align: center;
        font-family: 'Trap', sans-serif;
        font-weight: 700;
        font-size: 1.5rem;

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

</style>
