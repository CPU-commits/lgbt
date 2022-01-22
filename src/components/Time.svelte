<script>
    export let time
</script>

<style>
    .Label{
        background-color: white;
        color: black;
        padding: 10px;
        border-radius: 10px;
        /*font-size: 1rem;*/
        position: absolute;
        top: 20px;
    }

    .Label p {
        font-family: 'Work Sans', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        color: black;
    }

    .History__content--history{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        /*font-size: 1.2rem;*/
        gap: 20px;
        margin-bottom: 20px;
        max-width: 1000px;
        border-radius: 20px;
        width: 100%;
        padding: 20px;
    }

    .History__history--description, figcaption{
        color: white;
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
</style>

<div class="History__content--history" style="background-color: {time.color}">
    <div class="Label">
        <p>{time.title} {@html time.icon}</p>
    </div>
    <p class="History__history--description">{time.description}</p>
    <figure class="Image">
        <img src={time.src} alt={time.alt}>
        <figcaption>{time.bajada}</figcaption>
    </figure>
</div>