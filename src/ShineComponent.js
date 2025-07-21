class ShineComponent extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    const slot = document.createElement('slot')
    slot.name = 'my-slot'
    this.shadowRoot.appendChild(slot)
  }
}

customElements.define('shine-component', ShineComponent)
