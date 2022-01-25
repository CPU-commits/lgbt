<script>
    export let definition
</script>

<style>
    .Definition{
        width: 100%;
        margin-bottom: 50px;
    }

    .Definition h2{
        border-block-end: 1px solid #ddd;
        padding-left: 10px;
    }

    p{
        padding: 5px;
    }
</style>

<article class="Definition">
    <h2>{definition.title}</h2>
    <p>{@html definition.definition}</p>
</article>