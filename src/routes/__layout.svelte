<script>
    import { page } from '$app/stores'

    import Menu from '$components/Menu.svelte'
    import Accessibility from '$components/Accessibility.svelte'
</script>

<Menu path={($page.url.pathname)} />

<Accessibility />

<main class="Main">
    <slot />
</main>
