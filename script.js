let paddleWidth = 30
let ballRadius = 25
let halfPaddleHeight
let rightPaddleSpeed = 0
let rightPaddlePosition = 220;

let paddleHeight = 175

let leftPaddleSpeed = 0;
let leftPaddlePosition = 220;

let ballPositionTop = 510;
let ballPositionLeft = 820;
let leftSpeedofBall= 0;
let topSpeedofBall = 10;

let leftScore
let rightScore

let side = 0;

document.addEventListener('keydown', movePaddle)
document.addEventListener('keyup', stopPaddle)

function stopPaddle(e){
 leftPaddleSpeed = 0;
    }

function startBall(){
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
            startBall()
        } 
    }

    if (ballPositionLeft >= window.innerWidth - ballRadius- paddleWidth){
        if (ballPositionTop > rightPaddlePosition && ballPositionTop < rightPaddlePosition + paddleHeight){
            leftSpeedofBall = -leftSpeedofBall
        }else{
            startBall()
        }
    }

    
    document.getElementById("leftPaddle").style.top = leftPaddlePosition + 'px'
    document.getElementById("rightPaddle").style.top = rightPaddlePosition + 'px'
    document.getElementById("ball").style.top = ballPositionTop + 'px';
    document.getElementById("ball").style.left = ballPositionLeft + 'px';
}


// window.setInterval(moveComputer, 1000/60)