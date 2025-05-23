const lampada = document.getElementById('lampada');
const botao = document.getElementById('botao');
const contador = document.getElementById('contador');
const body = document.body;
let ligada = false;
let vezesAcesa = 0;

botao.addEventListener('click', () => {
    ligada = !ligada;

    lampada.src = ligada ? 'ligada.png' : 'desligada.png';
    botao.textContent = ligada ? 'Desligar' : 'Ligar';

    if (ligada) {
        vezesAcesa++;
        contador.textContent = `A luz foi acesa ${vezesAcesa} vezes.`;
    }

    body.classList.toggle('luz-ligada', ligada);
});