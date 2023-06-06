// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

let randomNumber = Math.floor(Math.random() * 11); // Gera um número aleatório entre 0 e 10
let xAttempts = 1; // Contador de tentativas



// Eventos
btnTry.addEventListener('click', handleClickTryClick); // Evento de clique no botão "Tentar"
btnReset.addEventListener('click', handleResetClick); // Evento de clique no botão "Reiniciar"
document.addEventListener('keydown', enterResetClick); // Evento de pressionar a tecla "Enter"

// Funções callback

// Função executada quando o botão "Tentar" é clicado
function handleClickTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");
    const enteredNumber = Number(inputNumber.value);

    // Verifica se o campo de entrada não está vazio e se o número digitado está entre 0 e 10
    if (inputNumber.value !== "" && enteredNumber >= 0 && enteredNumber <= 10) {
        // Verifica se o número digitado é igual ao número aleatório gerado
        if (enteredNumber === randomNumber) {
            toggleScreen();
            if (xAttempts === 1) {
                screen2.querySelector("h2").innerText = "Acertou na primeira tentativa!";
            } else {
                screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`;
            }

            console.log(`Acertaste em ${xAttempts} tentativas.`);
        }

        inputNumber.value = ""; // Limpa o campo de entrada
        xAttempts++; // Incrementa o contador de tentativas

        console.log(xAttempts);
    } else {
        alert("Digite um número entre 0 e 10!");
    }
}

// Função executada quando o botão "Reiniciar" é clicado
function handleResetClick() {
    toggleScreen();
    xAttempts = 1; // Reinicia o contador de tentativas
    randomNumber = Math.floor(Math.random() * 11); // Gera um novo número aleatório entre 0 e 10
}

// Função para alternar entre as telas visíveis e ocultas
function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

// Função executada quando a tecla "Enter" é pressionada
function enterResetClick(e) {
    if (e.key === 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick();
    }
}
