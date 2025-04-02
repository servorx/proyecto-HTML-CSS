# Diseño de App de Ecommerce de Ropa - Fase 1

## Descripción del Proyecto

El proyecto consiste en la creación de una página web de ecommerce dedicada exclusivamente a la venta de ropa, utilizando solo HTML y CSS para la maquetación. El objetivo es diseñar una interfaz atractiva y fácil de usar, que permita a los usuarios explorar y comprar productos de manera intuitiva. 

La web contará con tres vistas principales:
- **Página de inicio**
- **Página de detalle de producto**
- **Página de carrito de compras**

Todas estarán diseñadas para ofrecer una experiencia de usuario fluida y atractiva.

---

## Problemática

Actualmente, muchos sitios web de ecommerce de ropa tienen diseños complejos o poco intuitivos, lo que dificulta la navegación y reduce la satisfacción del usuario. 

### Desafíos a abordar:
- Mejorar la usabilidad y apariencia del sitio web.
- Optimizar la navegación y presentación de la información.
- Facilitar la búsqueda y compra de productos.

---

## Funcionalidades Principales

### 1. Página de Inicio
- Saludo de bienvenida personalizado con el nombre y foto de perfil del usuario.
- Barra de búsqueda para encontrar productos específicos.
- Categorías disponibles: **Vestidos, Camisetas, Vaqueros, etc.**
- Tarjetas de productos que incluyen:
  - Imagen del producto.
  - Botón para añadir a favoritos.
  - Título, categoría, precio y calificación.
- Menú móvil con opciones: **Inicio, Carrito de Compras, Lista de Favoritos y Perfil**.

### 2. Página de Detalle del Producto
- Tarjeta con dos botones: **"Atrás" y "Añadir a favoritos"**.
- Imagen del producto.
- Información detallada:
  - **Título, calificación y número de personas que lo han visto**.
  - Botones para ajustar la cantidad a comprar (por defecto, 1).
  - Botón **"Ver más"** que despliega un cuadro de diálogo con información completa.
- Opciones de personalización: **Tamaño y color**.
- Botón de compra que muestra el precio total según la cantidad seleccionada.

### 3. Página del Carrito de Compras
- Sección de navegación con **botones "Atrás" y menú móvil**.
- Título: **"Checkout"**.
- Tarjetas de productos seleccionados con:
  - Imagen, título, categoría, precio y cantidad seleccionada.
  - Botones para modificar la cantidad.
- Sección de información de envío:
  - **Opciones de pago** (Tarjeta de crédito o débito).
  - **Resumen de costos**: Total de productos, precio total, costo de envío (si aplica), descuentos, subtotal.
  - Botón **"Pagar"**, que muestra un cuadro modal confirmando la compra.

---

## Tecnologías Recomendadas

### Front-end
- **Figma**: [Ver diseño](https://www.figma.com/community/file/1169625825293818878/mobile-ecommerce-clothing-store-app-desig)

### Recursos
- **Barra de búsqueda (Página de Inicio)**: [Ver recurso](https://www.facebook.com/story.php?story_fbid=122161474094048970&id=61551469102959&mibextid=WC7FNe&rdid=ARxpghKfxeRvWZ3p)
- **Botón "Ver más" (Página de Detalle del Producto)**: [Ver recurso](https://codepen.io/ckozalla/pen/LYLaVZW)
- **Menú móvil en forma de hamburguesa (Página del Carrito de Compras)**: [Ver recurso](https://codepen.io/sanketbodke/pen/LYyzzYb)
- **Botón "Pagar" (Página del Carrito de Compras)**: [Ver recurso](https://codepen.io/ckozalla/pen/LYLaVZW)
- **Botón "Pagar" (Página del Carrito de Compras - Opcional)**: [Ver recurso](https://sweetalert2.github.io/#examples)

### Opciones de Desarrollo
- **Opción 1 (Opcional):** React o Vue.js para una interfaz dinámica.
- **Opción 2:** Desarrollo con **HTML, CSS y JavaScript puro**.

> **Nota:** El uso de los recursos es obligatorio, excepto aquellos marcados como opcionales.

---

## Arquitectura del Proyecto

El árbol de archivos si el desarrollo es puro será el siguiente:

```
app_de_ecommerce_de_ropa/
├── css/
│   ├── style.css
│   ├── detail.css
│   ├── checkout.css
│   └── variables.css
├── js/
│   ├── Components/
│   │   └── modal.js  # (Opcional)
│   ├── main.js
│   ├── detail.js
│   └── checkout.js
├── storage/
│   ├── font/
│   │   └── encode_sans/
│   └── img/
├── views/
│   ├── detail.html
│   └── checkout.html
└── index.html
```

### Uso de GitHub
- **Repositorio privado** compartido con las cuentas indicadas por el trainer.
- **Rama principal (`main`)** para la presentación del proyecto.
- **Despliegue en GitHub Pages** obligatorio.

> **Nota:** Si no se utiliza la rama `main` o no se despliega la web, la calificación será **0** automáticamente.

---

## Resultado Esperado

Se debe entregar un **enlace al repositorio privado en GitHub** que contenga el proyecto con los siguientes requisitos:

- **Desarrollo en HTML y CSS nativo**, sin librerías externas.
- **Propuestas de módulos desarrolladas previamente en Adobe XD o Figma** *(Si aplica).* 
- **Sitio responsive (`@media query`)** con UI/UX basado en el wireframe del equipo de diseño.

---

¡Buena suerte con el desarrollo del proyecto! 🚀
