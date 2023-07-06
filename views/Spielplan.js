const spielplan_template = /*html*/`
<template id="TEMPLATE_SPIELPLAN">
    <link rel="stylesheet" href="assets/styles/index.css"/>

    <div>
        <div id="main_img">
            <img src="../assets/img/pingpong.png">
        </div>
        <h2>Turnierbeschreibung</h2>
        <p>
            Hallo und herzlich willkommen zu offiziellen Seite des Tischtennis-Grand-Slams 2023. Mit Spannung erwartet freuen wir uns wieder einmal auf schnelle Topspins und gnadenlose Kantenbälle. Am <b>13.07.2024</b> kämpfen die talentiertesten Tischtennisspieler Kontinentaleuropas auf dem prestigeträchtigen <abbr title="Tischtennis-Grand-Slam">TT-GS</abbr> um die Qualifikation für die diesjährige WM. Das Turnier ist wie gewohnt nach dem Brasilianischen K.O.-System aufgebaut.
            <br/>
            Um einen fairen Wettkampf zu ermöglichen, lies dir bitte die 
            <a href="https://www.tischtennis.de/fileadmin/documents/Mein_Sport/Schiedsrichter/Regeln/Internationale_Tischtennisregeln_A_2022-07-04.pdf">aktuellen Regeln der <abbr title="Internationalen Tischtennis Föderation">ITF</abbr></a> durch und mache dich mit den <a href="https://www.nada.de/home">Anti-Doping Regelungen der <abbr title="Nationale Anti-Doping Agentur Deutschland">NADA</abbr> vertraut</a>.
        </p>
        <h2>Zeitplan:</h2>
            <ul>
                <li>9:00: Akkreditierung durch den Bundestrainer</li>
                <li>10:00 Beginn der Duelle</li>
                <li>13:45: Finalblock</li>
                <li>15:00: Siegerehrung</li>
            </ul>
        <h2>Ort</h2>
            <ul>
                <li>Scharrena, Fritz-Walter-Weg 5, 70372 Stuttgart</li>
            </ul>
        <h2>Mitbringeliste</h2>
        <ul>
            <li>Tischtennisschläger (Regelkonform)</li>
            <li>Sportbekleidung (Regelkonform)</li>
            <li>Datenschutzbescheinigung:</li>
            <a href="https://www.tischtennis.de/mein-sport/spielen/wichtigste-spielregeln.html">PDF Download.</a>
        </ul>

        <h1>Spielplan</h1>
        <hr>
        <p>
            Falls nur 4 Teams zu Stande kommen, wird folgender Spielstand umgesetzt.
        </p>
        <table>
        <thead>
        <tr>
            <td colspan = "3">Spielplan für 4 Teams:</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Team A</td>
            <td rowspan="2">Halbfinale 1</td>
            <td id="final" rowspan="4">Grande Finale</td>
        </tr>
        <tr>
            <td>Team B</td>
        </tr>
        <tr>
            <td>Team C</td>
            <td rowspan="2">Halbfinale 2</td>
        </tr>
        <tr>
            <td>Team D</td>
        </tr>
        <tr>
            <td colspan = "3">Falls 8 Teams zustande kommen: <a href="index.html#Spielplan">Spielplan8</a>.</td>
        </tr>
        <tr>
            <td colspan = "3">Falls 16 Teams zustande kommen: <a href="AlternativerSpielplan16Teilnehmer.html">Spielplan16</a>.</td>
        </tr>
    </div>

    <style>
        h2 {
            text-align: center;
        }

        #main_img {
            background-image: url("../assets/img/pingpong.png");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            max-height: 30rem;
        }

        #main_img > img {
            width: 100%;
            max-height: 30rem;
            object-fit: contain;
            -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
        }
    </style>
</template>
`

customElements.define('custome-spielplan', class extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = spielplan_template
        const template = shadow.getElementById("TEMPLATE_SPIELPLAN").content;
        this.shadowRoot.append(template.cloneNode(true))
    }
})