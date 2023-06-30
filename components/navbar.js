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
        
        document.querySelector('#darkmode').textContent = document.body.classList[0].toUpperCase()
    }

    connectedCallback() {
		let nav = $('nav');
        let line = nav.find('.line')

        let active = nav.find('.active');
        let pos = 0;
        let wid = 0;

        if(active.length) {
            pos = active.position().left;
            wid = active.width();
            line.css({
                left: pos,
                width: wid
            });
        }

        nav.find('ul li a').click(function(e) {
        e.preventDefault();
        if(!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {
            
            nav.addClass('animate');

            let _this = $(this);

            nav.find('ul li').removeClass('active');

            let position = _this.parent().position();
            let width = _this.parent().width();

            if(position.left >= pos) {
            line.animate({
                width: ((position.left - pos) + width)
            }, 300, function() {
                line.animate({
                width: width,
                left: position.left
                }, 150, function() {
                nav.removeClass('animate');
                });
                _this.parent().addClass('active');
            });
            } else {
            line.animate({
                left: position.left,
                width: ((pos - position.left) + wid)
            }, 300, function() {
                line.animate({
                width: width
                }, 150, function() {
                nav.removeClass('animate');
                });
                _this.parent().addClass('active');
            });
            }

            pos = position.left;
            wid = width;
        }
        });
	}
})