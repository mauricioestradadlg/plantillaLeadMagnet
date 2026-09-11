/* =========================================================
   CONFIGURACIÓN PREDETERMINADA
   ========================================================= */

const FALLBACK = {
  contenido: {
    nombre: 'Restaurante La Mesa',
    slogan: 'Sabor que se comparte',
    descripcion_corta:
      'Cocina honesta, ingredientes frescos y un ambiente para disfrutar.',

    sobre_titulo: 'Una mesa para volver',

    sobre_texto:
      'En La Mesa creemos que comer bien también es compartir historias. ' +
      'Preparamos cada platillo con ingredientes frescos y recetas que ' +
      'combinan tradición con un toque contemporáneo.',

    cta_titulo: '¿Listo para visitarnos?',

    cta_texto:
      'Escríbenos por WhatsApp para consultar disponibilidad o resolver cualquier duda.',

    whatsapp: '528112345678',
    telefono: '81 1234 5678',
    email: 'hola@restaurantelamesa.mx',

    direccion: 'Av. Ejemplo 123, Monterrey, Nuevo León',

    horario: 'Lun–Dom · 1:00 PM – 11:00 PM',

    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    maps_url: 'https://maps.google.com/',

    texto_boton_hero: 'Ver menú',

    texto_boton_whatsapp:
      'Escribir por WhatsApp',

    aviso_footer:
      '© Restaurante La Mesa. Todos los derechos reservados.'
  },

  diseno: {
    header_bg: '#241A16',
    header_text: '#FFFFFF',
    main_bg: '#FFF9F2',
    surface_bg: '#FFFFFF',

    footer_bg: '#1B1512',
    footer_text: '#F8EEE6',

    primary: '#A63D2F',
    primary_text: '#FFFFFF',

    accent: '#D6A85F',

    text: '#2B2420',
    muted: '#756A63'
  },

  menu: [
    {
      Nombre: 'Burger de la Casa',
      Descripción:
        'Carne a la parrilla, queso, cebolla caramelizada y salsa especial.',
      Precio: '$189',
      Imagen: 'platillo1.jpg'
    },

    {
      Nombre: 'Pasta Cremosa',
      Descripción:
        'Pasta al dente con salsa cremosa, parmesano y hierbas frescas.',
      Precio: '$175',
      Imagen: 'platillo2.jpg'
    },

    {
      Nombre: 'Tacos Especiales',
      Descripción:
        'Tres tacos con proteína a elegir, guarnición y salsa de la casa.',
      Precio: '$165',
      Imagen: 'platillo3.jpg'
    },

    {
      Nombre: 'Ensalada Fresca',
      Descripción:
        'Mezcla de hojas, vegetales de temporada, semillas y vinagreta.',
      Precio: '$145',
      Imagen: 'platillo4.jpg'
    },

    {
      Nombre: 'Postre de la Casa',
      Descripción:
        'Postre artesanal del día.',
      Precio: '$110',
      Imagen: 'platillo5.jpg'
    },

    {
      Nombre: 'Bebida Especial',
      Descripción:
        'Bebida de temporada preparada al momento.',
      Precio: '$75',
      Imagen: 'platillo6.jpg'
    }
  ]
};


/* =========================================================
   UTILIDADES
   ========================================================= */

const $ = (id) =>
  document.getElementById(id);


const setText = (id, value) => {

  const el = $(id);

  if (
    el &&
    value !== undefined &&
    value !== null
  ) {
    el.textContent = String(value);
  }

};


const cleanPhone = (value) =>
  String(value || '')
    .replace(/\D/g, '');


const validHex = (value) =>
  /^#[0-9a-fA-F]{6}$/
    .test(
      String(value || '').trim()
    );


const safeUrl = (
  value,
  fallback = '#'
) => {

  const raw =
    String(value || '').trim();

  try {

    const url =
      new URL(
        raw,
        window.location.href
      );

    return [
      'http:',
      'https:',
      'mailto:',
      'tel:'
    ].includes(url.protocol)
      ? url.href
      : fallback;

  }
  catch {

    return fallback;

  }

};


/* =========================================================
   CONVERTIR FILAS DE EXCEL EN OBJETO
   ========================================================= */

function rowsToMap(
  rows,
  keyName,
  valueName
) {

  const result = {};

  for (const row of rows) {

    const key =
      String(
        row[keyName] ?? ''
      ).trim();

    if (!key) continue;

    result[key] =
      row[valueName] ?? '';

  }

  return result;

}


