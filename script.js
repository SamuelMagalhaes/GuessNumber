const randomNumber = Math.round(Math.random() * 10)
const h2 = document.querySelector('h2')

const verify = document.querySelector('.verify')
const reload = document.querySelector('.reload')

const warning = document.querySelector('.warning')
const warningText = document.querySelector('.warning-text')
const warningTries = document.querySelector('.tries')

let Attempts = 1

verify.addEventListener('click', (event) => {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber").value

    if(Number(inputNumber) == randomNumber){
        document.querySelector('.screen2').classList.remove('hide')
        document.querySelector('.screen1').classList.add('hide')

        h2.innerText = `Você acertou em ${Attempts} tentativas`
    } else {
        warning.classList.remove('hide')
        warningText.innerText = "Número errado, tente novamente"
        warningTries.innerText = `Tentativas: ${Attempts}`

        setTimeout(() => {
            warning.classList.add('hide')
        }, 1500 )
    }
    Attempts++
}) 

reload.addEventListener('click', () => {
    location.reload()
})