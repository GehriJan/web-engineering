const pong_template = /*html*/`
<template id="TEMPLATE_PONG">
    <div id="pong">
        <link rel="stylesheet" href="styles/index.css"/>
        
        <div>
            <canvas width="750" height="585" id="game"></canvas>
            <div id="pong-overlay">
                <button>Start Game</button>
            </div>
        </div>
        <script type="module">
            import loop from './views/pong/game.js'
            
            startGame() {
                requestAnimationFrame(loop)
                document.querySelector('#pong-overlay').style.display = "none"
            }

            document.querySelector('#pong-overlay button').addEventListener('click', this.startGame());
        </script>
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
    }

    connectedCallback() {
        const t = document.querySelector("custome-pong").shadowRoot.getElementById("TEMPLATE_PONG")
        this.append(t.cloneNode(true))
    }
})