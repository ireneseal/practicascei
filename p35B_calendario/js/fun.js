const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
];

const diaSemana = {
    lunes: "L",
    martes: "M",
    miercoles: "X",
    jueves: "J",
    viernes: "V",
    sabado: "S",
    domingo: "D"

    //KEYS : //VALUES
};

//Creo un contenedor
document.body.innerHTML = '<div class="container"></div>'

//Capturo el contenedor, porque he inyectado el html, pero no le estoy llamando desde js

const container = document.querySelector('.container'); //siempre poner la misma clase con la variable, para que haya una correlacion

//Aplico estilo grid al contenedor
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(4, 1fr)";
container.style.border = "1px solid #000";

//Recorro el array y en cada mes aplico una funcion(callback)

meses.forEach((mes)=> { //El arrow siempre va con el forEach, es lo mismo que poner una funcion

container.innerHTML += `<div class="mes-${mes}" style = "padding:10px; border:1px solid #000"><h3>${mes}</h3></div>`;

//Capturo los dias de cada mes

const mesActual = document.querySelector('.mes-'+mes);
const tituloMes = document.querySelector('.mes-'+mes + ' h3');

//Estilos a mes

mesActual.style.display = "grid";
mesActual.style.gridTemplateColumns = "repeat(7, 1fr)";
tituloMes.style.gridColumn = "span 7";

//Convierto el objeto a array, porque el bucle en objeto no asegura el orden

Object.keys(diaSemana); //me da los keys
Object.values(diaSemana); //me da los values
Object.entries(diaSemana); //me da ambos

console.log(Object.keys(diaSemana)); //Me loggea los keys (valores del objeto) y me lo devuelve como un array ordenado

//Creo contenedor para dias

mesActual.innerHTML +=`<div class="tituloDia-${mes}">`;

//Capturo header de dias

const diaSemanaHeading = document.querySelector('.tituloDia-' +mes);

//Estilos a diaSemanaHeading

diaSemanaHeading.style.gridColumn = "span 7";
diaSemanaHeading.style.display = "grid";
diaSemanaHeading.style.gridTemplateColumns = "repeat(7, 1fr)";


//Pinto con un loop los dias de la semana dentro del contenedor de dias

Object.values(diaSemana).forEach((dia) =>{
    diaSemanaHeading.innerHTML += `<p style="font-weight:600">${dia}</p>`;

});


//Creo un bucle de 31 iteraciones, uno para cada dia

let dias = 31;
if (mes == "febrero") {dias = 29};
if (mes == "abril" || mes == "junio" || mes == "septiembre" || mes == "noviembre") {dias = 30};

for (let i=1; i<=dias; i++){
    mesActual.innerHTML += `<span>${i}</span>`
}

});