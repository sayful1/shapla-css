class ShaplaDialog extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    let template = document.getElementById('template--shapla-modal-core');
    let templateContent = template.content;

    let templateCard = document.getElementById('template--shapla-modal-card');
    let templateCardContent = templateCard.content;

    this.shadowRoot.appendChild(templateContent.cloneNode(true));

    const cardFixedCross = this.shadowRoot.querySelector('.shapla-modal-close.is-fixed');

    // Add card type class.
    const elContent = this.shadowRoot.querySelector('.shapla-modal-content');
    const contentSize = this.getAttribute('content-size');
    if (["small", "medium", "large", "full", 'custom'].indexOf(contentSize) !== -1) {
      elContent.classList.add(`is-${contentSize}`);
    }

    this.type = this.getAttribute('type');
    if ('card' === this.type) {
      cardFixedCross.remove();
      elContent.classList.add('shapla-modal-card');
      elContent.innerHTML = '';
      elContent.append(templateCardContent.cloneNode(true));

      const heading = this.getAttribute('heading');
      if (heading) {
        this.shadowRoot.querySelector('.shapla-modal-card__title').innerHTML = heading;
      }
    } else if ('box' === this.type) {
      elContent.classList.add('shapla-modal-box');
    }

    // Trigger 'close' event on Esc keydown
    this.closeOnEscape();

    // Trigger 'close' event on backdrop click
    const cardBackdrop = this.shadowRoot.querySelector('.shapla-modal-background')
    if (cardBackdrop) {
      const backgroundTheme = this.getAttribute('backdrop-theme');
      if (["dark", "light"].indexOf(backgroundTheme) !== -1) {
        cardBackdrop.classList.add(`is-${backgroundTheme}`)
      }
      if (!this.hasAttribute('disabled-backdrop-click')) {
        cardBackdrop.addEventListener('click', () => this.triggerCloseEvent());
      }
    }

    // Trigger 'close' event on cross click
    const cardCrossButtons = this.shadowRoot.querySelectorAll('.shapla-modal-close');
    cardCrossButtons.forEach(cardCross => {
      cardCross.addEventListener('click', () => this.triggerCloseEvent());
    })
  }

  /**
   * Close on escape
   */
  closeOnEscape() {
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;

      if (e.keyCode === 27 && this.hasAttribute('open')) { // Escape key
        this.triggerCloseEvent();
      }
    });
  }

  /**
   * Trigger 'close' event
   */
  triggerCloseEvent() {
    this.dispatchEvent(new CustomEvent('close'));
  }

  /**
   * Update dom when attribute changed
   *
   * @param {string} name
   * @param {any} oldValue
   * @param {any} newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    const modal = this.shadowRoot.querySelector('.shapla-modal');
    if ('open' === name && this.hasAttribute('open')) {
      modal.classList.add('is-active')
    } else {
      modal.classList.remove('is-active')
    }
  }

  /**
   * List of attribute to observe
   *
   * @returns {string[]}
   */
  static get observedAttributes() {
    return ['open'];
  }

  connectedCallback() {
    if ('card' === this.type) {
      const cardFooter = this.shadowRoot.querySelector('.shapla-modal-card__footer');
      if (cardFooter.querySelector('slot').assignedNodes().length < 1) {
        cardFooter.classList.add('no-content')
      }
    }
  }
}

customElements.define('shapla-dialog', ShaplaDialog);
