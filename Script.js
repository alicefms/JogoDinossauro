const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
function handlekeydown(event) {

    if (event.keyCode == 32)
        if (!isJumping)
            jump();

}
function jump() {

    isJumping = true;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCacto() {
    const cacto = document.createElement('div');
    let cactoposition = 1000;
    let randomTime = Math.random() * 6000;

    cacto.classList.add('cacto');
    cacto.style.left = 1000 + 'px';
    background.appendChild(cacto);

    let leftInterval = setInterval(() => {


        if (cactoposition <= -60) {
            clearInterval(leftInterval);
            background.removeChild(cacto);
        }
        else if (cactoposition > 0 && cactoposition < 60 && position < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo!! 🤪</h1>'
        } {
            cactoposition -= 10;
            cacto.style.left = cactoposition + 'px';

        }
    }, 20);
    setTimeout(createCacto, randomTime);
}

createCacto();
document.addEventListener("keydown", handlekeydown);