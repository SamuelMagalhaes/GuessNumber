const randomNumber = Math.round(Math.random() * 10)
const h2 = document.querySelector('h2')
let Attempts = 1

function handleClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber").value

    if(Number(inputNumber) == randomNumber){
        document.querySelector('.screen2').classList.remove('hide')
        document.querySelector('.screen1').classList.add('hide')

        h2.innerText = `Você acertou em ${Attempts} tentativas`
    }
    Attempts++
}

function windowReaload() { 
    location.reload
}