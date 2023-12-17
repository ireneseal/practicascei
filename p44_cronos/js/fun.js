
// Constantes y Variables
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const cronoSeconds = document.querySelector('.crono__seconds');
const cronoMiliseconds = document.querySelector('.crono__miliseconds');
let counterSeconds = 0;
let counterMiliseconds = 0;
let cronoTimer = "";
let isRunning = false;

//FUNCIONES

//Function that writes in HTML the time

function showInHTML(seconds, miliseconds) {
    cronoSeconds.innerHTML = seconds;
    cronoMiliseconds.innerHTML = miliseconds;
    
};


//Function for Starting the crono
function cronoStart(){

   if(!isRunning){

    cronoTimer = setInterval(() => {
        counterMiliseconds++;

        if(counterMiliseconds === 60){
            counterSeconds += 1;
            counterMiliseconds = 0;
        }
        cronoSeconds.innerHTML = counterSeconds;
        cronoMiliseconds.innerHTML = counterMiliseconds;

    }, 10);

}
isRunning = true;

};

function cronoStop(){
        clearInterval(cronoTimer); 
        isRunning = false;

};


function cronoReset (){
    counterSeconds = 0;
    counterMiliseconds = 0;
    showInHTML(0,0);
    isRunning = false;
    cronoStop();

};

//Llamadas a funciones
startBtn.addEventListener('click', cronoStart);
pauseBtn.addEventListener('click', cronoStop);
resetBtn.addEventListener('click', cronoReset);
