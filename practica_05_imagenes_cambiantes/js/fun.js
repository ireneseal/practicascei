
//1 Capturar elementos (todo lo que vaya a participar en el jss)

const btn_flechas = document.querySelector('.btn_flechas');
const fotoVoldemort = document.querySelector('#voldemort')

//2 Crear eventos de usuario, ¿cual va a ser el evento? que va a pasar?

btn_flechas.addEventListener('click', change_image) 

//3 Definir la funcion que sucederá al ejecutar el evento

let imageCounter = 1;

function change_image(){

  imageCounter = imageCounter+1;

  if (imageCounter==4){imageCounter=1}

  //Los 2 iguales están haciendo una pregunta: ¿Es image counter 4?, siempre entre parénteris y la respuesta entre corchetes y con un solo =

  fotoVoldemort.src="img_voldemort/" + imageCounter + ".webp";

  
}

    
