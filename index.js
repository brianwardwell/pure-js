// let box1 = document.getElementsByClassName('box1')
let bOne = document.getElementById('upperLeft')
let bTwo = document.getElementById('upperMid')
let bThree = document.getElementById('upperRight')
let bFour = document.getElementById('middleLeft')
let bFive = document.getElementById('middleMid')
let bSix = document.getElementById('middleRight')
let bSeven = document.getElementById('lowerLeft')
let bEight = document.getElementById('lowerMid')
let bNine = document.getElementById('lowerRight')
let end = document.getElementById('endGame')
let btn = document.getElementById('res')

let counter = 0
function gameOver(){
    if (bOne.innerHTML == 'X' && bTwo.innerHTML == 'X' && bThree.innerHTML == 'X') {
        end.innerHTML = "Game Over"
    } else if (bOne.innerHTML == 'O' && bTwo.innerHTML == 'O' && bThree.innerHTML == 'O') {
        end.innerHTML = "Game Over"
    } else if (bOne.innerHTML == 'X' && bFive.innerHTML == 'X' && bNine.innerHTML == 'X') {
        end.innerHTML = "Game Over"
    } else if (bOne.innerHTML == 'O' && bFive.innerHTML == 'O' && bNine.innerHTML == 'O') {
        end.innerHTML = "Game Over"
    } else if (bFour.innerHTML == 'X' && bFive.innerHTML == 'X' && bSix.innerHTML == 'X') {
        end.innerHTML = 'Game Over'
    } else if (bFour.innerHTML == 'O' && bFive.innerHTML == 'O' && bSix.innerHTML == 'O') {
        end.innerHTML = 'Game Over'
    } else if (bSeven.innerHTML == 'X' && bEight.innerHTML == 'X' && bNine.innerHTML == 'X') {
        end.innerHTML = 'Game Over'
    } else if (bSeven.innerHTML == 'O' && bEight.innerHTML == 'O' && bNine.innerHTML == 'O') {
        end.innerHTML = 'Game Over'
    } else if (bOne.innerHTML == 'X' && bFour.innerHTML == 'X' && bSeven.innerHTML == 'X') {
        end.innerHTML = 'Game Over'
    } else if (bOne.innerHTML == 'O' && bFour.innerHTML == 'O' && bSeven.innerHTML == 'O') {
        end.innerHTML = 'Game Over'
    } else if (bTwo.innerHTML == 'X' && bFive.innerHTML == 'X' && bEight.innerHTML == 'X') {
        end.innerHTML = 'Game Over'
    } else if (bTwo.innerHTML == 'O' && bFive.innerHTML == 'O' && bEight.innerHTML == 'O') {
        end.innerHTML = 'Game Over'
    } else if (bThree.innerHTML == 'X' && bSix.innerHTML == 'X' && bNine.innerHTML == 'X') {
        end.innerHTML = 'Game Over'
    } else if (bThree.innerHTML == 'O' && bSix.innerHTML == 'O' && bNine.innerHTML == 'O') {
        end.innerHTML = 'Game Over'
    } else if (bThree.innerHTML == 'X' && bFive.innerHTML == 'X' && bSeven.innerHTML == 'X') {
        end.innerHTML = 'Game Over'
    } else if (bThree.innerHTML == 'O' && bFive.innerHTML == 'O' && bSeven.innerHTML == 'O') {
        end.innerHTML = 'Game Over'
    }
}



bOne.addEventListener('click', () => {
    if (counter % 2 == 0) {
        bOne.innerHTML = "X";
        } else {
            bOne.innerHTML = "O"
        }
        counter += 1   
        gameOver();
    }) 

bTwo.addEventListener('click', () => {
    if (counter % 2 == 0) {
        bTwo.innerHTML = "X";
    } else {
        bTwo.innerHTML = 'O'
    }
    counter += 1
    gameOver();
})
        
bThree.addEventListener('click', () => {
    if(counter % 2 == 0){
    bThree.innerHTML = "X";
    } else {
        bThree.innerHTML = 'O'
    }
    counter += 1
    gameOver();
})

bFour.addEventListener('click', () => {
    if(counter % 2 == 0){
    bFour.innerHTML = "X";
    } else {
        bFour.innerHTML = 'O'
    }
    counter += 1
    gameOver();
})

bFive.addEventListener('click', () => {
    if(counter % 2 == 0){
    bFive.innerHTML = "X";
    } else {
        bFive.innerHTML = 'O'
    }
    counter += 1
    gameOver();
})

bSix.addEventListener('click', () => {
    if (counter % 2 == 0){
    bSix.innerHTML = "X";
    } else {
        bSix.innerHTML = 'O'
    }
    counter += 1
    gameOver();
})

bSeven.addEventListener('click', () => {
    if (counter % 2 == 0){
    bSeven.innerHTML = "X";
    } else {
        bSeven.innerHTML = 'O'
    }
    counter += 1
    gameOver();
})

bEight.addEventListener('click', () => {
    if (counter % 2 == 0){
    bEight.innerHTML = "X";
    } else {
        bEight.innerHTML = 'O'
    }
    counter += 1
    gameOver();
})

bNine.addEventListener('click', () => {
    if (counter % 2 == 0){
    bNine.innerHTML = "X";
    } else {
        bNine.innerHTML = 'O'
    }
    counter += 1
    gameOver();
})

btn.addEventListener('click', () => {
    console.log('reset button')
    counter = 0
    bOne.innerHTML = ''
    bTwo.innerHTML = ''
    bThree.innerHTML = ''
    bFour.innerHTML = ''
    bFive.innerHTML = ''
    bSix.innerHTML = ''
    bSeven.innerHTML = ''
    bEight.innerHTML = ''
    bNine.innerHTML = ''
    console.log(counter)
    end.innerHTML = ''
})


        