const archiv_template = /*html*/`
<template id="TEMPLATE_ARCHIV">
    <link rel="stylesheet" href="styles/index.css"/>

    <div id="archiv_main">
        <div>
            <a href="./views/turniere/Turnier_2018.html" class="archiv">
                <div>
                    <p>2018</p>
                    <p>Was ein Turnier dieses Jahr.</p>
                    <p class="chevron">›</p>
                </div>
            </a>

            <a href="./views/turniere/Turnier_2019.html" class="archiv">
                <div>
                    <p>2019</p>
                    <p></p>
                    <p class="chevron">›</p>
                </div>
            </a>

            <a href="./views/turniere/Turnier_2020.html" class="archiv">
                <div>
                    <p>2020</p>
                    <p></p>
                    <p class="chevron">›</p>
                </div>
            </a>

            <a href="./views/turniere/Turnier_2021.html" class="archiv">
                <div>
                    <p>2021</p>
                    <p></p>
                    <p class="chevron">›</p>
                </div>
            </a>

            <a href="./views/turniere/Turnier_2022.html" class="archiv">
                <div>
                    <p>2022</p>
                    <p></p>
                    <p class="chevron">›</p>
                </div>
            </a>
        </div>
        <div id="rangliste">
            <h2>Rangliste der Legenden</h2>

            <table>
                <thead>
                    <tr>
                        <td>Platzierung</td>
                        <td>Name</td>
                        <td>Punkte</td>
                        <td>Medallien</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Gunter der Tischtennisgott</td>
                        <td>5325</td>
                        <td>23x Gold</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Eberhart Schmetterball</td>
                        <td>3325</td>
                        <td>4x Gold, 15x Silber</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Peter Schnauzer</td>
                        <td>1225</td>
                        <td>2x Gold, 12x Silber, 1x Bronze</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Felix treff nix</td>
                        <td>1024</td>
                        <td>1x Gold, 12x Silber</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Blinder Helmut</td>
                        <td>1</td>
                        <td>1x Bronze</td>
                    </tr>
                        <tr>
                        <td>6.</td>
                        <td>Armloser Fritz</td>
                        <td>0</td>
                        <td>-1x Bronze</td>
                    </tr>
                    <tr>
                        <td>7.</td>
                        <td>Kranker Max</td>
                        <td>-5</td>
                        <td>-10x Bronze</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <style>
        #archiv_main {
            display: flex;
            margin: 1rem;
        }

        #archiv_main > div:first-of-type {
            flex: 1;
            margin-right: 4rem;
        }

        .archiv > div {
            padding: 2rem;
            border-radius: 0.75rem;
            background: var(--container);
            margin: 1rem 0;
            transition: all 0.25s ease-in-out;
        }

        .archiv > div:hover {
            box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
        }

        .archiv:first-of-type > div {
            margin-top: 0;
        }

        .archiv:last-of-type > div {
            margin-bottom: 0;
        }

        .archiv:hover .chevron {
            transform: translateX(15px)
        }

        .chevron {
            font-size: 2.2rem;
            text-align: right;
            transition: transform 0.25s ease-in-out;
            margin: 0;
        }


        #rangliste {
            padding: 1rem;
            background: var(--container);
            border-radius: 0.75rem;
        }

        #rangliste td {
            padding: 1rem 1rem;
            text-align: center;
        }

        @media only screen and (max-width: 900px) {
            #archiv_main {
                display: block;
                margin: 1rem;
            }

            .archiv:last-of-type > div {
                margin-bottom: 1rem;
            }

            #archiv_main > div:first-of-type {
                margin-right: 0;
            }
        }
    </style>
</template>
`


customElements.define('custome-archiv', class extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = archiv_template
        const template = shadow.getElementById("TEMPLATE_ARCHIV").content;
        this.shadowRoot.append(template.cloneNode(true))
    }
})