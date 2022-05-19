class ShaplaCross extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    let template = document.getElementById('template--shapla-cross');
    let templateContent = template.content;

    this.shadowRoot.appendChild(templateContent.cloneNode(true));

    const size = this.getAttribute('size');
    if (size) {
      this.shadowRoot.querySelector('.shapla-delete-icon').classList.add(`is-${size}`)
    }
  }
}

customElements.define('shapla-cross', ShaplaCross);
