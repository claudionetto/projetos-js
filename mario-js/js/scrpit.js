const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = () => {

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(marioPosition == 0){
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500)
    }
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png'
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        document.addEventListener('keydown', reiniciar);

        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);