const archiv_template = /*html*/`
<template id="TEMPLATE_ARCHIV">
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