<script>
    import 'animate.css'
    import Time from '$components/Time.svelte'

    const time = {
        title: 'Comienzo',
        icon: '<i class="fas fa-hourglass-start"></i>',
        description: 'gfr',
        src: 'https://todomejora.org/wp-content/uploads/2016/07/pride-85.jpg',
        alt: 'Edsfds',
        bajada: 'Bajada'
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
        /*font-size: 2rem;*/
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
        margin-bottom: 400px;
    }

    .Changes__content{
        padding: 30px;
        text-align: center;
    }
</style>

<svelte:head>
    <title>LGBT</title>
</svelte:head>

<section class="Banner">
    <div class="Banner__content animate__animated animate__fadeIn">
        <h1>LGBTIQ+</h1>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur nec nunc orci finibus luctus aenean tristique.</p>
    </div>
</section>

<section class="Information">
    <div class="Information__content">
        <h2>¿Qu&eacute; es LGBTIQ+?</h2>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Amet class etiam ornare luctus commodo semper dapibus. Fermentum gravida neque turpis posuere maximus. Varius lobortis aliquet nisl nascetur pulvinar aenean. Fringilla himenaeos mus ridiculus arcu purus morbi. Interdum proin mollis convallis mattis sed tincidunt hendrerit eleifend. Auctor purus class taciti semper etiam.</p>
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
        <h2>¿Qu&eacute; cambios podemos aplicar?</h2>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Integer nascetur natoque class rutrum diam. Maecenas laoreet posuere donec nascetur. Augue feugiat luctus torquent primis nam inceptos. Penatibus lectus id cras, tortor turpis habitasse. Faucibus vivamus ex amet eu venenatis ultrices. Efficitur nulla conubia per purus nibh primis.</p>
    </div>
</section>

<iframe width="942" height="539" src="https://www.youtube.com/embed/jENodz13xR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>