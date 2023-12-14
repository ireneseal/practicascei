const personajes = {
    p0: {
        name: 'goku',
        force: '1'
    },
    p1: {
        name: 'vejeta',
        force: '2'
    }, 
    p2: {
        name: 'picollo',
        force: '3'
    } ,
};

const btnFight = document.querySelector('.btn-fight');

const photoContainerLeft = document.querySelector('.game__fighter-left-in');
const photoContainerRight = document.querySelector('.game__fighter-right-in');

btnFight.addEventListener('click', fight);

function fight(){

    //PHOTO LEFT

    const keyLeft = Math.floor(Math.random()*3);
    const forceLeft = personajes['p' + keyLeft].force;
   

    const urlPhotoLeft = 'img/' + personajes['p'+keyLeft].name + '.webp';
    

    console.log(urlPhotoLeft) //Esto me loggea directamente la url de una de las 3 imágenes de forma random

    const photoLeft = document.createElement('img'); //Con esto creo la imagen, porque no se ha creado desde html, para evitar que al iniciar la página aparezca una imagen directamente o un error de imagen
    

    photoLeft.src = urlPhotoLeft; //Asigno una url a la imagen
    photoContainerLeft.innerHTML = ""; //Vaciado de div para que no se acumulen las imágenes en el div
    photoContainerLeft.appendChild(photoLeft); //Añado imagen al dom, para que se pinte

    //console.log(personajes['p'+keyLeft]) //aqui le estamos diciendo que concatene la 'p' con un numero random de 0 a 3 (2,99999999999), que por el math random lo redondea a 0 - 1 - 2

    //PHOTO RIGHT

    const keyRight = Math.floor(Math.random()*3);
    const forceRight = personajes['p' + keyRight].force;

    const urlPhotoRight = 'img/' + personajes['p'+keyRight].name + '.webp';

    const photoRight = document.createElement('img');

    photoRight.src = urlPhotoRight;
    photoContainerRight.innerHTML = "";
    photoContainerRight.appendChild(photoRight);

    showWinner(forceLeft, forceRight, photoRight, photoLeft);    

}

function showWinner (forceLeft, forceRight, photoRight, photoLeft){
    photoContainerLeft.parentNode.classList.remove('winner', 'draw');
    photoContainerRight.parentNode.classList.remove('winner', 'draw');

    //Tengo que quitar las clases porque sino se acumulan
    

    if(forceLeft > forceRight){
        //gana LEFT
        setTimeout(() => {
            photoContainerLeft.parentNode.classList.add('winner');
        }, 0); //Esto Sería para que la animación se resetee, porque desde css no entiende que la animación se ha de repetir aunque esté actuando en el mismo elemento

        photoRight.classList.add('blackandwhite');

    }
    else if(forceLeft < forceRight){
        //gana RIGHT
        setTimeout(() => {
            photoContainerRight.parentNode.classList.add('winner');
        }, 0);//Delay - Lo de dentro va a suceder con un delay(en este caso 0)
        
        photoLeft.classList.add('blackandwhite');
        
        
    }else {
        //EMPATE

        setTimeout(() => {
            photoContainerLeft.parentNode.classList.add('draw');
        photoContainerRight.parentNode.classList.add('draw');
        }, 0);
        
    } 

}