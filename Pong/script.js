let paddleWidth = 80 // paddleWidth is used in determining if the ball has made contact with the paddle
let paddleHeight = 180 // affects how far down the screen the paddle can travel. Bigger number = less available space at bottom of screen. Not sure why?

let rightPaddleSpeed = 500;
let rightPaddlePosition = 220;

let leftPaddleSpeed = 0;
let leftPaddlePosition = 100;

let halfPaddleHeight


let ballRadius = 25
let ballPositionTop = 510;
let ballPositionLeft = 820;
let leftSpeedofBall= 0;
let topSpeedofBall = 10;

let side = 0; // Used in determining direction of travel of ball at start of play. It is randomly calculated to be equal to 1 or -1. This value is then used in a further calcuation to determine the direction and speed of the ball.

let playerScore = 0; // Variables holding scores
let compScore = 0;   //
let playerScoreDisplay= document.getElementById("playerScore"); // Variables holding the <p> element in the HTML to display scores.
let compScoreDisplay= document.getElementById("compScore"); //

let resetButton = document.getElementById("reset"); // Variables holding the <button> element in the HTML to reset the game.
resetButton.addEventListener("click", resetGame) // Event listener added to reset button so that when clicked the resetGame function is called.


// The reset game function is called when the reset button is clicked. If sets both scores to 0, and calls the startBall function. As part of this function the text content of the <P> elements displaying the scores is updated to reflect the new zero values.
function resetGame(){
    playerScore=0
    compScore=0
    startBall()
}

document.addEventListener('keydown', movePaddle)
document.addEventListener('keyup', stopPaddle)

function stopPaddle(e){
 leftPaddleSpeed = 0;
    }

function startBall(){

    playerScoreDisplay.textContent= playerScore
    compScoreDisplay.textContent= compScore
    ballPositionTop = 510;
    ballPositionLeft = 820;

    if(Math.random()<0.5){
        side = 1;
    }else{
        side = -1;
    }

    leftSpeedofBall = side * (Math.random() *6 + 5)
    topSpeedofBall = (Math.random() * 12 - 6);
}

window.onload = startBall


function movePaddle(e){
    if (e.which === 38){
        leftPaddleSpeed = -10;
    }else if (e.which === 40){
        leftPaddleSpeed = 10;
    }

    let choice = Math.random()
    if(choice <= 0.5){
        rightPaddleSpeed = -10
    }else{
        rightPaddleSpeed = 10
    }
}

window.setInterval(show, 1000/60)

function show(){
    leftPaddlePosition += leftPaddleSpeed;

    rightPaddlePosition = ballPositionTop + Math.random()*rightPaddleSpeed;

    ballPositionTop += topSpeedofBall;
    ballPositionLeft += leftSpeedofBall;

    if(leftPaddlePosition <= 1){
        leftPaddlePosition =1
    }

    if(rightPaddlePosition <= 1){
        rightPaddlePosition = 1
    }

    if(leftPaddlePosition >= window.innerHeight - paddleHeight){
        leftPaddlePosition = window.innerHeight- paddleHeight
    }

    if(rightPaddlePosition >= window.innerHeight - paddleHeight){
        rightPaddlePosition = window.innerHeight- paddleHeight
    }

    if (ballPositionTop <=10 || ballPositionTop >= window.innerHeight - ballRadius){topSpeedofBall = -topSpeedofBall}

    if (ballPositionLeft <= paddleWidth){
        if (ballPositionTop > leftPaddlePosition && ballPositionTop < leftPaddlePosition + paddleHeight){
            leftSpeedofBall = -leftSpeedofBall
        } else{
            compScore += 1
            startBall()
        } 
    }

    if (ballPositionLeft >= window.innerWidth - ballRadius- paddleWidth){
        if (ballPositionTop > rightPaddlePosition && ballPositionTop < rightPaddlePosition + paddleHeight){
            leftSpeedofBall = -leftSpeedofBall
        }else{
            playerScore += 1
            startBall()
        }
    }


    document.getElementById("leftPaddle").style.top = leftPaddlePosition + 'px'
    document.getElementById("rightPaddle").style.top = rightPaddlePosition + 'px'
    document.getElementById("ball").style.top = ballPositionTop + 'px';
    document.getElementById("ball").style.left = ballPositionLeft + 'px';
}


// window.setInterval(moveComputer, 1000/60)