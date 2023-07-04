const spielplan2_template = /*html*/`
<template id="TEMPLATE_SPIELPLAN_2">
    <link rel="stylesheet" href="styles/index.css"/>
    
    <h1>Alternativer Spielplan</h1>
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
        <td rowspan="4">Grande Finale</td>
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
</template>
`

customElements.define('custome-alternativer-spielplan', class extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = spielplan2_template
        const template = shadow.getElementById("TEMPLATE_SPIELPLAN_2").content;
        this.shadowRoot.append(template.cloneNode(true))
    }
})