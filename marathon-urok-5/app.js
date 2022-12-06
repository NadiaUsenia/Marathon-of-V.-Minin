const startBtn = document.querySelector('#start')
const timeList = document.querySelector('#time-list')
const screens = document.querySelectorAll('.screen')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event =>{
    if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        creatRandomCircle()
    }

})

function startGame() {
    setInterval(decreaseTime, 1000)
    creatRandomCircle()
    setTimeout(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        
    let current = --time
    if(current < 10) {
     current = `0${current}`
    }
    setTime(current)
    }
    
}
function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.remove()
    board.innerHTML = `<h1>Ваш счет: <span> ${score}</span></h1>`
}

function creatRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(20, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    circle.classList.add('circle')
    circle.style.width =`${size}px`
    circle.style.height =`${size}px`
    circle.style.top =`${y}px`
    circle.style.left =`${x}px`
   

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}





