const navbar_template = /*html*/`
<template id="TEMPLATE_PONG">
    <nav>
        <div>
            <ul>
                <li class="active">Home</li>
                <li>Archiv</li>
                <li>Teste dein können</li>
            </ul>
            <div class="line"></div>
        </div>

        <button id="darkmode">DARK</button>
    </nav>

    <link rel="stylesheet" href="styles/index.css"/>
    <style>
    nav {
        position: relative;
        padding: 12px;
        display: flex;
        align-items: center;
    }

    nav > div {
        flex: 1;
        display: grid;
        justify-content: center;
    }

    nav .line {
        height: 2px;
        position: relative;
        bottom: 0;
        margin: 10px 0 0 0;
        background: #FF1847; 
    }

    nav ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        position: relative;
    }

    nav ul li {
        margin: 0 40px 0 0;
        opacity: .4;
        transition: all 0.4s ease;
        cursor: pointer;
        text-transform: uppercase;
        display: block;
        font-weight: 600;
        letter-spacing: .2em;
        font-size: 14px;
    }

    nav ul li:hover {
        opacity: .7; 
    }
    nav ul li.active {
        opacity: 1; 
    }
    nav ul li:last-child {
        margin-right: 0; 
    }
    </style>
</template>
`

customElements.define('custome-navbar', class extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = navbar_template
        const template = shadow.getElementById("TEMPLATE_PONG").content;
        this.shadowRoot.append(template.cloneNode(true))

        this.shadowRoot.querySelector("#darkmode").addEventListener("click", this.toggleDarkmode)
    }

    toggleDarkmode() {
        if(document.body.classList.contains("dark"))
            document.body.classList.replace("dark", "light");
        else
            document.body.classList.replace("light", "dark");
        
        this.textContent = document.body.classList[0].toUpperCase()
    }

    connectedCallback() {
        const nav = this.shadowRoot.querySelector("nav")
        const line = nav.querySelector('.line')

        let active = nav.querySelector('.active');
        let pos = 0;
        let wid = 0;

        if(active) {
            pos = active.offsetLeft
            wid = active.offsetWidth

            line.style.left = `${pos}px`
            line.style.width = `${wid}px`;
        }

        nav.querySelectorAll('ul li').forEach(element => {
            element.addEventListener("click", function(e) {
                e.preventDefault();
                if(!e.target.parentElement.classList.contains('active') && !nav.classList.contains('animate')) {
                    nav.classList.add('animate');

                    nav.querySelector('ul li.active').classList.remove('active');
                    
                    const target = e.target
                    let position = target.offsetLeft
                    let width = target.offsetWidth

                    if(position >= pos) {
                        line.animate({
                            width: `${((position - pos) + width)}px`
                        }, 300).finished
                        .then(() => {
                            line.style.left = `${position}px`
                            line.style.width = `${width}px`;

                            target.classList.add('active');
                            nav.classList.remove('animate');
                        })
                    } else {
                        line.animate({
                            left: `${position}px`,
                            width: `${((pos - position) + wid)}px`,
                        }, 300).finished
                        .then(() => {
                            line.style.left = `${position}px`
                            line.style.width = `${width}px`;

                            target.classList.add('active');
                            nav.classList.remove('animate');
                        });
                    }
    
                    pos = position;
                    wid = width;
                }
            });
        });
	}
})