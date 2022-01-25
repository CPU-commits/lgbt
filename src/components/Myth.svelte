<script>
    export let myth
</script>

<style>
    .Myth{
        width: 100%;
        margin-bottom: 50px;
    }

    .Myth h2{
        border-block-end: 1px solid #ddd;
        padding-left: 10px;
    }

    p{
        padding: 5px;
    }

    .Source{
        display: flex;
        align-items: center;
    }

    a {
        color: #4507ff;
    }
</style>

<article class="Myth">
    <h2>{myth.title}</h2>
    <p>{@html myth.myth}</p>
    {#if myth?.source}
        <div class="Source">
            <p>Fuente:</p>
            <a target="_blank" rel="external" href="{myth.source}">{myth.sourcetag}</a>
        </div>
    {/if}
</article>