import ShaplaBaseComponent from "./ShaplaBaseComponent";

class ShaplaDropdownMenu extends ShaplaBaseComponent {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        // Create CSS to apply to the shadow DOM
        const style = document.createElement('style');
        style.textContent = ShaplaDropdownMenu.getStyle();

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(style, this.getElement());

        this.onClickTriggerElement();
        this.onClickOutside();
    }

    onClickTriggerElement() {
        this.shadowRoot.querySelector('.shapla-dropdown-trigger')
            .addEventListener('click', (event) => {
                this.shadowRoot.querySelector('.shapla-dropdown-menu').classList.toggle('is-active');
            });
    }

    onClickOutside() {
        let dropdownEl = this.shadowRoot.querySelector('.shapla-dropdown');
        const menuEl = this.shadowRoot.querySelector('.shapla-dropdown-menu');
        document.addEventListener('click', (event) => {
            if (!(dropdownEl.contains(event.target)) && menuEl.classList.contains('is-active')) {
                // menuEl.classList.remove('is-active');
            }
        });
    }

    /**
     * Update dom when attribute changed
     *
     * @param {string} name
     * @param {any} oldValue
     * @param {any} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        const element = this.shadowRoot.querySelector('.shapla-dropdown-menu');
        if ('open' === name && this.hasAttribute('open')) {
            element.classList.add('is-active')
        } else {
            element.classList.remove('is-active')
        }
        if ('label' === name && this.hasAttribute('label')) {
            const triggerEl = this.shadowRoot.querySelector('.shapla-dropdown-trigger');
            triggerEl.innerHTML = this.getAttribute('label');
        }
    }

    /**
     * List of attribute to observe
     *
     * @returns {string[]}
     */
    static get observedAttributes() {
        return ['open', 'label'];
    }

    getElement() {
        let classes = 'shapla-dropdown-menu';
        if (this.hasAttribute('open')) {
            classes += ' is-active';
        }
        const menuEl = this.el('div', {class: classes}, [
            this.el('div', {class: 'shapla-dropdown-menu__inner'}, [
                this.el('div', {class: 'shapla-dropdown-menu__content'}, [
                    this.el('slot')
                ])
            ])
        ]);

        const triggerEl = this.el('div', {class: 'shapla-dropdown-trigger'}, [
            this.el('slot', {name: 'trigger'}, [
                this.getAttribute('label')
            ])
        ])

        return this.el('div', {class: 'shapla-dropdown'}, [
            triggerEl,
            menuEl
        ])
    }

    /**
     * Get component style
     *
     * @returns {string}
     */
    static getStyle() {
        return `
        .shapla-dropdown {
    display: inline-flex;
    position: relative;
    vertical-align: top
}
        .shapla-dropdown-menu {
    font-size: 16px;
    left: 0;
    min-width: 12em;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    visibility: hidden;
    z-index: 20
}

.shapla-dropdown-menu.is-active {
    visibility: visible
}

.shapla-dropdown-menu.is-right {
    left: auto;
    right: 0
}

.shapla-dropdown-menu.is-up {
    bottom: 100%;
    padding-bottom: 4px;
    padding-top: 0;
    top: auto
}

.shapla-dropdown-menu__inner {
    background-color: #fff;
    background-color: var(--shapla-surface, #fff);
    border-radius: 4px;
    box-shadow: 0 5px 5px -3px #0003, 0 8px 10px 1px #00000024, 0 3px 14px 2px #0000001f;
    color: #000000de;
    color: var(--shapla-text-primary, #000000de);
    padding-bottom: .5em;
    padding-top: .5em
}

.shapla-dropdown-menu.has-max-items .shapla-dropdown-menu__content {
    max-height: 20em;
    max-height: calc(2em * var(--max-menu-items, 10));
    overflow-y: auto
}`;
    }
}

customElements.define('shapla-dropdown', ShaplaDropdownMenu);