<script>
    import Myth from '$components/Myth.svelte'
    
    const myths = [
        {
            title: '“La homosexualidad es una enfermedad o un problema de salud”',
            myth: `La Organización Mundial de la Salud aclaró hace más de treinta años que la homosexualidad no es un trastorno ni una enfermedad y ha enfatizado constantemente en el hecho de que la homosexualidad es algo natural y no algo patológico como algunas personas señalan. `,
            source: 'https://www.telam.com.ar/notas/202005/464952-paises-castigan-homosexualidad.html',
            sourcetag: 'TÉLAM'
        },
        {
            title: '“Podemos cambiar la orientación sexual y la identidad de género de una persona”',
            myth: 'La organización mundial de la salud ya ha explicado antes que la orientación sexual no se puede cambiar. Los intentos por cambiar de manera forzada la orientación sexual de una persona, no sólo son ineficaces, perjudiciales, sino que violan los derechos humanos.  ',
            source: 'https://www3.paho.org/hq/index.php?option=com_content&view=article&id=6803:2012-therapies-change-sexual-orientation-lack-medical-justification-threaten-health&Itemid=1926&lang=es',
            sourcetag: 'OPS'
        },
        {
            title: '“Todas las personas LGBTI tienen VIH o SIDA”',
            myth: 'El VIH y el SIDA afecta a las personas heterosexuales, cisgénero y LGBTI. No es algo exclusivo de un grupo poblacional. De acuerdo con el portal Medline plus el riesgo de contraerlo está sobre todo asociado a tener sexo anal o vaginal sin protección, tener parejas múltiples, compartir agujas o jeringas y tener una pareja sexual con VIH que no tome medicamentos para el mismo. ',
            source: 'https://medlineplus.gov/spanish/ency/article/000594.htm',
            sourcetag: 'MEDLINE PLUS'
        },
        {
            title: '"Es peligroso para un niño estar con una persona LGBT"',
            myth: `No existe ninguna evidencia que pruebe que ser gay, lesbiana, bisexual o transgénero fomente el abuso de menores. Retratar a las personas LGBT como pedófilos o peligrosos para los niños es falso y ofensivo, ya que una cosa no tiene que ver con la otra. De hecho, en todo el mundo hay muchas personas LGBT que adoptan o tienen hijas e hijos y que también se caracterizan por su cuidado, amor y entrega. `,
        },
        {
            title: '“Los niños se visten de azul y las niñas de rosa “',
            myth: `Esta es una frase muy común. Refleja la creencia errónea de que existen actitudes, modos de ser, vestir, expresar, actuar y comportarse asociados a cada género. Es común escuchar, por ejemplo, que ser niño implica vestirse de azul, tener el cabello corto, usar pantalones, jugar con soldados; también es común escuchar que ser niña implica vestirse de rosa, tener el cabello más largo y usar falda. También se cree que, si estos modelos de conducta no se respetan, las niñas y niños “se van a confundir” o “van a creer que son del otro sexo”.<br><br>
Estas ideas, en realidad, son estereotipos de género, es decir, “una opinión o un prejuicio generalizado acerca de atributos o características que hombres y mujeres poseen, o deberían poseer, o de las funciones sociales que ambos desempeñan, o deberían desempeñar”.Estos estereotipos son dañinos por varias razones: limitan el derecho al libre desarrollo de la personalidad de las personas y las obliga a adoptar comportamientos sólo porque se consideran aceptables, necesarios o indispensables para su género.
`
        },
        {
            title: '"Las personas homosexuales tienen mas probabilidades de cometer abusos sexuales a menores"',
            myth: 'Es mentira. Al ser un delito principalmente cometidos por hombres, algunos estudios han comparado el nivel de atracción sexual que sienten hacia menores hombres gays y heteros. Este , publicado en The Journal of Sex Research, demostró que los primeros no sienten una mayor atracción sexual hacia niños menores que la que sienten los hombres heterosexuales hacia niñas menores, lo que significa que la pedofilia y la homosexualidad no tienen ninguna relación entre sí.',
            source: 'https://www.tandfonline.com/doi/abs/10.1080/00224498909551494',
            sourcetag: 'Kurt Freund M.D., D.Sc. Robin Watson B.Sc. &Douglas Rienzo B.Sc.'
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
        margin-bottom: 200px;
    }

    .Content{
        width: 100%;
        max-width: 800px;
    }

    h1{
        font-size: 2rem;
        margin-top: 30px;
    }

    a{
        color: #4507ff;
    }
</style>

<svelte:head>
    <title>Mitos LGBT</title>
</svelte:head>

<section class="Definitions">
    <h1>Mitos LGBT</h1>
    <div class="Content">
        {#each myths as myth}
            <Myth myth={myth} />
        {/each}
    </div>
    <h3>Fuentes adicionales</h3>
    <a href="https://www.radionica.rocks/analisis/10-mitos-desmentidos-sobre-la-diversidad-sexual-y-de-genero" target="_blank" rel="external">
        https://www.radionica.rocks/analisis/10-mitos-desmentidos-sobre-la-diversidad-sexual-y-de-genero
    </a>
    <a href="https://www.gob.mx/aprendemx/articulos/mitos-y-realidades-sobre-las-personas-con-orientaciones-sexuales-e-identidades-de-genero-diversas?idiom=es">
        https://www.gob.mx/aprendemx/articulos/mitos-y-realidades-sobre-las-personas-con-orientaciones-sexuales-e-identidades-de-genero-diversas?idiom=es
    </a>
    <a href="https://maldita.es/malditaciencia/20210702/cinco-bulos-sobre-las-personas-lgtbi-que-la-ciencia-ha-desmentido/">
        https://maldita.es/malditaciencia/20210702/cinco-bulos-sobre-las-personas-lgtbi-que-la-ciencia-ha-desmentido/
    </a>
    <a href="https://www.iguales.cl/cinco-mitos-sobre-diversidad-sexual-que-la-comision-de-ciencias-abordo-en-congreso-de-la-sociedad-chilena-de-sexologia/">
        https://www.iguales.cl/cinco-mitos-sobre-diversidad-sexual-que-la-comision-de-ciencias-abordo-en-congreso-de-la-sociedad-chilena-de-sexologia/
    </a>
    <a href="https://ichi.pro/es/10-mitos-sobre-la-comunidad-lgbtq-desmentidos-84735714975947">
        https://ichi.pro/es/10-mitos-sobre-la-comunidad-lgbtq-desmentidos-84735714975947
    </a>
    <a href="https://www.elmundo.es/vida-sana/sexo/2017/06/30/5953b87ae5fdea575d8b4600.htm">
        https://www.elmundo.es/vida-sana/sexo/2017/06/30/5953b87ae5fdea575d8b4600.htm
    </a>
</section>