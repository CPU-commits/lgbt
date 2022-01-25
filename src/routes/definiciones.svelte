<script>
    import Definition from "$components/Definition.svelte"

    const definitions = [
        {
            title: 'LGBTI+',
            definition: `Son las siglas para referirse a personas lesbianas, gays, bisexuales, trans e internsexuales. Pueden encontrarse
en otro orden y se puede tanto, agregar como quitar siglas para considerar toda la diversidad sexual.
<br><br>
Al referirnos a LGBTI+ tomamos en cuenta diversidad sexual y de género. Lo que tambien se puede denominar,
en algunos casos, como "minorías sexuales y de género".`
        },
        {
            title: 'ORIENTACION SEXUAL',
            definition: `Corresponde a la forma de expresar el deseo amoroso y sexual, lo que puede ser de una forma muy diversa en el 
ser humano.<br><br>
   - Heterosexual: Personas que dirigen su sexualidad hacia personas del otro sexo.<br>
   - Homosexual: Personas que sienten deseo sexual y amoroso hacia el mismo sexo, "lesbianas" en el caso de
		mujeres y "gays" en el caso de hombres.<br>
   - Bisexual: Individuos que se enamoran y tienen deseo sexual hacia ambos sexos, propio y opuesto. Esto no 
		significa mantener relaciones al mismo tiempo con un hombre y una mujer.<br>
   - Pansexual: Atracción sexual, romántica o emocional hacia otras personas independientemente de su sexo 
		o identidad de género.<br>
   - Asexual: Corresponde a la falta de atracción sexual hacia otros. En algunos casos se expresa como la ausencia
		de orientación sexual.`
        },
        {
            title: 'IDENTIDAD DE GÉNERO',
            definition: `La identidad de género corresponde a la pertenecia e indentificación indiviudal, en palabras simples es como uno
se siente y expresa su género. Por norma general, las personas dan cuenta de su identidad de género desde 
temprana edad.<br><br>

Se denomina CISGÉNERO a aqellas personas que se sienten de acuerdo al sexo biológico y legal asignado al nacer.
Personas que al ser identificadas como hombre o mujer, se sienten como tal.<br><br>

Transexuales, personas que su identidad de género no coincide con el asignado al nacer. Por lo general transforman
su cuerpo de tal forma que exista una coherencia con su identidad. Esto puede ser mediante la toma de hormonas
u, operaciones de genitales y otras partes del cuerpo.<br><br>

Transgénero, al igual que transexuales, no se sienten identificadas con el género que nacieron, y ya sea que 
realicen transformaciones fisicas o no, suelen expresar su género de una manera adoptada por ellos mismos.<br><br>

Travestis, aquellos que realizan una transfomación física temporal de su expresión de género, sin cuestionar su
identidad. Hay quienes asocian a los travestis, a personas que usan ropa "diseñada" para el sexo opuesto, ya sea 
por placer o para realizar trabajo sexual o artístico (transformistas o drag queens).<br><br>

De una forma mas general, el término TRANS hace referencia a transexuales, transgénero, travestis y a toda la
gama de posibilidades existentes, en relacion a identidad de género.`
        },
        {
            title: 'EXPRESIÓN DE GÉNERO',
            definition: `Es la forma en que una persona le muestra al mundo su género, ya sea mediante la apariencia, los gestos, la actitud,
o el comportamiento. Corresnponden a la primera imagen que la sociedad ve de una persona en específico, de esta
forma se convierten en la primera excusa para la discriminación y el bullyng.<br><br>

Por lo general se asocian roles de genero en la sociedad actual, principalmente roles cisgénero, contribuyendo asi 
a la desigualdad e ilustrando falsas ideas respecto a las personas, por ejemplo que los hombres conducen mejor 
que las mujeres, que los hombres no lloran o que las mujeres desempeñan una mejor labor domestica.`
        }
    ]
</script>

<style>
    .Definitions{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        width: 100%;
    }

    .Content{
        width: 100%;
        max-width: 800px;
    }

    h1{
        font-size: 2rem;
        margin-top: 30px;
    }
</style>

<svelte:head>
    <title>Definiciones LGBT</title>
</svelte:head>

<section class="Definitions">
    <h1>Definiciones LGBT</h1>
    <div class="Content">
        {#each definitions as definition}
            <Definition definition={definition} />
        {/each}
    </div>
</section>