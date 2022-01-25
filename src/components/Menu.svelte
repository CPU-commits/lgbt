<script>
    export let path

    let open

    const toggleMenu = () =>{
        open = !open
    }
</script>

<style>
    .Header{
        height: 100%;
        background-color: white;
        position: fixed;
        z-index: 9;
        transition: all .4s ease;
        display: flex;
        flex-direction: column;
        width: 50px;
        left: -50px;
        justify-content: space-evenly;
        align-items: center;
        box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0,0,0,.5);
    }

    .Selected{
        color: #4a066d;
    }

    .Header a{
        text-decoration: none;
        color: black;
        font-family: 'Work Sans', sans-serif;
        transition: all .4s ease;
        padding: 10px;
        display: flex;
        gap: 5px;
    }

    .Header a:hover{
        color: #4a066d;
    }

    .Header a i{
        font-size: 20px;
        left: 0;
    }

    button{
        border: 2px solid;
        border-radius: 100%;
        background-color: white;
        position: absolute;
        right: -20px;
        z-index: 8;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    button i {
        transition: all .4s ease;
    }

    .Open{
        left: 0;
    }

    .Rotate{
        transform: rotate(180deg);
    }

    
</style>

<nav class="Header" class:Open={open}>
    <a on:click={toggleMenu} sveltekit:prefetch href="/" title="Inicio">
        <i class:Selected={path === '/'} class="fas fa-home"></i>
    </a>
    <a on:click={toggleMenu} sveltekit:prefetch href="/linea_tiempo" title="Linea de tiempo">
        <i class:Selected={path === '/linea_tiempo'} class="fas fa-hourglass-half"></i>
    </a>
    <a on:click={toggleMenu} sveltekit:prefetch href="/definiciones" title="Definiciones">
        <i class:Selected={path === '/definiciones'} class="fas fa-book"></i>
    </a>
    <a on:click={toggleMenu} sveltekit:prefetch href="/mitos" title="Mitos">
        <i class:Selected={path === '/mitos'} class="fas fa-dragon"></i>
    </a>

    <button on:click={toggleMenu} data-message="Abrir menú" title="Abrir menú"> 
        <i class:Rotate={open} class="fas fa-chevron-right"></i>
    </button>
</nav>