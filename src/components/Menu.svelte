<script>
    import { onMount } from "svelte"

    let headerOpen
    let documentElement

    const resize = () =>{
        headerOpen = false
        if(documentElement.clientHeight !== documentElement.scrollHeight){
            document.onscroll = () =>{
                if(documentElement.scrollTop > 0){
                    headerOpen = true
                }else{
                    headerOpen = false
                }
            }
        }else{
            headerOpen = true
        }   
    }

    onMount(()=>{
        documentElement = document.documentElement
        resize()
        window.onresize = resize
    })
</script>

<style>
    .Header{
        height: 60px;
        background-color: white;
        position: fixed;
        top: -60px;
        width: 100%;
        z-index: 9;
        transition: all .4s ease;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0,0,0,.5);
    }

    .Header a{
        text-decoration: none;
        color: black;
        font-family: 'Work Sans', sans-serif;
        transition: all .4s ease;
    }

    .Header a:hover{
        color: #4a066d;
    }

    .HeaderOpen{
        top: 0;
    }
</style>

<nav class:HeaderOpen={headerOpen} class="Header">
    <a href="/">Inicio</a>
    <a href="/">Panel</a>
    <a href="/">Panel</a>
    <a href="/">Panel</a>
</nav>