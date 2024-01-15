<script>
    export let src = "";
</script>

<a href="." >
    <img {src} alt="a graphic design project">
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