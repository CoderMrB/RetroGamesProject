let paddleWidth
let ballRadius
let halfPaddleHeight
let rightPaddleSpeed
let rigtPaddlePosition

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

window.onload=startBall


function movePaddle(e){
    if (e.which === 38){
        leftPaddleSpeed = -10;
    }else if (e.which === 40){
        leftPaddleSpeed = 10;
    }
}

function stopPaddle(e){
 leftPaddleSpeed = 0;
    }

window.setInterval(show, 1000/60)

function show(){
    leftPaddlePosition += leftPaddleSpeed;

    ballPositionTop += topSpeedofBall;
    ballPositionLeft += leftSpeedofBall;

    if(leftPaddlePosition <= 1){
        leftPaddlePosition =1
    }
    
    if(leftPaddlePosition >= window.innerHeight - paddleHeight){
        leftPaddlePosition = window.innerHeight- paddleHeight
    }
    
    document.getElementById("leftPaddle").style.top = leftPaddlePosition + 'px'
    document.getElementById("ball").style.top = ballPositionTop + 'px';
    document.getElementById("ball").style.left = ballPositionLeft + 'px';
}


// window.setInterval(moveComputer, 1000/60)