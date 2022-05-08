let puntuacionUser = 0
let puntuacionPC = 0

const userSpan = document.getElementById("user-score")
const pcSpan = document.getElementById("pc-score")
const scoreboardDiv = document.querySelector('.scoreboard')
const resultP = document.querySelector(".result > p")
const rockDiv = document.getElementById("Piedra")
const papelDiv = document.getElementById("Papel")
const tijerasDiv = document.getElementById("Tijera")
const elemClick = document.querySelectorAll(".choice")
const elementos = Array.from(elemClick)

function pcPlay(){
    const choices = ["Piedra", "Papel", "Tijera"]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function convertiraSelector(palabra){
    if(palabra == "Piedra") return "Piedra"
    if(palabra == "Papel") return "Papel"
    return "Tijera"
}

function ganar(user, pc){
    puntuacionUser++
    userSpan.innerHTML = puntuacionUser
    pcSpan.innerHTML = puntuacionPC
    const userChico = "vos".fontsize(3).sup()
    const pcChico = "pc".fontsize(3).sup()
    resultP.innerHTML = `${user}${userChico} le gana a ${pc}${pcChico}, vos ganas!`
    document.getElementById(convertiraSelector(user)).classList.add("green-glow")
    setTimeout(function(){document.getElementById(convertiraSelector(user)).classList.remove("green-glow")}, 300)
}

function perder(user, pc){
    puntuacionPC++
    userSpan.innerHTML = puntuacionUser
    pcSpan.innerHTML = puntuacionPC
    const userChico = "vos".fontsize(3).sup()
    const pcChico = "pc".fontsize(3).sup()
    resultP.innerHTML = `${pc}${pcChico} le gana a ${user}${userChico}, perdiste!`
    document.getElementById(convertiraSelector(user)).classList.add("red-glow")
    setTimeout(function(){document.getElementById(convertiraSelector(user)).classList.remove("red-glow")}, 300)
}

function empatar(user, pc){
    const userChico = "vos".fontsize(3).sup()
    const pcChico = "pc".fontsize(3).sup()
    resultP.innerHTML = `${user}${userChico} es igual a ${pc}${pcChico}, es un empate!`
    document.getElementById(convertiraSelector(user)).classList.add("gray-glow")
    setTimeout(function(){document.getElementById(convertiraSelector(user)).classList.remove("gray-glow")}, 300)
}

function game(userChoice){
    const pcChoice = pcPlay()
    if (
        (userChoice == "Piedra" && pcChoice == "Tijera") ||
        (userChoice == "Papel" && pcChoice == "Piedra") ||
        (userChoice == "Tijera" && pcChoice == "Papel")
    ) {
        ganar(userChoice, pcChoice)
    } else if (pcChoice == userChoice){
        empatar(userChoice, pcChoice)
    } else{
        perder(userChoice, pcChoice)
    }
}

elementos.forEach(item => {
    item.addEventListener("click", validarClick)
})

function validarClick(){
    game(this.id)
}