const StartBtn = document.querySelector('.start-btn');

const circle = document.querySelector('.circle');

//add a class for the animation. then use the toggle function

StartBtn.addEventListener('click', startanimation);

function startanimation(){


circle.classList.add('circle_animation');
StartBtn.classList.add('hide');


circle.addEventListener('animationend', () => {
console.log('Animation ended');
StartBtn.classList.remove('hide');
circle.classList.remove('circle_animation');

}); }