/* =========================================================
   DISEÑO
   ========================================================= */

function applyTheme(theme) {

  const map = {

    header_bg: '--header-bg',

    header_text:
      '--header-text',

    main_bg:
      '--main-bg',

    surface_bg:
      '--surface-bg',

    footer_bg:
      '--footer-bg',

    footer_text:
      '--footer-text',

    primary:
      '--primary',

    primary_text:
      '--primary-text',

    accent:
      '--accent',

    text:
      '--text',

    muted:
      '--muted'

  };


  Object.entries(map)
    .forEach(
      ([key, cssVar]) => {

        if (
          validHex(theme[key])
        ) {

          document
            .documentElement
            .style
            .setProperty(
              cssVar,
              theme[key]
            );

        }

      }
    );

}


/* =========================================================
   CONTENIDO
   ========================================================= */

function applyContent(data) {

  const nombre =
    data.nombre ||
    FALLBACK.contenido.nombre;


  const nombreCorto =
    nombre
      .replace(
        /^Restaurante\s+/i,
        ''
      )
      .trim()
      || nombre;


  const iniciales =
    nombreCorto
      .split(/\s+/)
      .slice(0, 2)
      .map(
        palabra =>
          palabra[0] || ''
      )
      .join('')
      .toUpperCase();


  document.title =
    nombre;


  setText(
    'brandNombre',
    nombreCorto
  );


  setText(
    'footerNombre',
    nombreCorto
  );


  document
    .querySelectorAll(
      '.brand-mark'
    )
    .forEach(
      el => {

        el.textContent =
          iniciales || 'R';

      }
    );


  setText(
    'heroNombre',
    nombre
  );


  setText(
    'heroSlogan',
    data.slogan
  );


  setText(
    'heroDescripcion',
    data.descripcion_corta
  );


  setText(
    'sobreTitulo',
    data.sobre_titulo
  );


  setText(
    'sobreTexto',
    data.sobre_texto
  );


  setText(
    'ctaTitulo',
    data.cta_titulo
  );


  setText(
    'ctaTexto',
    data.cta_texto
  );


  setText(
    'direccion',
    data.direccion
  );


  setText(
    'horario',
    data.horario
  );


  setText(
    'footerAviso',
    data.aviso_footer
  );


  setText(
    'heroMenuBtn',
    data.texto_boton_hero
    || 'Ver menú'
  );


  /* ==========================
     WHATSAPP
     ========================== */

  const wa =
    cleanPhone(
      data.whatsapp
    );


  const waUrl =
    wa
      ? `https://wa.me/${wa}`
      : '#';


  [
    'navWhatsapp',
    'heroWhatsapp',
    'ctaWhatsapp'
  ]
    .forEach(
      id => {

        const el =
          $(id);

        if (el) {

          el.href =
            waUrl;

        }

      }
    );


  setText(
    'heroWhatsapp',
    data.texto_boton_whatsapp
    || 'Escribir por WhatsApp'
  );


  setText(
    'ctaWhatsapp',
    data.texto_boton_whatsapp
    || 'Escribir por WhatsApp'
  );


  /* ==========================
     TELÉFONO
     ========================== */

  const tel =
    $('telefono');


  if (tel) {

    tel.textContent =
      data.telefono || '';

    tel.href =
      `tel:${cleanPhone(
        data.telefono
      )}`;

  }


  /* ==========================
     EMAIL
     ========================== */

  const email =
    $('email');


  if (email) {

    email.textContent =
      data.email || '';

    email.href =
      data.email
        ? `mailto:${String(
            data.email
          ).trim()}`
        : '#';

  }


  /* ==========================
     REDES
     ========================== */

  const instagram =
    $('instagram');


  if (instagram) {

    instagram.href =
      safeUrl(
        data.instagram
      );

  }


  const facebook =
    $('facebook');


  if (facebook) {

    facebook.href =
      safeUrl(
        data.facebook
      );

  }


  const maps =
    $('mapsLink');


  if (maps) {

    maps.href =
      safeUrl(
        data.maps_url
      );

  }

}


/* =========================================================
   IMÁGENES
   ========================================================= */

function safeImageName(
  value,
  index
) {

  const name =
    String(value || '')
      .trim();


  return /^[\w.-]+$/u
    .test(name)

    ? name

    : `platillo${
        index + 1
      }.jpg`;

}


