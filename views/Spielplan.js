const spielplan_template = /*html*/`
<template id="TEMPLATE_SPIELPLAN">
    <link rel="stylesheet" href="assets/styles/Spielplan.css"/>
    <link rel="stylesheet" href="assets/styles/tournamentPodium.css"/>
    <div id="body">
    <div id="main_img">
        <img src="./assets/img/pingpong.png">
    </div>
    <div id="#Turnierbeschreibung">
    <h2>Turnierbeschreibung</h2>
    <p class="begleitText">
        Hallo und herzlich willkommen zu offiziellen Seite des Tischtennis-Grand-Slams 2023. Mit Spannung erwartend freuen wir uns wieder einmal auf schnelle Topspins und gnadenlose Kantenbälle. Am <b>13.07.2024</b> kämpfen die talentiertesten Tischtennisspieler Kontinentaleuropas auf dem prestigeträchtigen <abbr title="Tischtennis-Grand-Slam">TT-GS</abbr> um die Qualifikation für die diesjährige WM. Das Turnier ist wie gewohnt nach dem Brasilianischen K.O.-System aufgebaut.
        <br/>
        Um einen fairen Wettkampf zu ermöglichen, lies dir bitte die 
        <a href="https://www.tischtennis.de/fileadmin/documents/Mein_Sport/Schiedsrichter/Regeln/Internationale_Tischtennisregeln_A_2022-07-04.pdf">aktuellen Regeln der <abbr title="Internationalen Tischtennis Föderation">ITF</abbr></a> durch und mache dich mit den <a href="https://www.nada.de/home">Anti-Doping Regelungen der <abbr title="Nationale Anti-Doping Agentur Deutschland">NADA</abbr> vertraut</a>.
    </p>
    <h2>Zeitplan</h2>
    <div id="Zeitplan">
        <ul id="Uhrzeiten">
            <li>9:00</li>
            <li>10:00</li>
            <li>13:45</li>
            <li>15:00</li>
        </ul>
        <ul>
            <li>Akkreditierung durch den Bundestrainer</li>
            <li>Beginn der Duelle</li>
            <li>Finalblock</li>
            <li>Siegerehrung</li>
        </ul>
    </div>
    <h2>Ort</h2>
        <p class="begleitText">Scharrena, Fritz-Walter-Weg 5, 70372 Stuttgart</p>
    <h2>Mitbringeliste</h2>
    <ul class="begleitText">
        <li>Tischtennisschläger (Regelkonform)</li>
        <li>Sportbekleidung (Regelkonform)</li>
        <li>Datenschutzbescheinigung:</li>
        <a href="https://www.tischtennis.de/mein-sport/spielen/wichtigste-spielregeln.html">PDF Download.</a>
    </ul>
    </div>
    <hr>
    <h1>Spielplan</h1>
    <div id="Spielplan">
    <h2>Viertelfinale</h2>
    <div class="Spielrunde">
        <div class="Spiel" id="VF1">
            <p class="Team1">A: Thunder Strikers<br>Maximilian Schmidt<br>Lena Fischer</p>
            <p class="Team2">B: Spin Wizards<br>Julian Weber<br>Emma Müller</p>
            <input min="0" type="number" id="VF1_input1" class="leftInput"/>
            <button type="button" class="SpielBtn" onclick="submit(this);">Submit!</button>
            <input min="0" type="number" id="VF1_input2" class="rightInput"/>
        </div>
        <div class="Spiel" id="VF2">
            <p class="Team1">C: Power Smashers<br>Lukas Wagner<br>Lara Becker</p>
            <p class="Team2">D: Speed Spiders<br>Tom Richter<br>Sarah Klein</p>
            <input min="0" type="number" id="VF2_input1" class="leftInput"/>
            <button type="button" class="SpielBtn" onclick="submit(this);">Submit!</button>
            <input min="0" type="number" id="VF2_input2" class="rightInput"/>
        </div>
        <div class="Spiel" id="VF3">
            <p class="Team1">E: Ball Blasters<br>Niklas Mayer<br>Johanna Hoffmann</p>
            <p class="Team2">F: Spin Divas<br>Marie Schneider<br>Felix Braun</p>
            <input min="0" type="number" id="VF3_input1" class="leftInput"/>
            <button type="button" class="SpielBtn" onclick="submit(this);">Submit!</button>
            <input min="0" type="number" id="VF3_input2" class="rightInput"/>
        </div>
        <div class="Spiel" id="VF4">
            <p class="Team1">G: Racket Warriors<br>Leonard Vogel<br>Sophie Schuster</p>
            <p class="Team2">H: Top Spinners<br>Benjamin Keller<br>Emily Hoffmann</p>
            <input min="0" type="number" id="VF4_input1" class="leftInput"/>
            <button type="button" class="SpielBtn" onclick="submit(this);">Submit!</button>
            <input min="0" type="number" id="VF4_input2" class="rightInput"/>
        </div>
    </div>
    <h2>Halbfinale</h2>
    <div class="Spielrunde" id="Halbfinale">
        <div class="Spiel" id="HF1">
            <p class="Team1"><br>?<br><br></p>
            <p class="Team2"><br>?<br><br></p>
            <input type="number" id="HF1_input1" class="leftInput"/>
            <button type="button" class="SpielBtn" onclick="submit(this);">Submit!</button>
            <input type="number" id="HF1_input2" class="rightInput"/>
        </div>
        <div class="Spiel" id="HF2">
            <p class="Team1"><br>?<br><br></p>
            <p class="Team2"><br>?<br><br></p>
            <input type="number" id="HF2_input1" class="leftInput"/>
            <button type="button" class="SpielBtn" onclick="submit(this);">Submit!</button>
            <input type="number" id="HF2_input2" class="rightInput"/>
        </div>
    </div>
    <h2>Finale</h2>
    <div class="Spielrunde" id="Finale">
        <div class="Spiel" id="F1">
            <p class="Team1"><br>?<br><br></p>
            <p class="Team2"><br>?<br><br></p>
            <input type="number" id="F_input1" class="leftInput"/>
            <button type="button" class="SpielBtn" onclick="submit(this);">Submit!</button>
            <input type="number" id="F_input2" class="rightInput"/>
        </div>
    </div>
    <h2>Gewinnerpodium</h2>
    <div id="siegertreppe">
        <br/>
        <p class="podiumSchrift" id="zweiterPlatzText"><br><br></p>
        <p class="podiumSchrift" id="ersterPlatzText"><br><br></p>
        <p class="podiumSchrift" id="dritterPlatzText"><br><br></p>
        <p class="podiumsplatz" id="zweiterPlatz">🥈</p>
        <p class="podiumsplatz" id="ersterPlatz">🥇</p>
        <p class="podiumsplatz" id="dritterPlatz">🥉</p>
    </div>
</div>
</div>
<style>
    h2 {
        text-align: center;
    }

    #main_img {
        background-image: url("./assets/img/pingpong.png");
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
let customGameplan;
customElements.define('custome-spielplan', class extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = spielplan_template
        const template = shadow.getElementById("TEMPLATE_SPIELPLAN").content;
        this.shadowRoot.append(template.cloneNode(true))
    }
    connectedCallback(){
        customGameplan = this.shadowRoot;
    }
})
function submit(button){
    //todo machen, dass man nur submitten kann, wenn man auch können soll
    //todo Siegertreppchen
    let spiel = button.parentElement;

    let pointsTeam1 = parseInt(spiel.getElementsByClassName("leftInput")[0].value);
    let pointsTeam2 = parseInt(spiel.getElementsByClassName("rightInput")[0].value);
    let winner = null;
    let higherGame = null;
    let indexHigherGame = null;
    let newTeam = null;
    let indexNewTeam = null;

    //Identify Winner
    if(pointsTeam1>pointsTeam2){
        winner = spiel.getElementsByClassName("Team1")[0].innerText;
    } else if(pointsTeam2>pointsTeam1) {
        winner = spiel.getElementsByClassName("Team2")[0].innerText;
    } else {
        return; //Fängt Unentschieden ab. Nichts passiert.
    }

    switch(currentGameRound(button)){
        case "Viertelfinale": higherGame = "HF"; break;
        case "Halbfinale": higherGame = "F"; break;
        case "Finale": {
            gamePlayed(button);
            refreshPodium();
        }
    }
    switch(currentGameIndex(button)){
        case 1: {
            indexHigherGame = 1;
            indexNewTeam = 1;
            break;
        }
        case 2: {
            indexHigherGame = 1;
            indexNewTeam = 2;
            break;
        }
        case 3: {
            indexHigherGame = 2;
            indexNewTeam = 1;
            break;
        }
        case 4: {
            indexHigherGame = 2;
            indexNewTeam = 2;
            break;
        }
    }

    higherGame = higherGame + indexHigherGame.toString();
    newTeam= "Team" + indexNewTeam.toString();
    customGameplan.querySelector(`#${higherGame} .${newTeam} `).innerText = winner;
    if(gameFull(customGameplan.querySelector(`#${higherGame}`))) { //wenn nächstes Game voll
        customGameplan.querySelector(`#${higherGame} button`).disabled = false; //mache Button von nächstem Game anff
    }
    gamePlayed(button);
}
function currentGameRound(button){
    let id = button.parentElement.id;
    if(id.includes("VF")) return "Viertelfinale";
    if(id.includes("HF")) return "Halbfinale";
    if(id.includes("F")) return "Finale";
    return null;
}

