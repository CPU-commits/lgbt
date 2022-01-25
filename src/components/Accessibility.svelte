<script>
    import { onMount } from "svelte"

    let isGray = false
    let isInvested = false
    let open = false
    let scroll = 0

    const minusFont = () =>{
        let documentFontSize = document.body.style.fontSize
        let fontSize = 16
        if (documentFontSize !== ''){
            const fontSizeNumber = documentFontSize.substring(0, 2)
            fontSize = parseInt(fontSizeNumber) - 1
        }
        if (fontSize < 16)
            fontSize = 16
        document.body.style.fontSize = `${fontSize}px`
    }

    const plusFont = () =>{
        let documentFontSize = document.body.style.fontSize
        let fontSize = 16
        if (documentFontSize !== ''){
            const fontSizeNumber = documentFontSize.substring(0, 2)
            fontSize = parseInt(fontSizeNumber) + 1
        }
        if (fontSize > 30)
            fontSize = 30
        document.body.style.fontSize = `${fontSize}px`
    }

    const gray = () =>{
        let images = document.getElementsByTagName('img')
        for (let index = 0; index < images.length; index++) {
            let image = images[index]
            if (isGray)
                image.style.filter = 'none'
            if (!isGray)
                image.style.filter = 'grayscale(1)'
        }
        isGray = !isGray
    }

    const invested = () =>{
        let images = document.getElementsByTagName('img')
        for (let index = 0; index < images.length; index++) {
            let image = images[index]
            if (isInvested)
                image.style.filter = 'none'
            if (!isInvested)
                image.style.filter = 'invert(1)'
        }
        isInvested = !isInvested
    }

    const toggleMenu = () => open = !open

    onMount(()=>{
		window.onscroll = () =>{
			var B= document.body
            var D= document.documentElement
            D= (D.clientHeight) ? D: B
            scroll = D.scrollTop
		}
    })
</script>

<style>
    .Accessibility{
        position: fixed;
        right: 0;
        z-index: 10;
        top: 60px;
        transition: all .4s ease;
    }

    .Accessibility button {
        width: 50px;
        height: 50px;
        background-color: #236478;
        font-size: 1.3rem;
        border: none;
        color: white;
        cursor: pointer;
    }

    .Accessibility_menu{
        visibility: hidden;
        position: absolute;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        width: 100%;
        z-index: 9;
    }

    .Accessibility_menu__content{
        position: absolute;
        display: none;
        width: 200px;
        height: 100%;
        right: -200px;
        transition: all .4s ease;
        background-color: #236478;
    }

    .father_open{
        visibility: visible;        
    }

    .open{
        display: block;
        right: 0px;
    }

    .button_open{
        right: 200px;
    }

    h3{
        padding: 0 10px;
        color: white;
    }

    ul{
        list-style: none;
        display: flex;
        justify-content: center;
    }

    ul li{
        padding: 10px;
        box-sizing: border-box;
        width: 100%;
        text-align: center;
    }

    ul li button{
        background-color: transparent;
        border: 1px solid;
        width: 100%;
        color: white;
        cursor: pointer;
        font-size: 1.5rem;
    }
</style>

<aside class="Accessibility" class:button_open={open}>
    <button data-message="Abrir menú accesibilidad" title="Abrir menú accesibilidad" on:click={toggleMenu}>
        <i class="fab fa-accessible-icon"></i>
    </button>
</aside>

<menu style="top: {scroll}px" class="Accessibility_menu" class:father_open={open}>
    <div class="Accessibility_menu__content" class:open={open}>
        <h3>Tamaño fuente</h3>
        <ul>
            <li><button data-message="Agrandar fuente" on:click={plusFont}><i class="fas fa-plus"></i> A</button></li>
            <li><button data-message="Disminuir fuente" on:click={minusFont}><i class="fas fa-minus"></i> A</button></li>
        </ul>
        <ul>
            <li><button data-message="Imagenes en escala de grises" on:click={gray}>Imagenes escala grises</button></li>
        </ul>
        <ul>
            <li><button data-message="Imagenes colores invertidos" on:click={invested}>Imagenes colores invertidos</button></li>
        </ul>
    </div>
</menu>