/* =========================================================
   MENÚ
   ========================================================= */

function renderMenu(items) {

  const grid =
    $('menuGrid');


  if (!grid) return;


  grid.replaceChildren();


  items
    .filter(
      item =>
        String(
          item.Nombre || ''
        ).trim()
    )
    .forEach(
      (item, index) => {

        const article =
          document.createElement(
            'article'
          );


        article.className =
          'menu-card';


        /* Imagen */

        const img =
          document.createElement(
            'img'
          );


        img.src =
          `img/${
            safeImageName(
              item.Imagen,
              index
            )
          }`;


        img.alt =
          String(
            item.Nombre ||
            'Platillo'
          );


        img.loading =
          'lazy';


        img.onerror =
          () => {

            img.src =
              'img/platillo1.jpg';

          };


        /* Contenido */

        const body =
          document.createElement(
            'div'
          );


        body.className =
          'menu-card-body';


        const top =
          document.createElement(
            'div'
          );


        top.className =
          'menu-card-top';


        const h3 =
          document.createElement(
            'h3'
          );


        h3.textContent =
          String(
            item.Nombre || ''
          );


        const price =
          document.createElement(
            'span'
          );


        price.className =
          'price';


        price.textContent =
          String(
            item.Precio || ''
          );


        const desc =
          document.createElement(
            'p'
          );


        desc.textContent =
          String(
            item.Descripción
            ||
            item.Descripcion
            ||
            ''
          );


        top.append(
          h3,
          price
        );


        body.append(
          top,
          desc
        );


        article.append(
          img,
          body
        );


        grid.append(
          article
        );

      }
    );

}


/* =========================================================
   APLICAR CONFIGURACIÓN
   ========================================================= */

function applyConfig(config) {

  applyTheme(
    config.diseno || {}
  );


  applyContent(
    config.contenido || {}
  );


  renderMenu(
    config.menu || []
  );

}


/* =========================================================
   LEER WORKBOOK DE EXCEL
   ========================================================= */

function parseExcelBuffer(buffer) {

  if (
    typeof XLSX === 'undefined'
  ) {

    throw new Error(
      'No se pudo cargar la librería XLSX.'
    );

  }


  const workbook =
    XLSX.read(
      buffer,
      {
        type: 'array'
      }
    );


  const getRows =
    (sheetName) => {

      const sheet =
        workbook
          .Sheets[
            sheetName
          ];


      if (!sheet) {

        return [];

      }


      return XLSX
        .utils
        .sheet_to_json(
          sheet,
          {
            defval: ''
          }
        );

    };


  return {

    contenido:
      rowsToMap(
        getRows(
          'CONTENIDO'
        ),
        'Campo',
        'Valor'
      ),


    diseno:
      rowsToMap(
        getRows(
          'DISENO'
        ),
        'Configuración',
        'Valor'
      ),


    menu:
      getRows(
        'MENU'
      )

  };

}


/* =========================================================
   COMBINAR EXCEL + VALORES PREDETERMINADOS
   ========================================================= */

function mergeConfig(
  excelConfig
) {

  return {

    contenido: {

      ...FALLBACK.contenido,

      ...excelConfig.contenido

    },


    diseno: {

      ...FALLBACK.diseno,

      ...excelConfig.diseno

    },


    menu:

      excelConfig.menu
        &&
      excelConfig.menu.length

        ? excelConfig.menu

        : FALLBACK.menu

  };

}


/* =========================================================
   GITHUB PAGES / SERVIDOR WEB
   ========================================================= */

async function loadExcelConfigRemote() {

  const response =
    await fetch(
      `Datos_Restaurante.xlsx?v=${
        Date.now()
      }`,
      {
        cache: 'no-store'
      }
    );


  if (!response.ok) {

    throw new Error(
      `No se pudo leer Datos_Restaurante.xlsx (${response.status}).`
    );

  }


  const buffer =
    await response
      .arrayBuffer();


  return parseExcelBuffer(
    buffer
  );

}


/* =========================================================
   LEER UN ARCHIVO LOCAL
   ========================================================= */

async function loadLocalFile(file) {

  const buffer =
    await file
      .arrayBuffer();


  const config =
    parseExcelBuffer(
      buffer
    );


  applyConfig(
    mergeConfig(
      config
    )
  );

}


/* =========================================================
   NOTIFICACIONES
   ========================================================= */

