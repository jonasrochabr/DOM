const randomNumber = Math.round(Math.random() * 10); 

let xAttempts = 1

function handleClickTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = `acertas-te em ${xAttempts} tentativas`

        console.log(`acertas-te em ${xAttempts} tentativas`)
    }

    xAttempts++

    console.log(xAttempts)
}

const btnTry = document.querySelector("#btnTry")

const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleClickTryClick)