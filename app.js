document.addEventListener('DOMContentLoaded') , () => {
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

    const width= 20
    let currentIndex= 0 //first div in grid
    let appleIndex = 0 //first div in grid
    let currentSnake = [2,1,0] // div in our grid being 2 (head) and 0 being the end (tail, with all 1'st being the body of the snake)

    let direction = 1
    let score = 0
    let speed= 0.9 
    let intervalTime= 0
    let interval = 0



//start game
function startGame () {
    currentSnake.forEach(index => squares [index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    clearInterval(interval)
    score=0
    //apple
    direction=1
    scoreDisplay.innerText =score
    intervalTime = 1000
    currentSnake = [2,1,0]
    currentIndex= 0
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    interval= setInterval(moveOutcomes, intervalTime)
}

//function that deals with all the outcomes
function moveOutcomes() {

}
//snake hitting border and itsself
if (
(currentSnake[0] + width >= (width * width && direction === width) || ) //snake hits bottom
(currentSnake[0] % width === (width -1 && direction === 1) || )         // snake hits right wall
(currentSnake[0] % width === 0 && direction === -1 || )                    // snake hits left wall
(currentSnake[0] - width < 0 && direction === -width || )               // snake smacking top
squares[current snake[0] +direction].classList.contains('snake')        // if snake goes into itself
)  {
    return clearInterval(interval) // clear interval if naythinghappens
}
const tail = currentSnake.pop()
squares[tail].classList.remove('snake')

//snake hititng apple




    //assign functions to keycodes
    function control (e) { //e for event
        squares(currentIndex).classlist.remove('snake') //removing the class

        if (e.keyCode === 39) {
            direction = 1 //right arrow will make snakey go right one
        } else if (e.keyCode === 38) {
            direction = -width //up arrow makes snakey go up one (tech go back 10 divs)
        } else if (e.keyCode === 37) {
            direction = -1 //left arrow makes snakey go  left one 
        } else if (e.keyCode === 40) {
            direction = +width //down arrow makes snakey go  down one (forward 10 divs)
        }
    }
document.addEventListener('keyup', control)
