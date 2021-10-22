document.addEventListener('DOMContentLoaded', () => {

    const squares = document.querySelectorAll('.grid div')
    const timeLeft = document.querySelector('#time-left')
    const result = document.querySelector('#result')
    const startBtn = document.querySelector('#button')
    const width = 9
    let currentIndex = 76
    let timerId

    // render frog on starting block

    squares[currentIndex].classList.add('frog')

    // write a function that will move the Frog
    function movceFrog(e){
        squares[currentIndex].classList.remove('frog')
        switch(e.keyCode){
            case 37:
                if(currentIndex % width !==0) currentIndex -=1
                break
            case 38:
                if(currentIndex - width >=0) currentIndex -= width
                break
            case 39:
                if(currentIndex % width < width -1) currentIndex +=1
                break
        }
    }


})