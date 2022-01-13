<script>
    import 'animate.css'
</script>

<style>
    .Banner{
        width: 100%;
        height: 300px;
        background-image: url(images/bandera.jpg);
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
        font-size: 2rem;
        margin: 20px;
    }

    .Label{
        background-color: white;
        color: black;
        padding: 10px;
        border-radius: 10px;
        font-size: 1rem;
        position: absolute;
        top: 20px;
    }

    .Label p {
        font-family: 'Work Sans', sans-serif;
    }

    .History__content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .History__content--history{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        font-size: 1.2rem;
        gap: 20px;
        margin-bottom: 20px;
        max-width: 1000px;
        border-radius: 20px;
        padding: 20px;
        background-color: #821252;
    }

    .First{
        background-color: #d72680;
    }

    .Second{
        background-color: #520b8c;
    }

    .Image{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .Image img{
        max-width: 500px;
    }

    .Image figcaption{
        font-size: .9rem;
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
        <div class="History__content--history First">
            <div class="Label">
                <p>Comienzo <i class="fas fa-hourglass-start"></i></p>
            </div>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Magna nulla mattis nostra gravida hendrerit platea in quis leo dignissim nullam? </p>
            <figure class="Image">
                <img src="https://todomejora.org/wp-content/uploads/2016/07/pride-85.jpg" alt="Manifestación LGBT California">
                <figcaption>Estamos</figcaption>
            </figure>
        </div>
        <div class="History__content--history Second">
            <div class="Label">
                <p>Chile <i class="fas fa-flag"></i></p>
            </div>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Magna nulla mattis nostra gravida hendrerit platea in quis leo dignissim nullam? </p>
            <figure class="Image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Marcha_gay_en_Santiago_de_Chile%2C_2009.jpg" alt="Manifestación Chile">
                <figcaption>Estamos</figcaption>
            </figure>
        </div>
    </div>
</section>

<section class="Changes">
    <div class="Changes__content">
        <h2>¿Qu&eacute; cambios podemos aplicar?</h2>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Integer nascetur natoque class rutrum diam. Maecenas laoreet posuere donec nascetur. Augue feugiat luctus torquent primis nam inceptos. Penatibus lectus id cras, tortor turpis habitasse. Faucibus vivamus ex amet eu venenatis ultrices. Efficitur nulla conubia per purus nibh primis.</p>
    </div>
</section>