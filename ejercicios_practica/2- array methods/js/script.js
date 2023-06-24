"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá utilizar los datos en formato JSON disponible
    en "data.js" para realizar los siguientes enunciados.
/*

/* 1 - Enunciado

- Levantar los datos data.js parseando el JSON, generando
una array de personas.
- Con el array anterior utilice el metodo filter para generar
un array de personas mayores o igual a 18 años.
- Imprimir en consola el array resultante.

*/
let arrayJson = JSON.parse(personasJSON)
arrayJson = arrayJson.filter(persona => {
    return persona.edad > 18
});
console.log(arrayJson)

/* 2 - Enunciado

- Con el array de personas filtradas (resultado del enunciado anterior)
utilice le método forEach para en cada iteración con cada persona
renderizar el nombre y edad de esa persona en el HTML.
- Agregue al HTML los elementos que crea necesario e utilice los
mecanismos que prefiera para agregar por cada persona el nombre y edad
en el HTML (es decir, generar el contenido de forma dinámica).

*/
let body = document.body;
let parrafo = document.createElement("p");
let array = []

arrayJson.forEach(person => {
    array.push(person.nombre+ " " + person.edad);
    console.log(array)
});
parrafo.textContent = array
body.appendChild(parrafo);



/* 3 - BONUS TRACK

- Si misión, en caso que decida aceptarla, es que la edad a filtrar
en el primer enunciado no sea un valor escrito en este script, sino
que sea un valor que se toma del HTML (un input).
- Que toda la acción de filtrado (enunciado 1) y renderizado (enunciado 2)
se dispare al presionar un botón en el HTML que usted agregue.

*/

let selectedAge = document.createElement("input");
let button = document.createElement("button");
button.textContent = "Filtrar";
let lineBreak = document.createElement("br");
let newArrayJson = JSON.parse(personasJSON)
let newParrafo = document.createElement("p");

body.appendChild(selectedAge);
body.appendChild(lineBreak);
body.appendChild(button);
body.appendChild(lineBreak);
body.appendChild(newParrafo);

button.onclick = () => {
    filter(selectedAge.value);
    render(newArrayJson);
}

function filter (age) {
    newArrayJson = newArrayJson.filter(persona => {
        return persona.edad > age
    });
}

let newRendered  = []
function render (newArrayJson) {
    console.log(newArrayJson)
    newArrayJson.forEach(people => {
        newRendered.push(people.nombre+ " " + people.edad);
    });
    newParrafo.textContent = newRendered
    body.appendChild(newParrafo)
}
