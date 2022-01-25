<script>
    import 'animate.css'
    import Time from '$components/Time.svelte'

    const time = {
            title: '1969, Estados Unidos',
            icon: '<img alt="Bandera de Estados Unidos" width="30px" src="https://img.icons8.com/color/48/000000/usa-circular.png"/>',
            description: 'Marcha multitudinaria en Stonewall de diversidades sexuales reclamando por la discriminación constante que sufrían por su identidad donde luchan contra la policía.',
            alt: 'Marcha de Stonewall',
            bajada: 'Marcha de Stonewall',
            src: '/images/lt/1969.jpg',
            color: '#081bc7'
    }
</script>

<style>
    .Banner{
        width: 100%;
        height: 300px;
        background-image: url(/images/bandera.jpg);
        background-repeat: no-repeat, repeat;
        background-position: center;
        background-size: cover;
    }

    .Banner__content{
        background: rgba(0,0,0,0.4);
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
        border: 1px solid rgba(0,0,0,0.2);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: white;
        padding: 20px;
        box-sizing: border-box;
    }

    .Banner h1{
        font-family: 'Work Sans', sans-serif;
        font-size: 2rem;
        text-align: center;
    }

    .Information{
        margin: 40px;
    }

    .Information__content{
        background-color: #3e46b5;
        color: white;
        padding: 20px;
        border-radius: 10px;
        -webkit-box-shadow: 5px 5px 0 2.5px #15143d;
        -moz-box-shadow: 5px 5px 0 2.5px #15143d;
        box-shadow: 5px 5px 0 2.5px #15143d;
    }

    .History{
        color: white;
        padding: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .History h2{
        text-align: center;
        color: #821252;
        /*font-size: 2rem;*/
        margin: 20px;
    }

    .History__content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .Changes{
        width: 100%;
        background-color: #d7102e;
        color: white;
        margin-bottom: 30px;
    }

    .Changes__content{
        padding: 30px;
        text-align: center;
    }

    iframe{
        width: 100%;
        margin-bottom: 400px;
    }
</style>

<svelte:head>
    <title>LGBT</title>
</svelte:head>

<section class="Banner">
    <div class="Banner__content animate__animated animate__fadeIn">
        <h1>LGBTIQ+</h1>
        <p>Diversidad, <i class="fas fa-heart"></i> & <i class="fas fa-fist-raised"></i></p>
    </div>
</section>

<section class="Information">
    <div class="Information__content">
        <h2>¿Qu&eacute; es LGBTIQ+?</h2>
        <p>Son las siglas para referirse a personas lesbianas, gays, bisexuales, trans e internsexuales. Pueden encontrarse en otro orden y se puede tanto, agregar como quitar siglas para considerar toda la diversidad sexual.</p>
    </div>
</section>

<section class="History">
    <h2>Un poco de historia</h2>
    <div class="History__content">
        <Time time={time} />
    </div>
</section>

<section class="Changes">
    <div class="Changes__content">
        <h2>¿Cu&aacute;l es nuestro objetivo;?</h2>
        <p>A trav&eacute;s de esta web poder transmitir la historia LGBT, todo lo que se ha conseguido y todo lo que falta por construir. La informaci&oacute;n es la principal arma para combatir la homof&oacute;bia y acoso, es por ello que a trav&eacute;s de esta misma, daremos a conocer definiciones y mitos sobre la sexualidad. Educando a las personas, para entender la importancia de la educaci&oacute;n sexual, y sobre todo la tolerancia.</p>
    </div>
</section>

<iframe height="539" src="https://www.youtube.com/embed/jENodz13xR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>