//var variableVacia,level0=document.querySelector("#level0"),level1=document.querySelector("#level1"),poster=document.querySelector(".wally__poster"),wally=document.querySelector(".wally"),mensaje=" La posici\xf2n de wally es:",isProfessionalMode=!0;function posicionWally(){console.log("Ah\xed no est\xe1 wally!")}level0.addEventListener("click",function(){level0.classList.add("active"),level1.classList.remove("active"),poster.style.filter="saturate(120%)",isProfessionalMode=!1}),level1.addEventListener("click",function(){level1.classList.add("active"),level0.classList.remove("active"),poster.style.filter="saturate(0%)",isProfessionalMode=!0}),poster.addEventListener("click",posicionWally),wally.addEventListener("click",function(e){var l=[e.clientX,e.clientY],o="Enhorabuena, has encontrado a Wally!!, tus coordenadas son: "+l[0]+", "+l[1],s=isProfessionalMode?233:144,a={coordenadas:l,codigo_respuesta:s,modo_pro:isProfessionalMode};console.log(o),console.log("tu c\xf3digo de respuesta es: "+s),console.log(a),e.stopPropagation()});

const poster = document.querySelector('.wally__poster');

//console.log(typeof poster) //Resulta en un tipo de dato = Object, no primitivo

const wally = document.querySelector('.wally');

//CAPTURAR LA FUNCIÓN QUE VA A PASAR CUANDO HAGA CLICK

function mensajeError(){
    console.log('Ahí no está Wally');
}

function mensajeWally(e){

    e.stopPropagation(); //Si hay dos capas con event listeners van a saltar todos los eventos, por eso hay que ponerle la "e"

    //console.log('Me has encontrado :)');

    const coordenadas = [e.pageX, e.pageY];

    //Array position, empieza siempre en 0
    //console.log (coordenadas)

//ARRAY
//console.log('Has encontrado a Wally :)' + " " + "y las coordenadas son:" + "");

 const message = `Has encontrado a Wally :) y las coordenadas son: ${coordenadas}`;

 console.log(message);
}

//CREAR EL EVENTO

poster.addEventListener('click', mensajeError);
wally.addEventListener('click', mensajeWally);


//BUTTON

const amateurBtn = document.getElementById('level0');
const professionalBtn = document.getElementById('level1');

amateurBtn.addEventListener('click', amateur);
professionalBtn.addEventListener('click', professional);

//Funcion para el boton de Amateur -- foto a color

function amateur(){

    amateurBtn.classList.add('active');
    professionalBtn.classList.remove('active');
    poster.classList.remove('wally_blackwhite')
}

//Funcion para el boton de Profesional -- foto balnco y negro

function professional(){

    professionalBtn.classList.add('active');
    amateurBtn.classList.remove('active');
    poster.classList.add('wally_blackwhite')
}



