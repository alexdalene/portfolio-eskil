<script>
    import { page } from "$app/stores";

    /** @type {import('./$types').PageData} */
	export let data;
    
    const item = data.items.find((item) => {
        if (item.fieldData.slug === $page.params.slug) {
            return item;
        }
    });

    console.log(item);
</script>

<h1>{item.fieldData.name}</h1>