"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá realizar los siguientes enunciados todos en este
    script de javascript. Cada enunciado agrega una funcionalidad
    extra al programa.
/*

/* 1 - Enunciado

- Debera capturar el evento "onclick" del boton "Ingresar"
y leer los datos ingresados en "usuario" y "email".
- Tome esos datos y almacenelo en memoria permanente del explorador.
- Deberá completar las etiquetas <p> de id "usuarioLogeado" y "emailLogeado"
con los datos almacenados en memoria, a fin de darle la bienvenida al usuario logeado.

*/
const button = document.querySelector("#btnIngresar");
const usuario = document.querySelector("#usuario")
const email = document.querySelector("#email")

button.onclick = () => {
    localStorage.setItem("usuario", usuario.value);
    localStorage.setItem("email",email.value)
    window.location.reload();
}

const usuarioLogeado = document.querySelector("#usuarioLogeado")
const emailLogeado = document.querySelector("#emailLogeado")
// emailLogeado.textContent = localStorage.getItem("email")
// usuarioLogeado.textContent = localStorage.getItem("usuario");


/* 2 - Enunciado

- Al comenzar el script se debe verificar si en memoria se encuentran
almacenados los datos de "usuario" y "email".
- En caso de que hubiera datos almacenados se debe completar los elementos
"usuarioLogeado" y "emailLogeado".
- Se debe ocultar la sección "login" (puede usar la clase CSS hidden ya creada)
y deberá revelar la sección "logout" (quitar la clase hidden).

*/

const user = localStorage.getItem("usuario");
const correo = localStorage.getItem("email");
const login = document.querySelector("#login");
const logout = document.querySelector("#logout");
(user == null ? console.log("usuario no logueado") : welcomeUser(user,correo))

function welcomeUser (user, correo ) {
    
    login.setAttribute('class', "hidden");
    logout.setAttribute('class', "")
    usuarioLogeado.textContent = user;
    emailLogeado.textContent = correo;
    
}



/* 3 - Enunciado

- Debera capturar el evento "onclick" del boton "Salir". Cuando este
botón sea presionado deberá borrar de memoria las variables de este programa.
- Luego deberá refrescar la página (desde javascript, con window.location.reload()) y al
volverse a cargar debería aparecer nuevamente la sección de bienvenida
ya que no debería haber más datos en memoria cargados.

*/

const btnSalir = document.querySelector("#btnSalir")
btnSalir.onclick = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("email");
    window.location.reload();
}
