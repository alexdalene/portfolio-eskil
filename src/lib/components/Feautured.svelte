<script>
    import Work from "./Work.svelte";
</script>

<section>
    <h2>Featured Work</h2>
    <div class="grid-2-col">
        <div class="grid-1-col">
            <Work src="/images/baertur.webp" />
            <Work src="/images/redd-havet.webp" />
        </div>
        <div class="grid-1-col">
            <Work src="/images/nostalgia.webp" />
            <Work src="/images/musli.webp" />
        </div>
    </div>
</section>

<style>
    section {
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;

        & h2 {
            font-family: 'Trap', sans-serif;
            font-weight: 700;
            font-size: 2rem;
            margin-top: 4rem;
            margin-bottom: 1.5rem;
        }

        & .grid-2-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1rem;
            
            @media (max-width: 768px) {
                grid-template-columns: 1fr;
            }

            & .grid-1-col {
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 1rem;
            }
        }
    }
</style>