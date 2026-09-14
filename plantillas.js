/* ============================================================
   PLANTILLAS — Catálogo de todas las plantillas
   
   CÓMO AGREGAR UNA NUEVA:
   1. Copia cualquier bloque { ... } de abajo
   2. Pégalo al final de la lista correspondiente
   3. Cambia: id, name, description, emoji, color, effect, palette, premium
   4. Guarda (Commit). En 1 minuto aparece en la landing.
   
   ID: único, sin espacios, en minúsculas (ej: "amor-clasico")
   CATEGORY: debe coincidir con un id de las categorías de abajo
   EFFECT: galaxy | hearts | confetti | fireworks | snow
   PALETTE: cosmic | ice | rose | gold | aurora | neon | stardust
   PREMIUM: true o false
   ============================================================ */

var PLANTILLAS = {

  /* ============ CATEGORÍAS ============ */
  categorias: [
    { id: "amor",             name: "Amor",              emoji: "💕", color: "#ff4f9a", tagline: "Para decir te amo sin palabras" },
    { id: "14febrero",        name: "14 de Febrero",      emoji: "❤️", color: "#e63946", tagline: "San Valentín inolvidable" },
    { id: "flores-amarillas", name: "Flores Amarillas",   emoji: "🌼", color: "#ffd166", tagline: "El detalle que todas esperan" },
    { id: "dia-madres",       name: "Día de las Madres",  emoji: "👩", color: "#ff9ec4", tagline: "Para la mujer más importante" },
    { id: "cumple",           name: "Cumpleaños",         emoji: "🎂", color: "#a855f7", tagline: "Celebra su día especial" },
    { id: "bromas",           name: "Bromas",             emoji: "😂", color: "#ffd166", tagline: "Se ve romántico, pero no" },
    { id: "amistad",          name: "Amistad",            emoji: "🤝", color: "#4ade80", tagline: "Para los que son familia elegida" },
    { id: "reconciliacion",   name: "Reconciliación",     emoji: "🥺", color: "#60a5fa", tagline: "Para pedir perdón de verdad" }
  ],

  /* ============ PLANTILLAS ============ */
  plantillas: [
    /* ---------- 💕 AMOR ---------- */
    {
      id: "amor-clasico",
      category: "amor",
      name: "Clásico eterno",
      description: "La galaxia romántica original. Pura y atemporal.",
      emoji: "💕",
      color: "#ff4f9a",
      premium: false,
      effect: "galaxy",
      palette: "rose",
      defaultTitle: "Para ti, mi amor",
      defaultSubtitle: "Una experiencia galáctica te espera",
      defaultMessage: "Eres mi universo entero ✨\nCada estrella me recuerda a ti.",
      defaultPhrases: "Te amo más que ayer\nEres mi persona favorita\nContigo todo es mejor"
    },
    {
      id: "amor-corazones",
      category: "amor",
      name: "Lluvia de corazones",
      description: "Corazones flotando entre las estrellas. Un clásico.",
      emoji: "❤️",
      color: "#ff6b9d",
      premium: false,
      effect: "hearts",
      palette: "rose",
      defaultTitle: "Mi corazón es tuyo",
      defaultSubtitle: "Rodeado de todo mi amor",
      defaultMessage: "Cada latido de mi corazón te pertenece ❤️\nEres el sueño que nunca quiero despertar.",
      defaultPhrases: "Te quiero infinito\nMi corazón late por ti\nEres mi todo"
    },

    /* ---------- ❤️ 14 DE FEBRERO ---------- */
    {
      id: "14feb-clasico",
      category: "14febrero",
      name: "San Valentín clásico",
      description: "Rojo, romántico y eterno. El clásico del 14.",
      emoji: "❤️",
      color: "#e63946",
      premium: false,
      effect: "hearts",
      palette: "rose",
      defaultTitle: "Feliz San Valentín",
      defaultSubtitle: "Para el amor de mi vida",
      defaultMessage: "En un mundo de miles de personas,\nmi corazón te eligió a ti ❤️\nFeliz 14 de febrero, mi amor.",
      defaultPhrases: "Feliz San Valentín\nTe amo con el alma\nEres mi todo"
    },
    {
      id: "14feb-premium",
      category: "14febrero",
      name: "Fuegos del amor 🔥",
      description: "Fuegos artificiales estallando en el cielo por ti.",
      emoji: "🎆",
      color: "#e63946",
      premium: true,
      effect: "fireworks",
      palette: "neon",
      defaultTitle: "14 de Febrero",
      defaultSubtitle: "Un día, mil formas de amarte",
      defaultMessage: "Cada fuego artificial en el cielo\nes un latido de mi corazón por ti 🎆\nFeliz San Valentín.",
      defaultPhrases: "Nuestro primer San Valentín\nY los que faltan\nTe amo infinito"
    },

    /* ---------- 🌼 FLORES AMARILLAS ---------- */
    {
      id: "flores-clasico",
      category: "flores-amarillas",
      name: "Flores amarillas",
      description: "El detalle del 21 de marzo que todas esperan.",
      emoji: "🌼",
      color: "#ffd166",
      premium: false,
      effect: "confetti",
      palette: "gold",
      defaultTitle: "Flores amarillas para ti",
      defaultSubtitle: "Porque te mereces todo",
      defaultMessage: "Dicen que las flores amarillas\nsolo se regalan a quien de verdad amas 🌼\nAquí tienes las mías.",
      defaultPhrases: "Mi flor favorita\nEres tú\nSiempre tú"
    },
    {
      id: "flores-primavera",
      category: "flores-amarillas",
      name: "Primavera eterna",
      description: "Nieve de flores cayendo suavemente por ti.",
      emoji: "🌻",
      color: "#ffd166",
      premium: true,
      effect: "snow",
      palette: "gold",
      defaultTitle: "Primavera para ti",
      defaultSubtitle: "Cada flor es un te quiero",
      defaultMessage: "Si pudiera, te regalaría\nun campo entero de flores amarillas 🌻\nMientras tanto, este pedacito de cielo.",
      defaultPhrases: "21 de marzo\nDía perfecto\nPara decirte te amo"
    },

    /* ---------- 👩 DÍA DE LAS MADRES ---------- */
    {
      id: "mama-clasico",
      category: "dia-madres",
      name: "Para mamá ❤️",
      description: "Palabras que nunca alcanzan para agradecer.",
      emoji: "👩",
      color: "#ff9ec4",
      premium: false,
      effect: "hearts",
      palette: "rose",
      defaultTitle: "Mamá",
      defaultSubtitle: "Gracias por todo lo que haces",
      defaultMessage: "No existen palabras suficientes\npara agradecerte 💛\nEres mi ejemplo, mi fuerza, mi todo.",
      defaultPhrases: "Te amo, mamá\nEres mi heroína\nGracias por tanto"
    },
    {
      id: "mama-galaxia",
      category: "dia-madres",
      name: "Mi universo eres tú",
      description: "Porque mamá merece su propia galaxia.",
      emoji: "🌌",
      color: "#ff9ec4",
      premium: true,
      effect: "galaxy",
      palette: "aurora",
      defaultTitle: "Mi universo, mamá",
      defaultSubtitle: "Eres mi persona favorita en el mundo",
      defaultMessage: "Antes de saber qué era el amor,\nya te amaba a ti, mamá 🌌\nGracias por darme la vida y tanto más.",
      defaultPhrases: "Feliz Día de las Madres\nEres mi todo\nTe amo infinito"
    },

    /* ---------- 🎂 CUMPLEAÑOS ---------- */
    {
      id: "cumple-estelar",
      category: "cumple",
      name: "Feliz cumpleaños",
      description: "Fuegos artificiales cósmicos para celebrarte.",
      emoji: "🎂",
      color: "#a855f7",
      premium: false,
      effect: "fireworks",
      palette: "cosmic",
      defaultTitle: "¡Feliz cumpleaños! 🎂",
      defaultSubtitle: "Un día para celebrarte",
      defaultMessage: "Hoy celebramos el día\nen que el universo se volvió más brillante ✨\n¡Feliz cumpleaños!",
      defaultPhrases: "Que cumplas muchos más\nTe mereces todo\nEres increíble"
    },
    {
      id: "cumple-corazones",
      category: "cumple",
      name: "Cumple con amor",
      description: "Corazones cayendo para celebrar su día.",
      emoji: "🎈",
      color: "#a855f7",
      premium: false,
      effect: "hearts",
      palette: "neon",
      defaultTitle: "¡Feliz cumpleaños! 🎉",
      defaultSubtitle: "Un año más de ti en el mundo",
      defaultMessage: "Que este año nuevo de vida\nesté lleno de todo lo que deseas 🎈\nTe quiero mucho.",
      defaultPhrases: "Feliz cumple\nMuchas felicidades\nTe deseo lo mejor"
    },

    /* ---------- 😂 BROMAS ---------- */
    {
      id: "broma-jefe",
      category: "bromas",
      name: "Para mi jefe 😅",
      description: "El clásico: 'no renuncio, pero casi'.",
      emoji: "😂",
      color: "#ffd166",
      premium: false,
      effect: "confetti",
      palette: "gold",
      defaultTitle: "Querido jefe",
      defaultSubtitle: "Con todo el respeto del mundo...",
      defaultMessage: "No es que no quiera trabajar,\nes que el trabajo no me quiere a mí 😂",
      defaultPhrases: "¡Es broma!\n(¿O no?)\nTe quiero, jefe"
    },
    {
      id: "broma-novia",
      category: "bromas",
      name: "Broma para mi pareja",
      description: "Se ve romántico... hasta que lees bien.",
      emoji: "😜",
      color: "#ffd166",
      premium: false,
      effect: "fireworks",
      palette: "neon",
      defaultTitle: "Mi amor ❤️",
      defaultSubtitle: "Algo importante que decirte",
      defaultMessage: "Eres la persona más importante de mi vida...\n¡Y también la que más me hace gastar en comida! 😂",
      defaultPhrases: "Te amo\nPero invítame algo\n(Aunque sea un chicle)"
    },

    /* ---------- 🤝 AMISTAD ---------- */
    {
      id: "amistad-clasico",
      category: "amistad",
      name: "Amigo/a del alma",
      description: "Para ese amigo que es más que familia.",
      emoji: "🤝",
      color: "#4ade80",
      premium: false,
      effect: "galaxy",
      palette: "aurora",
      defaultTitle: "Amigo mío",
      defaultSubtitle: "Gracias por estar siempre",
      defaultMessage: "Encontrar un amigo como tú\nes como ganar la lotería 💚\nGracias por cada momento.",
      defaultPhrases: "Eres mi persona\nGracias por tanto\nTe quiero, amigo"
    },
    {
      id: "amistad-fiesta",
      category: "amistad",
      name: "Fiesta de confetti",
      description: "Celebra esa amistad única con confetti.",
      emoji: "🎉",
      color: "#4ade80",
      premium: true,
      effect: "confetti",
      palette: "gold",
      defaultTitle: "¡Amigos por siempre!",
      defaultSubtitle: "Por muchos años más de risas",
      defaultMessage: "No sé qué hice para merecerte,\npero gracias al universo por ponerlos en mi camino 🎉",
      defaultPhrases: "Amigos para siempre\nPor mil aventuras más\nLos quiero"
    },

    /* ---------- 🥺 RECONCILIACIÓN ---------- */
    {
      id: "perdon-clasico",
      category: "reconciliacion",
      name: "Lo siento de verdad",
      description: "Para pedir perdón con el corazón.",
      emoji: "🥺",
      color: "#60a5fa",
      premium: false,
      effect: "snow",
      palette: "ice",
      defaultTitle: "Lo siento mucho",
      defaultSubtitle: "Necesito decirte algo",
      defaultMessage: "Sé que me equivoqué y lo siento de verdad 🥺\nNo quiero perderte por un error.\n¿Me das otra oportunidad?",
      defaultPhrases: "Perdóname\nTe necesito\nNo quiero perderte"
    },
    {
      id: "perdon-corazon",
      category: "reconciliacion",
      name: "Vuelve conmigo ❤️‍🩹",
      description: "Corazones para pedir otra oportunidad.",
      emoji: "💔",
      color: "#60a5fa",
      premium: true,
      effect: "hearts",
      palette: "ice",
      defaultTitle: "Vuelve, por favor",
      defaultSubtitle: "Sin ti todo es distinto",
      defaultMessage: "He pensado en todo lo que pasó\ny solo quiero decirte que te amo ❤️‍🩹\nDame otra oportunidad, por favor.",
      defaultPhrases: "Te extraño\nVuelve\nTe amo aún"
    }
  ],

  /* ============ FUNCIONES ÚTILES ============ */

  getCategorias: function(){
    return this.categorias.slice();
  },

  getCategoria: function(id){
    for (var i = 0; i < this.categorias.length; i++){
      if (this.categorias[i].id === id) return this.categorias[i];
    }
    return null;
  },

  getPlantillas: function(categoryId){
    if (!categoryId) return this.plantillas.slice();
    return this.plantillas.filter(function(p){ return p.category === categoryId; });
  },

  getPlantilla: function(id){
    for (var i = 0; i < this.plantillas.length; i++){
      if (this.plantillas[i].id === id) return this.plantillas[i];
    }
    return null;
  },

  countByCategory: function(categoryId){
    return this.getPlantillas(categoryId).length;
  }
};