function currentGameIndex(button){
    let id = button.parentElement.id;

    for (let i = 0; i < 10; i++) {
        if(id.includes(i.toString())){
            return i;
        }
    }

    return -1;
}
function gamePlayed(button){
    button.style.display = "none";
    button.parentElement.getElementsByClassName("leftInput")[0].style.gridColumn = "1 / 3";
    button.parentElement.getElementsByClassName("leftInput")[0].readOnly = true;
    button.parentElement.getElementsByClassName("rightInput")[0].style.gridColumn = "3 / -1";
    button.parentElement.getElementsByClassName("rightInput")[0].readOnly = true;
}

window.onload= function onLoad(){
    customGameplan.querySelectorAll(`#Finale button`).forEach(f => f.disabled=true);
    customGameplan.querySelectorAll(`#Halbfinale button`).forEach(f => f.disabled=true);
}
function gameFull(game){
    let gameFull = true;
    game.querySelectorAll(`p`).forEach(p => gameFull &= !p.innerText.includes("?"));
    return gameFull;
}

function refreshPodium(){

    //determine first/second
    let first, second, third;
    if(customGameplan.querySelector('#F_input1').innerText>customGameplan.querySelector('#F_input2').innerText){
        first = customGameplan.querySelector('#F1 .Team1').innerText;
        second = customGameplan.querySelector('#F1 .Team2').innerText;
    } else {
        first = customGameplan.querySelector('#F1 .Team2').innerText;
        second = customGameplan.querySelector('#F1 .Team1').innerText;
    }

    //determine third
    let diffHalfOne = Math.abs(customGameplan.querySelector('#HF1_input1').valueAsNumber-customGameplan.querySelector('#HF1_input2').valueAsNumber);
    let diffHalfTwo = Math.abs(customGameplan.querySelector('#HF2_input1').valueAsNumber-customGameplan.querySelector('#HF2_input2').valueAsNumber);
    let gameWithThird;

    //determine game with third
    if(diffHalfOne>diffHalfTwo){
        gameWithThird = customGameplan.querySelector('#HF2');
    } else if(diffHalfOne<diffHalfTwo) {
        gameWithThird = customGameplan.querySelector('#HF1');
    } else {
        third = "Punktgleichheit. Kein dritter Platz.";
        registerInPodium(first, second, third);
    }

    //determine winner inside game
    let firstTeam= gameWithThird.querySelectorAll('input')[0].innerText;
    let secondTeam= gameWithThird.querySelectorAll('input')[1].innerText;
    if(firstTeam>secondTeam){
        third = gameWithThird.querySelector('.Team2').innerText;
    } else {
        third = gameWithThird.querySelector('.Team1').innerText;
    }
    registerInPodium(first, second, third);
}
function registerInPodium(first, second, third){
    customGameplan.querySelector('#ersterPlatzText').innerText = first;
    customGameplan.querySelector('#zweiterPlatzText').innerText = second;
    customGameplan.querySelector('#dritterPlatzText').innerText = third;
}