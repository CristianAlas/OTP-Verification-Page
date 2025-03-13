# OTP Verification Page with 404 Error Page

Este proyecto crea una página de verificación OTP (One-Time Password) y una página de error 404 personalizada. La página de verificación OTP permite a los usuarios ingresar un código en campos de entrada de un solo carácter, mientras que la página de error 404 muestra una animación y un enlace para volver al inicio.

### Descripción

1. **OTP Verification Page:**
   - La página permite a los usuarios ingresar un código OTP en cuatro campos de entrada.
   - Los campos de entrada se enfocan automáticamente uno tras otro cuando se ingresa un valor en el campo anterior.
   - Cuando el usuario presiona el botón "Verify", es redirigido a una página de error 404 (puedes modificar la URL de destino).

2. **404 Error Page:**
   - La página 404 incluye una animación de fondo y un mensaje personalizado diciendo "Look like you're lost" junto con un enlace para regresar a la página de inicio.

### Estructura del Proyecto

El proyecto incluye los siguientes archivos:

- `index.html`: La página principal con la verificación OTP.
- `404.html`: La página personalizada de error 404.
- `style.css`: Los estilos CSS para ambas páginas.
- `index.js`: El archivo JavaScript que controla el comportamiento de los campos de entrada OTP y la redirección.

### Instalación

1. **Clonar el repositorio:**

   Para clonar el repositorio, ejecuta el siguiente comando en tu terminal:

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git

Abrir el archivo index.html en tu navegador:

Abre el archivo index.html en tu navegador para ver la página de verificación OTP. Puedes probar el comportamiento de la verificación OTP y la redirección a la página 404.

Cómo usar
Verificación OTP:

Ingresa un código de 4 dígitos en los campos de entrada. El cursor se moverá automáticamente al siguiente campo cuando ingreses un valor en el campo anterior.
Haz clic en el botón "Verify" para ser redirigido a la página de error 404.
Página de Error 404:

La página de error 404 se muestra si accedes a una página no disponible. Contiene una animación de fondo y un enlace para regresar a la página de inicio.
Modificar la redirección: Si deseas cambiar la redirección después de hacer clic en el botón "Verify", puedes modificar la función redirectToPage() en el archivo index.js para cambiar la URL de destino:

javascript
Copiar
Editar
function redirectToPage() {
    window.location.href = "404.html"; // Cambia "404.html" por la URL de la página a la que deseas redirigir
}


click aqui:
https://cristianalas.github.io/OTP-Verification-Page/
