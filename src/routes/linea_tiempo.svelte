<script>
    import Time from '$components/Time.svelte'

    const times = [
        {
            title: '1969, Estados Unidos',
            icon: '<img alt="Bandera de Estados Unidos" width="30px" src="https://img.icons8.com/color/48/000000/usa-circular.png"/>',
            description: 'Marcha multitudinaria en Stonewall de diversidades sexuales reclamando por la discriminación constante que sufrían por su identidad donde luchan contra la policía.',
            alt: 'Marcha de Stonewall',
            bajada: 'Marcha de Stonewall',
            src: '/images/lt/1969.jpg',
            color: '#af1020'
        },
        {
            title: '1970, Estados Unidos',
            icon: '<img alt="Bandera de Estados Unidos" width="30px" src="https://img.icons8.com/color/48/000000/usa-circular.png"/>',
            description: 'Se conmemora 1 año de los disturbios de Stonewall.',
            alt: 'Marcha de conmemoración de los disturbios de Stonewall',
            bajada: 'Marcha de conmemoración de los disturbios de Stonewall',
            src: '/images/lt/1970.jpeg',
            color: '#b84f09'
        },
        {
            title: '1971, Colombia',
            icon: '<img width="30px" alt="Bandera de Colombia" src="https://img.icons8.com/color/48/000000/colombia-circular.png"/>',
            description: 'Surgieron los primeros textos hablando de la homosexualidad masculina, uno de estos fue Octavio Giraldo Neira.',
            alt: 'Octavio Giraldo Neira',
            bajada: 'Octavio Giraldo Neira',
            src: '/images/lt/1971.jpeg',
            color: '#057462',
        },
        {
            title: '1973, Chile',
            description: 'Se realiza la primera manifestación LGBT+ en la Plaza de Armas de Santiago.',
            icon: '<img alt="Bandera de Chile" width="30px" src="https://img.icons8.com/color/48/000000/chile-circular.png"/>',
            alt: 'Grupo de jovenes homosexuales en marcha LGBT',
            bajada: 'Grupo de jovenes homosexuales en marcha LGBT',
            src: '/images/lt/1973.jpeg',
            color: '#1f8321',
        },
        {
            title: '1977, Chile',
            description: 'Se creó la primera organización para comunidades homosexuales llamada Movimiento Integración.',
            icon: '<img alt="Bandera de Chile" width="30px" src="https://img.icons8.com/color/48/000000/chile-circular.png"/>',
            alt: 'Icono MOVILH',
            bajada: 'Icono MOVILH',
            src: '/images/lt/1977.jpeg',
            color: '#1f75aa',
        },
        {
            title: '1978, Mundo',
            description: 'Gilbert Baker creó y diseñó la bandera LGBTI+.',
            icon: '<img alt="Mundo" width="30px" src="https://img.icons8.com/external-prettycons-flat-prettycons/47/000000/external-world-travel-prettycons-flat-prettycons-1.png"/>',
            alt: 'Creador de la banera LGBT',
            bajada: 'Creador de la bandera LGBT',
            src: '/images/lt/1978.jpg',
            color: '#371183',
        },
        {
            title: '1990, Mundo',
            description: 'La OMS elimina a la homosexualidad de la lista de enfermedades mentales.',
            icon: '<img alt="Mundo" width="30px" src="https://img.icons8.com/external-prettycons-flat-prettycons/47/000000/external-world-travel-prettycons-flat-prettycons-1.png"/>',
            alt: 'Icono de la OMS',
            bajada: 'Icono OMS',
            src: '/images/lt/1990.jpeg',
            color: '#af1020',
        },
        {
            title: '2001, Países Bajos',
            description: 'Se legaliza por primera vez el matrimonio homosexual.',
            icon: '<img alt="Bandera de Países Bajos" width="30px" src="https://img.icons8.com/color/48/000000/netherlands-circular.png"/>',
            alt: 'Primera pareja homosexual casandose en Países Bajos',
            bajada: 'Primera pareja homosexual casandose en Países Bajos',
            src: '/images/lt/2001.jpeg',
            color: '#b84f09'
        },
        {
            title: '2010, Australia',
            description: 'Se reconoce por primera vez de forma legal el género no binario.',
            icon: '<img alt="Banera de Australia" width="30px" src="https://img.icons8.com/color/48/000000/australia-circular.png"/>',
            alt: 'Jovenes en marcha LGBT',
            bajada: 'Jovenes en marcha LGBT',
            src: '/images/lt/2010.jpeg',
            color: '#057462',
        },
        {
            title: '2012, Chile',
            description: 'Un grupo homofóbico asesinó a Daniel Zamudio por su orientación sexual y luego de esto se aprobó el proyecto de Ley Antidiscriminación.',
            icon: '<img alt="Bandera de Chile" width="30px" src="https://img.icons8.com/color/48/000000/chile-circular.png"/>',
            alt: 'Aprobación Ley Zamudio',
            bajada: 'Aprobación Ley Zamudio',
            src: '/images/lt/2012.jpeg',
            color: '#1f8321',
        },
        {
            title: '2017, Chile',
            description: 'Se envía al Congreso Nacional el Proyecto de Ley de Matrimonio Igualitario.',
            icon: '<img alt="Bandera de Chile" width="30px" src="https://img.icons8.com/color/48/000000/chile-circular.png"/>',
            alt: 'Presidenta Bachelet envía a congreso proyecto de ley',
            bajada: 'Presidenta Bachelet envía a congreso proyecto de ley',
            src: '/images/lt/2017.jpeg',
            color: '#1f75aa',
        },
        {
            title: '2020, Chile',
            description: 'Se eligen a 8 convencionales constituyentes pertenecientes a la comunidad LGBTI+.',
            icon: '<img alt="Bandera de Chile" width="30px" src="https://img.icons8.com/color/48/000000/chile-circular.png"/>',
            alt: 'Bandera LGBT con constitución de Chile',
            bajada: 'Bandera LGBT con constitución de Chile',
            src: '/images/lt/2020.jpeg',
            color: '#371183',
        },
        {
            title: '2021, Chile',
            description: 'Se aprueba el proyecto de Ley de Matrimonio Igualitario.',
            icon: '<img alt="Bandera de Chile" width="30px" src="https://img.icons8.com/color/48/000000/chile-circular.png"/>',
            alt: 'Anillos de compromiso sobre banera LGBT',
            bajada: 'Anillos de compromiso sobre banera LGBT',
            src: '/images/lt/2021.jpeg',
            color: '#af1020'
        }
    ]
</script>

<style>
    .Line{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }

    h1{
        margin-top: 30px;
        font-size: 2rem;
    }
</style>

<svelte:head>
    <title>Linea del tiempo LGBT</title>
</svelte:head>

<section class="Line">
    <h1>Linea del tiempo LGBT</h1>
    {#each times as time}
        <Time time={time} />
    {/each}
</section>