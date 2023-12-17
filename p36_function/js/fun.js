/* 1. Crea una función que pinte una circunferencia en el centro de la pantalla del diámetro especificado por parámetro de la misma (en px).

//Dibuja un círculo de forma dinámica

     function drawCircle(diameter){

         return document.body.innerHTML += `<div style= "height: ${diameter}px; width: ${diameter}px; background: red; border-radius: 50%"></div>`
     };

 for( let index = 0; index < 50; index ++){

     drawCircle(3*index);
 }   */


////////////////////////////////////////////////////////

 // 2. Crea una función que cuando el usuario haga click en un botón simule el lanzamiento de una moneda al aire y devuelva cara o cruz en un div al lado del botón. Cuando el usuario haya hecho 3 lanzamientos, que la función se inactive y en el div se muetre " No tientes a tu suerte, amigo".

 const button = document.querySelector('.moneda');
 const result = document.querySelector('.result');


 button.addEventListener('click', lanzarMoneda)

 var contador = 0;
 function lanzarMoneda(){

     contador = contador +1;

     if(contador > 3){return result.innerHTML = "No tientes a tu suerte"};

    return result.innerHTML = (Math.floor(Math.random()*2)%2) == "0" ? "cara" : "cruz";

 };

////////////////////////////////////////////////////////

 //3. Botones DOM OBJ

 /* Crea una función que dado un elemento dom permita: 
 - borrarlo
 - copiarlo debajo
 - insertar un texto dentro del elemento

 - dependiendo de los parámetros que se le pasen función. 
     - Ejemplo: domManipulator(obj, borrar) -> borra
     - Ejemplo: domManipulator(obj, copiar) -> copia

 - Crea botones HTML que lancen la función */

 

 //Capturamos el contenedor de los botones

 const buttons = document.querySelector('.buttons');

 buttons.addEventListener('click', function(e){

     const domItem = document.querySelector('.dom-item');

     clickOnElements(domItem, e.target.value)
 });

 function clickOnElements(domElement, action){

     if(action == "copiar"){
         //Duplicar objecto
         document.body.appendChild(domElement.cloneNode(true));
     }
     else if(action == "borrar"){
         //Borrar objeto
         domElement.remove();


     }else if(action == "insertar"){
         //Insertar texto
         domElement.innerHTML = "Testo generado por JS"
     }

     else{
         console.log("Esta acción no está definida")
     }

 };

////////////////////////////////////////////////////////

 //4. Crea un objeto que tenga un método que permita concatenar los valores de todas sus propiedades (sin harcodear)

 const myObject = {
     prop1: "super",
     prop2: "cali",
     prop3: "fragi",
     prop4: "listicoespialidoso",
     concatenar: function(){
         let all = "";
         Object.values(this).forEach((item)=>{

             if(typeof item == "string") all += item;
         });

         return all;
     }
 }

 console.log(myObject.concatenar());