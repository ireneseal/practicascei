# PRÁCTICA 5 - Imágenes cambiantes

1. Los directivos de PESCANOVA han creado la nueva campaña 2023 para su afamado producto "Varitas de merluza".
2. El equipo de creativos después de un fin de semana de duro trabajo han creado la línea gráfica (carpeta img) y el slogan "EL PODER DE LA MAGIA ESTÁ EN LA VARITA"
3. Nos piden que creemos para ellos una pequeña web donde se muestren las alternativas para definir la campaña final. 
4. La web deberá mostrar las 3 alternativas (una por cada foto en la carpeta img). Cada alternativa constará de una foto con el slogan en el pié de foto.
5. Idea algún sistema para facilitar la experiencia de usuario de los directivos de PESCANOVA


### NOTAS

- Para modificar algún aspecto de un elemento de la web (DOM) mediante Javascript es necesario:
    1. Capturar el elemento HTML que recibirá la interacción del usuario (evento). Por ejemplo un 'click' de ratón.
    2. Capturar el elemento HTML a modificar. 
    3. Crear el evento de captura: click, hover, load... con un event listener.
    4. Modificar el elemento capturado en JS.

        ```
        //Capturamos una foto que lanzará el evento(1)
        const button = document.querySelector('.btn');

        //Capturamos el elemento a modificar (2)
        const photo = document.querySelector('.foto');

        // Le añadimos un evento tipo 'click' al botón (3)
        button.addEventListener('click', function(){
            
            //Modificamos el caption (4)
            photo.src = 'img/nuevafoto.jpg';
        });
        ```

### REFERENCIAS
- W3Schools HTML Image - https://www.w3schools.com/html/html_images.asp
- MDN HTML Figure - https://developer.mozilla.org/es/docs/Web/HTML/Element/figure
- MDN Responsive images - https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
- MDN JS Gramática y tipos - https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types
- MDN JS querySelector - https://developer.mozilla.org/es/docs/Web/API/Document/querySelector
- MDN JS addEventListener - https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener