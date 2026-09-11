# Guía rápida: personaliza y publica tu restaurante

Esta plantilla fue preparada para que **no necesites usar terminal, comandos de Git ni administrar ramas manualmente**.

## 1. Personaliza el Excel

Abre `Datos_Restaurante.xlsx`.

- En **CONTENIDO**, edita únicamente la columna **Valor**.
- En **DISENO**, cambia los colores usando códigos HEX como `#A63D2F`.
- En **MENU**, cambia platillos, descripciones, precios y nombres de imagen.

Guarda el archivo conservando exactamente el nombre `Datos_Restaurante.xlsx`.

## 2. Reemplaza tus fotografías

En la carpeta `img/` puedes reemplazar:

- `portada.jpg`
- `restaurante.jpg`
- `platillo1.jpg` a `platillo6.jpg`

Usa tus propias fotografías, pero conserva los nombres de archivo. Si cambias el nombre de un platillo en la columna **Imagen** del Excel, asegúrate de subir un archivo con ese mismo nombre dentro de `img/`.

## 3. Crea tu repositorio en GitHub

1. Inicia sesión en GitHub.
2. Crea un repositorio nuevo y público.
3. Puedes llamarlo, por ejemplo, `mi-restaurante`.
4. En el repositorio, usa **Add file → Upload files**.
5. Arrastra **el contenido de esta carpeta descomprimida**. No subas únicamente el ZIP.
6. Guarda los cambios con el botón de GitHub para confirmar la carga.

No necesitas utilizar consola, `git add`, `git commit` ni `git push`.

## 4. Activa GitHub Pages

1. Abre **Settings** del repositorio.
2. En el menú lateral entra a **Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Selecciona la rama principal que GitHub creó para tu repositorio (normalmente `main`).
5. Selecciona la carpeta raíz `/ (root)`.
6. Guarda la configuración.

GitHub te mostrará la dirección pública de tu sitio cuando termine de publicarlo. La publicación o actualización puede tardar algunos minutos; GitHub indica que en algunos casos puede tardar hasta 10 minutos.

## 5. Cómo cambiar información después

### Cambiar textos, colores o menú

1. Edita `Datos_Restaurante.xlsx` en tu computadora.
2. Guarda el archivo con el mismo nombre.
3. En GitHub entra a la raíz de tu repositorio.
4. Usa **Add file → Upload files**.
5. Arrastra la nueva versión de `Datos_Restaurante.xlsx`.
6. Confirma el cambio.
7. Recarga tu página después de que GitHub Pages procese la actualización.

### Cambiar una fotografía

1. Prepara la fotografía en tu computadora.
2. Renómbrala exactamente como el archivo que quieres reemplazar, por ejemplo `portada.jpg`.
3. En GitHub entra a la carpeta `img`.
4. Usa **Add file → Upload files**.
5. Sube la nueva fotografía y confirma el cambio.

## 6. Qué puedes personalizar sin programar

- Nombre del restaurante
- Slogan y textos
- WhatsApp, teléfono y correo
- Dirección y horario
- Instagram y Facebook
- Colores del header, fondo, footer, botones y textos
- Platillos, precios y descripciones
- Fotografías

## 7. Cambios avanzados

Agregar nuevas secciones, formularios, reservaciones, bases de datos o un diseño completamente personalizado sí requiere modificar el proyecto.

Si quieres una página hecha a la medida de tu restaurante, visita **Proyectos MEG**:

https://www.proyectosmeg.mx/

---

**Nota técnica:** el archivo `index.html` carga SheetJS desde su CDN para poder leer `Datos_Restaurante.xlsx` directamente en el navegador. Por ello, la página necesita conexión a Internet al cargar por primera vez esa librería.
