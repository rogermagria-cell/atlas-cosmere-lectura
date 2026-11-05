// El catálogo conserva el orden facilitado por el lector. Los mundos de etapas
// futuras se usan solo cuando esa etapa pasa a ser la siguiente o ya está leída.
window.COSMERE_DATA = {
  worlds: {
    scadrial: { name: 'Scadrial', description: 'Ceniza, brumas y metales. La primera trilogía de Nacidos de la bruma ya forma parte de tu historia.' },
    roshar: { name: 'Roshar', description: 'Un planeta de altas tormentas, juramentos y spren. Tu recorrido por El Archivo llega hasta Palabras radiantes.' },
    nalthis: { name: 'Nalthis', description: 'Un nuevo mundo donde los colores y el Aliento tienen un papel singular.' },
    sel: { name: 'Sel', description: 'El escenario de las próximas historias de tu ruta.' },
    treno: { name: 'Treno', description: 'Un mundo que descubrirás al llegar a su relato.' },
    taldain: { name: 'Taldain', description: 'Un nuevo destino de tu recorrido por el Cosmere.' },
    lumar: { name: 'Lumar', description: 'Un nuevo destino de tu recorrido por el Cosmere.' },
    komashi: { name: 'Komashi', description: 'Un nuevo destino de tu recorrido por el Cosmere.' },
    cantico: { name: 'Cántico', description: 'Un nuevo destino de tu recorrido por el Cosmere.' },
    primero: { name: 'Primero del Sol', description: 'Un nuevo destino de tu recorrido por el Cosmere.' },
    desconocido: { name: 'Destino por descubrir', description: 'La cartografía de esta etapa se completará al llegar a ella.' }
  },
  books: [
    { n: 1, title: 'El imperio final', world: 'scadrial', series: 'Nacidos de la bruma · Era 1', cover: 'assets/01-imperio-final.png',
      read: { summary: 'Vin pasa de sobrevivir en las calles a convertirse en una pieza esencial de la rebelión de Kelsier. Su plan combina un golpe contra la nobleza, el aprendizaje de la alomancia y una confrontación con el poder del Lord Legislador.',
        moments: ['Kelsier convierte a su banda en el corazón de una revolución skaa.', 'Vin descubre sus capacidades como nacida de la bruma y derrota al Lord Legislador.', 'El sacrificio de Kelsier deja un símbolo que sobrevive a su muerte.'],
        characters: ['Vin', 'Kelsier', 'Sazed', 'Elend'],
        art: [{ src: 'assets/art-01-vin.jpg', title: 'Vin entre las brumas', credit: 'Steve Argyle', source: 'https://www.steveargyle.com/vin' }] }
    },
    { n: 2, title: 'El pozo de la ascensión', world: 'scadrial', series: 'Nacidos de la bruma · Era 1', cover: 'assets/02-pozo-ascension.png',
      read: { summary: 'Derrocar a un tirano resulta más sencillo que construir lo que viene después. Vin y Elend intentan mantener Luthadel mientras la ciudad sufre asedios, tensiones políticas y una amenaza que se oculta tras las brumas.',
        moments: ['El nuevo reino de Elend se enfrenta a ejércitos y disputas internas.', 'Vin llega al Pozo de la Ascensión y libera el poder en lugar de tomarlo.', 'La decisión deja libre a Ruina; Elend sobrevive y despierta como nacido de la bruma.'],
        characters: ['Vin', 'Elend', 'Sazed', 'TenSoon'],
        art: [{ src: 'assets/art-02-koloss.jpg', title: 'Vin frente a un koloss', credit: 'Charles Tan', source: 'https://www.artstation.com/artwork/dm61W' }] }
    },
    { n: 3, title: 'El héroe de las eras', world: 'scadrial', series: 'Nacidos de la bruma · Era 1', cover: 'assets/03-heroe-eras.png',
      read: { summary: 'La trilogía concluye con Scadrial al borde del colapso. Mientras Vin y Elend luchan por su mundo, Sazed descubre la clave de las profecías y de las fuerzas que lo han transformado todo.',
        moments: ['Ruina manipula mensajes y personas en su intento de destruir el mundo.', 'Vin asume el poder de Conservación y se sacrifica; Elend también cae.', 'Sazed reúne Conservación y Ruina, se convierte en Armonía y restaura Scadrial.'],
        characters: ['Vin', 'Elend', 'Sazed', 'Marsh'],
        art: [{ src: 'assets/art-03-mistborn.webp', title: 'Enfrentamiento en Scadrial', credit: 'Marc Simonetti', source: 'https://marc-simonetti-shop.myshopify.com/products/mistborn' }] }
    },
    { n: 4, title: 'El camino de los reyes', world: 'roshar', series: 'El Archivo de las Tormentas · Libro 1', cover: 'assets/04-camino-reyes.jpg',
      read: { summary: 'Roshar se despliega a través de Kaladin y el Puente Cuatro, las visiones de Dalinar y la investigación de Shallan junto a Jasnah. Las altas tormentas y los spren forman parte de la vida cotidiana y de un pasado que comienza a despertar.',
        moments: ['Kaladin transforma a los hombres del Puente Cuatro en una comunidad.', 'Dalinar entrega su hoja esquirlada para liberar a los esclavos del puente.', 'Shallan descubre su capacidad de moldear almas y los secretos que la rodean.'],
        characters: ['Kaladin', 'Syl', 'Shallan', 'Dalinar'],
        art: [
          { src: 'assets/art-04-kaladin.jpg', title: 'Kaladin bajo la tormenta', credit: 'Michael Whelan', source: 'https://www.michaelwhelan.com/galleries/way-of-kings/' },
          { src: 'assets/art-04-syl.jpg', title: 'Kaladin y Syl, su spren', credit: 'Connor Chamberlain', source: 'https://coppermind.net/wiki/File:Kaladin_and_Syl_by_Connor_Chamberlain.jpg' }
        ] }
    },
    { n: 5, title: 'Palabras radiantes', world: 'roshar', series: 'El Archivo de las Tormentas · Libro 2', cover: 'assets/05-palabras-radiantes.jpg',
      read: { summary: 'Los caminos de Kaladin y Shallan convergen en las Llanuras Quebradas. Sus vínculos con los spren, la amenaza de los portadores del Vacío y los secretos de los Caballeros Radiantes empujan a Roshar hacia un cambio decisivo.',
        moments: ['Kaladin reafirma su vínculo con Syl al pronunciar un nuevo Ideal.', 'Shallan profundiza en su pasado y en su relación con Patrón.', 'La tormenta eterna llega y la antigua Urithiru vuelve a ser encontrada.'],
        characters: ['Kaladin', 'Syl', 'Shallan', 'Patrón', 'Dalinar'],
        art: [
          { src: 'assets/art-05-shallan.jpg', title: 'Shallan dibuja en Roshar', credit: 'Michael Whelan', source: 'https://reactormag.com/michael-whelan-shallan-endpapers-words-of-radiance/' },
          { src: 'assets/art-05-cripticos.jpg', title: 'Shallan y los spren crípticos', credit: 'Jemma M. Young', source: 'https://www.17thshard.com/gallery/image/1681-shallan-and-the-cryptics/' }
        ] }
    },
    { n: 6, title: 'El undécimo metal', world: 'scadrial', series: 'Relato · Arcanum ilimitado', arc: true, cover: 'assets/06-arcanum-ilimitado.png',
      teaser: 'Una historia breve del aprendizaje de Kelsier, ambientada antes de El imperio final.',
      note: 'En Arcanum ilimitado, abre solo «El undécimo metal» por ahora: la antología reúne relatos de otros mundos y etapas.',
      read: { summary: 'Este relato retrocede a los años de formación de Kelsier. Bajo la tutela de Gemmel, aprende a sobrevivir como nacido de la bruma mientras empieza a perseguir una pista capaz de desafiar al Lord Legislador.',
        moments: ['Kelsier aprende a controlar sus poderes junto a Gemmel.', 'El relato permite volver a Scadrial con otra mirada sobre el futuro de la rebelión.', 'La búsqueda del misterioso metal queda conectada con la caída del Imperio Final.'],
        characters: ['Kelsier', 'Gemmel'], art: [] }
    },
    { n: 7, title: 'El aliento de los dioses', world: 'nalthis', series: 'Novela independiente', cover: 'assets/07-aliento-dioses.jpg', teaser: 'Dos hermanas, un matrimonio político y una magia vinculada al color y al Aliento.',
      read: { summary: 'Siri y Vivenna emprenden caminos muy distintos en Hallandren. Sus decisiones revelan las tensiones entre Idris y la corte del Rey Dios, mientras la magia del Aliento cambia lo que creen saber sobre el poder.',
        moments: ['Siri descubre que el Rey Dios es más complejo de lo que le habían contado.', 'Vivenna conoce el mundo de los Despertadores fuera de la corte.', 'La historia de Sangre Nocturna y de los Retornados adquiere un sentido nuevo.'],
        characters: ['Siri', 'Vivenna', 'Susebron', 'Sangre Nocturna'], art: [] }
    },
    { n: 8, title: 'Danzante del filo', world: 'roshar', series: 'Relato · Arcanum ilimitado', arc: true, cover: 'assets/06-arcanum-ilimitado.png', teaser: 'Una historia de Lift posterior a Palabras radiantes.' },
    { n: 9, title: 'Elsecaller', world: 'roshar', series: 'Relato opcional · en inglés', optional: true, english: true },
    { n: 10, title: 'King Lopen: The First of Alethkar', world: 'roshar', series: 'Relato opcional · en inglés', optional: true, english: true },
    { n: 11, title: 'Juramentada', world: 'roshar', series: 'El Archivo de las Tormentas · Libro 3' },
    { n: 12, title: 'Esquirla del amanecer', world: 'roshar', series: 'El Archivo de las Tormentas · Novela corta' },
    { n: 13, title: 'Elantris', world: 'sel', series: 'Novela independiente' },
    { n: 14, title: 'La esperanza de Elantris', world: 'sel', series: 'Relato · Arcanum ilimitado', arc: true },
    { n: 15, title: 'El alma del emperador', world: 'sel', series: 'Novela corta · Arcanum ilimitado', arc: true },
    { n: 16, title: 'Sombras por Silencio en los bosques del infierno', world: 'treno', series: 'Relato · Arcanum ilimitado', arc: true },
    { n: 17, title: 'Arena blanca, extracto', world: 'taldain', series: 'Extracto opcional · Arcanum ilimitado', arc: true, optional: true },
    { n: 18, title: 'Arena blanca (edición integral)', world: 'taldain', series: 'Novela gráfica' },
    { n: 19, title: 'Aleación de ley', world: 'scadrial', series: 'Nacidos de la bruma · Era 2' },
    { n: 20, title: 'Alomante Jak y los pozos de Eltania', world: 'scadrial', series: 'Relato · Arcanum ilimitado', arc: true },
    { n: 21, title: 'Sombras de identidad', world: 'scadrial', series: 'Nacidos de la bruma · Era 2' },
    { n: 22, title: 'Brazales de duelo', world: 'scadrial', series: 'Nacidos de la bruma · Era 2' },
    { n: 23, title: 'Mistborn: Historia secreta', world: 'scadrial', series: 'Relato · Arcanum ilimitado', arc: true },
    { n: 24, title: 'El ritmo de la guerra', world: 'roshar', series: 'El Archivo de las Tormentas · Libro 4' },
    { n: 25, title: 'El metal perdido', world: 'scadrial', series: 'Nacidos de la bruma · Era 2' },
    { n: 26, title: 'Trenza del mar Esmeralda', world: 'lumar', series: 'Novela independiente' },
    { n: 27, title: 'Yumi y el pintor de pesadillas', world: 'komashi', series: 'Novela independiente' },
    { n: 28, title: 'El hombre iluminado', world: 'cantico', series: 'Novela independiente' },
    { n: 29, title: 'Viento y verdad', world: 'roshar', series: 'El Archivo de las Tormentas · Libro 5' },
    { n: 30, title: 'Sexto del ocaso', world: 'primero', series: 'Relato · Arcanum ilimitado', arc: true },
    { n: 31, title: 'Islas de la Ascuaoscura', world: 'primero', series: 'Novela independiente' },
    { n: 32, title: 'Los fuegos de diciembre', world: 'desconocido', series: 'Novela independiente' }
  ]
};
