const spielplan2_template = /*html*/`
<template id="TEMPLATE_SPIELPLAN_2">
    <link rel="stylesheet" href="assets/styles/index.css"/>
    
    <h1>Alternativer Spielplan</h1>
    <tr>
        <td colspan = "3">Falls 4 Teams zustande kommen, klicke <a href="./views/AlternativerSpielplan4Teilnehmer.html">hier.</a></td>
    </tr>
    <tr>
        <td colspan = "3">Falls 16 Teams zustande kommen, klicke <a href="./views/AlternativerSpielplan16Teilnehmer.html">hier.</a></td>
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