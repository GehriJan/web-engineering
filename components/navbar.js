const navbar_template = /*html*/`
<template id="TEMPLATE_NAVBAR">
    <svg id="navbarBtn" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
    <nav>
        <div>
            <ul>
                <li class="active" title="Gehe zu Startseite" :view="#spielpläne">Home</li>
                <li :view="custome-archiv" title="Zeige Übersicht von vergangenen Turnieren">Archiv</li>
                <li :view="custome-pong" title="Spiele ein tolles Spiel">Teste dein können</li>
            </ul>
            <div class="line"></div>
            <button id="darkmode1">Darkmode</button>
        </div>

        <button id="darkmode">Darkmode</button>
    </nav>

    <link rel="stylesheet" href="assets/styles/index.css"/>
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

        #darkmode1 {
            display: none;
        }

        #navbarBtn {
            display: none;
            fill: var(--text);
            font-size: 3rem;
            padding: 0.5rem;
            cursor: pointer;
        }

        @media only screen and (max-width: 500px) {
            nav {
                display: none;
            }

            nav ul {
                flex-direction: column;
            }

            nav ul li,#darkmode1 {
                margin: 2px 0;
                text-align: center;
            }

            .line {
                display: none;
            }

            #darkmode1 {
                display: block;
            }

            #darkmode {
                display: none;
            }

            #navbarBtn {
                display: block;
            }
        }

        @media only screen and (min-width: 500px) {
            nav {
                display: flex !important;
            }
        }
    </style>
</template>
`

customElements.define('custome-navbar', class extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = navbar_template
        const template = shadow.getElementById("TEMPLATE_NAVBAR").content;
        this.shadowRoot.append(template.cloneNode(true))

        this.shadowRoot.querySelector("#darkmode").addEventListener("click", this.toggleDarkmode)
        this.shadowRoot.querySelector("#darkmode1").addEventListener("click", this.toggleDarkmode)
        this.shadowRoot.querySelector("#navbarBtn").addEventListener("click", () => {
            this.shadowRoot.querySelector("nav").style.display = 
                this.shadowRoot.querySelector("nav").style.display === "none" || this.shadowRoot.querySelector("nav").style.display === "" 
                    ? "flex" 
                    : "none"
        })
    }

    toggleDarkmode() {
        if(document.body.classList.contains("dark"))
            document.body.classList.replace("dark", "light");
        else
            document.body.classList.replace("light", "dark");
        
        this.textContent = document.body.classList[0].charAt(0).toUpperCase() + document.body.classList[0].slice(1) + "mode"
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
                    nav.style.display = "none"

                    nav.querySelector('ul li.active').classList.remove('active');
                    
                    const target = e.target
                    let position = target.offsetLeft
                    let width = target.offsetWidth

                    let siblings = []; 
                    if(target.parentNode) {
                        let sibling  = target.parentNode.firstChild;
                    
                        // collecting siblings
                        while (sibling) {
                            if (sibling.nodeType === 1 && sibling !== e) {
                                siblings.push(sibling);
                            }
                            sibling = sibling.nextSibling;
                        }
                    }

                    siblings.forEach((el) => {
                        document.querySelector(el.getAttribute(":view")).style.display = "none"
                    })
                    document.querySelector(target.getAttribute(":view")).style.display = ""

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