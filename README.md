# Atlas del Cosmere

Web estática personal con mapa estelar y ruta de 32 lecturas. Las cinco primeras están marcadas como leídas; **El undécimo metal** aparece como siguiente al abrirla por primera vez.

## Publicar en GitHub Pages

1. Sube **todo el contenido de esta carpeta** a la raíz de un repositorio: `index.html`, `styles.css`, `enhancements.css`, `catalog.js`, `app.js` y `assets/`.
2. En GitHub, abre **Settings → Pages → Deploy from a branch**. Selecciona la rama donde subiste los archivos y la carpeta **/(root)**.

No hay dependencias ni compilación. [Guía oficial de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Progreso de lectura

- La ruta muestra los 32 títulos en el orden facilitado. Solo se pueden abrir las fichas leídas y la siguiente lectura. Los mundos futuros siguen ocultos en el mapa.
- Pulsa **«Ya me lo he leído»** e introduce el PIN de cuatro cifras que elegiste. Las lecturas opcionales también ofrecen **«Omitir lectura opcional»**. La siguiente etapa y el mapa se actualizan al instante.
- El progreso se guarda en `localStorage` **solo en ese navegador y en esa dirección web**. No se comparte con otras personas ni se sincroniza entre dispositivos. Borrar los datos del sitio restablece las cinco lecturas iniciales.
- GitHub Pages sirve archivos públicos: este PIN es una barrera sencilla frente a cambios casuales, **no una protección real** ante alguien que inspeccione el código o manipule el almacenamiento del navegador. Si en el futuro necesitas progreso compartido y autenticación real, habrá que añadir un servicio con servidor.

Las fichas de las cinco lecturas iniciales y las dos siguientes tienen resúmenes preparados. Para libros posteriores, el desbloqueo y el avance funcionan; sus textos e ilustraciones se podrán ampliar cuando llegues a ellos, editando `catalog.js`.

## Imágenes

Las cuatro portadas aportadas están en `assets/`. Las demás portadas y las ilustraciones se incluyen para la presentación personal, con créditos y enlaces a las fuentes en la web. **La atribución no equivale a permiso de redistribución**: antes de publicar el repositorio, conviene obtener autorización de los titulares para alojar sus imágenes o sustituirlas por imágenes con licencia adecuada.