let noticeTimeout;


function showNotice(
  message,
  duration = 5000
) {

  const notice =
    $('configNotice');


  if (!notice) {

    console.log(
      message
    );

    return;

  }


  clearTimeout(
    noticeTimeout
  );


  notice.textContent =
    message;


  notice.hidden =
    false;


  noticeTimeout =
    setTimeout(
      () => {

        notice.hidden =
          true;

      },

      duration
    );

}


/* =========================================================
   PANEL DE VISTA PREVIA LOCAL
   ========================================================= */

function createLocalPreviewPanel() {

  if (
    window.location.protocol
    !==
    'file:'
  ) {

    return;

  }


  const panel =
    document.createElement(
      'div'
    );


  panel.id =
    'localExcelPanel';


  panel.innerHTML =
    `

      <div
        style="
          font-weight:700;
          margin-bottom:6px;
        "
      >
        Vista previa local
      </div>


      <div
        style="
          font-size:13px;
          line-height:1.4;
          margin-bottom:10px;
          opacity:.85;
        "
      >
        Conecta
        <strong>
          Datos_Restaurante.xlsx
        </strong>.

        Después puedes editarlo
        y guardar los cambios.
      </div>


      <button
        id="connectExcelBtn"
        type="button"
        style="
          width:100%;
          border:0;
          padding:10px 12px;
          border-radius:8px;
          cursor:pointer;
          font-weight:700;
          background:#A63D2F;
          color:#FFFFFF;
        "
      >
        📊 Conectar Excel
      </button>


      <div
        id="localExcelStatus"
        style="
          margin-top:8px;
          font-size:12px;
          line-height:1.4;
        "
      >
        Excel no conectado.
      </div>


      <input
        id="fallbackExcelInput"
        type="file"
        accept=".xlsx"
        style="
          display:none;
          margin-top:10px;
          width:100%;
        "
      >

    `;


  Object.assign(
    panel.style,
    {

      position:
        'fixed',

      right:
        '18px',

      bottom:
        '18px',

      width:
        '260px',

      padding:
        '16px',

      zIndex:
        '99999',

      background:
        '#FFFFFF',

      color:
        '#2B2420',

      border:
        '1px solid rgba(0,0,0,.12)',

      borderRadius:
        '12px',

      boxShadow:
        '0 8px 30px rgba(0,0,0,.18)',

      fontFamily:
        'Arial, sans-serif'

    }
  );


  document.body
    .appendChild(
      panel
    );


  const button =
    $('connectExcelBtn');


  const input =
    $('fallbackExcelInput');


  button.addEventListener(
    'click',
    connectLocalExcel
  );


  input.addEventListener(
    'change',
    async event => {

      const file =
        event
          .target
          .files[0];


      if (!file) return;


      try {

        await loadLocalFile(
          file
        );


        setLocalStatus(
          '✅ Excel cargado correctamente.'
        );


        showNotice(
          'Excel cargado correctamente.'
        );

      }
      catch (error) {

        console.error(
          error
        );


        setLocalStatus(
          '❌ No se pudo leer el Excel.'
        );

      }

    }
  );

}


/* =========================================================
   ESTADO DEL PANEL
   ========================================================= */

function setLocalStatus(
  message
) {

  const status =
    $('localExcelStatus');


  if (status) {

    status.textContent =
      message;

  }

}


/* =========================================================
   FILE SYSTEM ACCESS API
   ========================================================= */

let localExcelHandle =
  null;


let lastLocalVersion =
  null;


let localWatcher =
  null;


/* =========================================================
   SELECCIONAR EXCEL
   ========================================================= */

async function connectLocalExcel() {

  /*
     Chrome / Edge:
     usamos File System Access API
     cuando esté disponible.
  */

  if (
    'showOpenFilePicker'
    in window
  ) {

    try {

      const handles =
        await window
          .showOpenFilePicker(
            {

              multiple:
                false,

              types: [

                {

                  description:
                    'Archivo Excel',

                  accept: {

                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
                      [
                        '.xlsx'
                      ]

                  }

                }

              ]

            }
          );


      localExcelHandle =
        handles[0];


      lastLocalVersion =
        null;


      await refreshLocalExcel(
        true
      );


      startExcelWatcher();


      setLocalStatus(
        '✅ Excel conectado. Guarda cambios en Excel y la página se actualizará automáticamente.'
      );


      return;

    }
    catch (error) {

      /*
         Si simplemente cerró
         el selector, no mostramos
         un error grave.
      */

      if (
        error.name
        ===
        'AbortError'
      ) {

        return;

      }


      console.warn(
        'File System Access API no disponible:',
        error
      );

    }

  }


  /*
     Fallback:
     selector tradicional.
  */

  const input =
    $('fallbackExcelInput');


  if (input) {

    input.style.display =
      'block';


    setLocalStatus(
      'Selecciona manualmente Datos_Restaurante.xlsx.'
    );

  }

}


