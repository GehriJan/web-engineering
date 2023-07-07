const pong_template = /*html*/`
<template id="TEMPLATE_PONG">
    <div id="pong">
        <link rel="stylesheet" href="assets/styles/index.css"/>
        
        <div>
            <canvas width="750" height="585" id="game"></canvas>
            <div id="pong-overlay">
                <button>Start Game</button>
            </div>
        </div>
        <div style="display: none;">
            <img id="source" src="./views/pong/assets/booooooooooom.png" width="300" height="227" />
            <img id="meme" src="./views/pong/assets/meme.png" />
        </div>
    </div>
    <style>
    #pong {
        background: black;
        border-radius: 1rem;
    }

    #pong > div{
        position: relative;
    }

    #pong-overlay {
        width: 750px;
        height: 585px;
        background-color: rgba(0, 0, 0, 0.7);
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 1rem;
        display: grid;
        place-items: center;
    }

    #game {
        border-radius: 1rem;
    }
    </style>
</template>
`

customElements.define('custome-pong', class Pong extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = pong_template
        const template = shadow.getElementById("TEMPLATE_PONG").content;
        this.shadowRoot.append(template.cloneNode(true))
    }

    startGame() {
        game()
        this.parentElement.style.display = "none"
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#pong-overlay button').addEventListener('click', this.startGame);
    }
})

function game() {
    const canvas = document.querySelector("custome-pong").shadowRoot.getElementById('game');
    const context = canvas.getContext('2d');
    const grid = 15;
    const paddleHeight = grid * 5;
    const maxPaddleY = canvas.height - grid - paddleHeight;
    const TO_RADIANS = Math.PI/180; 

    const config = {
        paddle: {
            speed: 6
        },
        ball: {
            speed: 3.5
        }
    }

    let data = {
        points: {
            left: 0,
            right: 0
        }
    }


    let contactLeft = 0;
    let contactRight = 0;

    const leftPaddle = {
        x: grid * 2,
        y: canvas.height / 2 - paddleHeight / 2,
        width: grid,
        height: paddleHeight,

        // velocity
        dy: 0
    };

    const rightPaddle = {
        x: canvas.width - grid * 3,
        y: canvas.height / 2 - paddleHeight / 2,
        width: grid,
        height: paddleHeight,

        // velocity
        dy: 0
    };

    const ball = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        width: grid,
        height: grid,

        // keep track of when need to reset the ball position
        resetting: false,

        dx: config.ball.speed,
        dy: -config.ball.speed
    };

    function collides(obj1, obj2) {
        return obj1.x < obj2.x + obj2.width &&
            obj1.x + obj1.width > obj2.x &&
            obj1.y < obj2.y + obj2.height &&
            obj1.y + obj1.height > obj2.y;
    }

    // game loop
    function loop() {
        requestAnimationFrame(loop);
        context.clearRect(0,0,canvas.width,canvas.height);
        const meme = document.querySelector("custome-pong").shadowRoot.getElementById("meme");
        const explosion = document.querySelector("custome-pong").shadowRoot.getElementById("source");

        // move paddles by their velocity
        leftPaddle.y += leftPaddle.dy;
        rightPaddle.y += rightPaddle.dy;

        // prevent paddles from going through walls
        if (leftPaddle.y < grid) {
            leftPaddle.y = grid;
        } else if (leftPaddle.y > maxPaddleY) {
            leftPaddle.y = maxPaddleY;
        }

        if (rightPaddle.y < grid) {
            rightPaddle.y = grid;
        } else if (rightPaddle.y > maxPaddleY) {
            rightPaddle.y = maxPaddleY;
        }

        // draw paddles
        context.fillStyle = 'white';
        context.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
        context.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);

        // move ball by its velocity
        ball.x += ball.dx;
        ball.y += ball.dy;

        // prevent ball from going through walls by changing its velocity
        if (ball.y < grid) {
            ball.y = grid;
            ball.dy *= -1;
        } else if (ball.y + grid > canvas.height - grid) {
            ball.y = canvas.height - grid * 2;
            ball.dy *= -1;
        }

        // reset ball if it goes past paddle (but only if we haven't already done so)
        if ( (ball.x < 0 || ball.x > canvas.width) && !ball.resetting) {
            ball.resetting = true;

            if(ball.x < 0)
                data.points.right++
            else
                data.points.left++

            // give some time for the player to recover before launching the ball again
            setTimeout(() => {
                ball.resetting = false;
                ball.x = canvas.width / 2;
                ball.y = canvas.height / 2;
            }, 500);
        }

        // check to see if ball collides with paddle. if they do reverse velocity
        if (collides(ball, leftPaddle)) {
            ball.dx *= -1;
            ball.x = leftPaddle.x + leftPaddle.width;
            contactLeft = 40;     
        } else if (collides(ball, rightPaddle)) {
            ball.dx *= -1;
            ball.x = rightPaddle.x - ball.width;
            contactRight = 40;
        }

        if(contactLeft) {
            paintImage(context, explosion, 90 * TO_RADIANS, leftPaddle.x + 150, leftPaddle.y - 75, 640 * 0.5, 426 * 0.5)
            contactLeft--;
        }

        if(contactRight) {
            paintImage(context, explosion, 270 * TO_RADIANS, leftPaddle.x - 200, leftPaddle.y - 75, 640 * 0.5, 426 * 0.5)
            contactRight--;
        }

        // draw ball
        context.fillRect(ball.x, ball.y, ball.width, ball.height);

        // draw walls
        context.fillStyle = 'lightgrey';
        context.fillRect(0, 0, canvas.width, grid);
        context.fillRect(0, canvas.height - grid, canvas.width, canvas.height);

        context.font = "30px Arial";
        context.fillText(data.points.left, canvas.width / 2 - 50, 50)
        context.fillText(data.points.right, canvas.width / 2 + 30, 50)

        // draw dotted line down the middle
        for (let i = grid; i < canvas.height - grid; i += grid * 2) {
            context.fillRect(canvas.width / 2 - grid / 2, i, grid, grid);
        }

        if(ball.resetting)
            context.drawImage(meme, 0, 0, 299 * 3.2, 168 * 3.2)
    }

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
        currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    function paintImage(context, image, angleInRad, positionX, positionY, axisX, axisY ) {
        context.translate(positionX, positionY);
        context.rotate(angleInRad);
        context.drawImage(image, -axisX, -axisY);
        context.rotate(-angleInRad );
        context.translate(-positionX, -positionY);
    }

    document.addEventListener('keydown', function(e) {
        if (e.code === "ArrowUp") {
            rightPaddle.dy = -config.paddle.speed;
        } else if (e.code === "ArrowDown") {
            rightPaddle.dy = config.paddle.speed;
        }

        if (e.code === "KeyW") {
            leftPaddle.dy = -config.paddle.speed;
        } else if (e.code === "KeyS") {
            leftPaddle.dy = config.paddle.speed;
        }
    });

    // listen to keyboard events to stop the paddle if key is released
    document.addEventListener('keyup', function(e) {
        if (e.code === "ArrowUp" || e.code === "ArrowDown") {
            rightPaddle.dy = 0;
        }

        if (e.code === "KeyW" || e.code === "KeyS") {
            leftPaddle.dy = 0;
        }
    });

    // start game
    requestAnimationFrame(loop);
}