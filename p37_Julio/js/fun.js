const buttons = document.querySelector('.container__reproductor__buttons');



buttons.addEventListener('click', function(e){

    const song = document.querySelector('.song');

    //Con el e.target estamos targeteando a cada uno de los elementos a los que va dirigida esa funcion

    console.log(e.target);
    //Cuando llamamos a la funcion es cuando le ponemos los valores concretos

    clickOnElements(song, e.target.value);
    //De esta forma si tuviesemos más elementos (domItem2, e.target.value)

});