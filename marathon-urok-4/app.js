const board = document.querySelector('#board')
const colors = ['#FDFFFF', '#B10F2E', '#570000', '#280000', '#DE7C5A']
const SQUARES_NUMBER = 700

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
    
}
function setColor(element) {
    const color = getRandoColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10x ${color}`
    
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
    
}
function getRandoColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


