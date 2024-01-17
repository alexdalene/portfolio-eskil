<script>
    import Feautured from "$lib/landing/Feautured.svelte";
    import Hero from "$lib/landing/Hero.svelte";
    import Navigation from "$lib/landing/Navigation.svelte";
</script>

<Hero />
<Navigation />
<Feautured />

<section class="cta">
    <a href="/contact">Contact me</a>
</section>

<style>
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
