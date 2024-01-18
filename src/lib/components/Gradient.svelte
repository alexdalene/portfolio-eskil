<script>
    import { gsap } from "gsap";
    import { onMount } from "svelte";

    let random = gsap.utils.random(-200, 200, 5, true);

    onMount(() => {
        gsap.to("#green-1", { duration: 8, x: random, y: random, yoyo: true, repeat: -1, ease: "sine.out" });
        gsap.to("#blue-1", { duration: 8, x: random, y: random, yoyo: true, repeat: -1, ease: "sine.out" });
        gsap.to("#blue-2", { duration: 8, x: random, y: random, yoyo: true, repeat: -1, ease: "sine.out" });
        gsap.to("#orange-1", { duration: 8, x: random, y: random, yoyo: true, repeat: -1, ease: "sine.out" });
        gsap.to("#orange-2", { duration: 8, x: random, y: random, yoyo: true, repeat: -1, ease: "sine.out" });
    });
</script>

<div class="gradient" aria-hidden="true">
    <div id="green-1"></div>
    <div id="blue-1"></div>
    <div id="blue-2"></div>
    <div id="orange-1"></div>
    <div id="orange-2"></div>
</div>

<style>
    .gradient {
        width: 100%;
        min-height: 120vh;
        position: absolute;
        overflow: hidden;
        top: 0;
        right: 0;

        & div {
            position: absolute;
            width: 30rem;
            height: 30rem;
            border-radius: 100%;
            filter: blur(85px);
        }
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
        z-index: -2;
    }

    #blue-2 {
        background: #3067e7b3;
        top: 50px;
        right: -100px;
        z-index: -1;
        width: 25rem;
        height: 25rem;
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
        z-index: -2;
        width: 25rem;
        height: 25rem;
    }
</style>