/* =========================================================
   VOLVER A LEER EL EXCEL LOCAL
   ========================================================= */

async function refreshLocalExcel(
  force = false
) {

  if (
    !localExcelHandle
  ) {

    return;

  }


  try {

    const file =
      await localExcelHandle
        .getFile();


    /*
       Creamos una "versión"
       utilizando fecha y tamaño.
    */

    const version =
      `${file.lastModified}-${file.size}`;


    /*
       No cambió.
    */

    if (
      !force
      &&
      version ===
      lastLocalVersion
    ) {

      return;

    }


    /*
       Esperamos brevemente para
       asegurarnos de que Excel haya
       terminado de guardar.
    */

    if (!force) {

      await new Promise(
        resolve =>
          setTimeout(
            resolve,
            300
          )
      );

    }


    const updatedFile =
      await localExcelHandle
        .getFile();


    await loadLocalFile(
      updatedFile
    );


    lastLocalVersion =
      `${
        updatedFile.lastModified
      }-${
        updatedFile.size
      }`;


    const hora =
      new Date()
        .toLocaleTimeString();


    setLocalStatus(
      `✅ Actualizado automáticamente a las ${hora}`
    );


    console.log(
      'Excel actualizado:',
      hora
    );

  }
  catch (error) {

    console.error(
      'Error leyendo Excel local:',
      error
    );


    setLocalStatus(
      '⚠️ No se pudo volver a leer el Excel. Conéctalo nuevamente.'
    );


    stopExcelWatcher();

  }

}


/* =========================================================
   VIGILAR CAMBIOS DEL EXCEL
   ========================================================= */

function startExcelWatcher() {

  stopExcelWatcher();


  /*
     Revisamos el archivo
     cada segundo.
  */

  localWatcher =
    setInterval(

      () => {

        refreshLocalExcel(
          false
        );

      },

      1000

    );

}


/* =========================================================
   DETENER VIGILANCIA
   ========================================================= */

function stopExcelWatcher() {

  if (
    localWatcher
  ) {

    clearInterval(
      localWatcher
    );


    localWatcher =
      null;

  }

}


/* =========================================================
   NAVEGACIÓN MÓVIL
   ========================================================= */

function setupNavigation() {

  const btn =
    document.querySelector(
      '.nav-toggle'
    );


  const nav =
    $('navLinks');


  if (
    !btn
    ||
    !nav
  ) {

    return;

  }


  btn.addEventListener(
    'click',
    () => {

      const open =
        nav.classList
          .toggle(
            'open'
          );


      btn.setAttribute(
        'aria-expanded',
        String(open)
      );

    }
  );


  nav
    .querySelectorAll('a')
    .forEach(
      a =>
        a.addEventListener(
          'click',
          () => {

            nav.classList
              .remove(
                'open'
              );


            btn.setAttribute(
              'aria-expanded',
              'false'
            );

          }
        )
    );

}


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

window.addEventListener(
  'DOMContentLoaded',

  async () => {

    /*
       Primero mostramos la
       configuración predeterminada.
    */

    applyConfig(
      FALLBACK
    );


    setupNavigation();


    /*
       MODO LOCAL
       file:///...
    */

    if (
      window.location.protocol
      ===
      'file:'
    ) {

      createLocalPreviewPanel();


      showNotice(
        'Vista local: conecta Datos_Restaurante.xlsx para activar la actualización automática.',
        8000
      );


      return;

    }


    /*
       MODO WEB
       GitHub Pages / hosting
    */

    try {

      const excelConfig =
        await loadExcelConfigRemote();


      applyConfig(
        mergeConfig(
          excelConfig
        )
      );

    }
    catch (error) {

      console.warn(
        error
      );


      showNotice(
        'No se pudo cargar Datos_Restaurante.xlsx. Se muestran los datos predeterminados.'
      );

    }

  }

);