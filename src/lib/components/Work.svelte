<script>
    export let src = "";
    export let href = "";
</script>

<a {href} >
    <img {src} alt="a graphic design project" loading="lazy">
</a>

<style>
    a {
        height: fit-content;
    }

    img  {
        width: 100%;
        height: auto;
        transition: filter 150ms ease-in;

        &:hover {
            filter: grayscale(100%);
        }
        }
</style>