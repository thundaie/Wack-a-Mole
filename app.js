const squares = document.querySelectorAll(".square")
const time = document.getElementById("time-left")
const score = document.getElementById("score")
const mole = document.querySelector(".mole")

let result = 0
let hitPosition
let currentTime = 60
let timeInterval = null


function randomSquare() {
    squares.forEach(squaure => {
        squaure.classList.remove("mole")
    })

    let randomPosition = squares[ Math.floor(Math.random() * squares.length)]
    randomPosition.classList.add("mole")

    hitPosition = randomPosition.id

    squares.forEach(hit => {
        hit.addEventListener("mousedown", () => {
            if(hit.id === hitPosition && currentTime !== 0){
                result ++;
                score.innerHTML = result
                hitPosition = null
            }
        }) 
    })
}




function moveMole() {
    timeInterval = setInterval(randomSquare, 600)
}



moveMole()


function countDown() {
    currentTime--
    time.innerHTML = currentTime

    if(currentTime === 0){
        clearInterval(countDownInterval)
        clearInterval(timeInterval)
        alert(`Game Over, your score is ${result}`)

    }
}

let countDownInterval = setInterval(countDown, 1000)




