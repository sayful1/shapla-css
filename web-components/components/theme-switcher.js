class ThemeSwitcher extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        this.colorSchemes = ['os-default', 'dark', 'light'];

        // Create CSS to apply to the shadow DOM
        const style = document.createElement('style');
        style.textContent = ThemeSwitcher.getStyle();

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(style, this.getElement());

        const triggerEl = this.shadowRoot.querySelector('.trigger');
        if (triggerEl) {
            triggerEl.addEventListener('click', () => {
                this.toggleActive();
            })
        }
        this.shadowRoot.querySelectorAll('.item').forEach(item => {
            item.addEventListener('click', () => {
                this.changeTheme(item.dataset.option)
                this.updateIcon(item.dataset.option)
                this.toggleActive();
            })
        })

        if (this.colorSchemes.includes(localStorage.theme)) {
            document.documentElement.classList.add(localStorage.theme)
            this.updateIcon(localStorage.theme);
        } else {
            this.updateIcon('os-default');
            document.documentElement.classList.add('os-default')
            // if ((!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            //     document.documentElement.classList.add('dark')
            // } else {
            //     document.documentElement.classList.remove('dark')
            // }
        }

        // document.addEventListener('click', (event) => {
        //     let element = this.shadowRoot.querySelector('.dropdown');
        //     const menuEl = this.shadowRoot.querySelector('.menu');
        //
        //     if (!element.contains(event.target)) {
        //         // menuEl.classList.remove('is-active');
        //     }
        // });
    }

    /**
     * Toggle menu activate class
     */
    toggleActive() {
        this.shadowRoot.querySelector('.menu').classList.toggle('is-active');
    }

    /**
     * Update trigger icon
     *
     * @param {string} theme The color theme slug.
     */
    updateIcon(theme) {
        this.shadowRoot.querySelector('.trigger-icon').innerHTML = this.themeSwitcherIcon(theme);
    }

    /**
     * Change theme
     *
     * @param {string} theme The color theme slug.
     */
    changeTheme(theme) {
        if (this.colorSchemes.includes(theme)) {
            document.documentElement.classList.remove(...this.colorSchemes);
            localStorage.theme = theme;
            document.documentElement.classList.add(theme)
        }
    }

    /**
     * Get full element
     *
     * @returns {HTMLElement}
     */
    getElement() {
        const triggerEl = this.el('span', {class: 'trigger'}, [
            this.el('span', {class: 'trigger-icon'}),
            this.el('span', {}, ['Theme'])
        ])
        const elMenu = this.el('div', {class: 'menu'}, [
            this.el('div', {class: 'inner'}, [
                this.getMenuItem('os-default', 'OS Default'),
                this.getMenuItem('light', 'Light'),
                this.getMenuItem('dark', 'Dark'),
            ])
        ])
        return this.el('div', {class: 'dropdown'}, [
            triggerEl,
            elMenu
        ]);
    }

    /**
     * Get menu item element
     *
     * @param {string} icon Color theme slug.
     * @param {string} label Color theme name.
     * @returns {HTMLElement}
     */
    getMenuItem(icon, label) {
        const svg = this.el('span', {"class": "item", "data-option": icon})
        svg.innerHTML = this.themeSwitcherIcon(icon);
        svg.append(
            this.el('span', {}, [label])
        );
        return svg;
    }

    /**
     * Get theme switcher icon
     *
     * @param {string} icon The icon name
     * @returns {string}
     */
    themeSwitcherIcon(icon) {
        let html = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">';
        html += '<rect fill="none" height="24" width="24"/>';
        if ('os-default' === icon) {
            html += '<path d="M12,22c5.52,0,10-4.48,10-10S17.52,2,12,2S2,6.48,2,12S6.48,22,12,22z M13,4.07c3.94,0.49,7,3.85,7,7.93s-3.05,7.44-7,7.93 V4.07z"/>';
        } else if ('light' === icon) {
            html += '<path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/>';
        } else if ('dark' === icon) {
            html += '<path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/>';
        }
        html += '</svg>';
        return html;
    }

    static getStyle() {
        return `
.dropdown { display: inline-flex; position: relative; vertical-align: top;}
.trigger {display: flex;align-items: center; color: var(--shapla-text-primary,#000000de); font-size:1rem;cursor:pointer;}
.trigger-icon{display: flex;align-items: center;justify-content:center}
svg {width: 1.25em;height: 1.25em;display: inline-flex;fill: currentColor;margin-right: .25rem;}
.item {display: flex;align-items: center;font-size: .875em;line-height: 1.5;padding: 0.375em 1em;cursor: pointer;}
.menu { font-size: 16px; right: 0; min-width: 12em; padding-top: 4px; position: absolute; top: 100%; visibility: hidden; z-index: 20;}
.menu.is-active {visibility: visible;}
.inner { background-color: var(--shapla-surface,#fff); border-radius: 4px;
box-shadow: 0 5px 5px -3px #0003, 0 8px 10px 1px #00000024, 0 3px 14px 2px #0000001f;
color: var(--shapla-text-primary,#000000de); padding-bottom: 0.5em; padding-top: 0.5em;}`;
    }

    /**
     * Create dynamic element
     *
     * @param {string} tagName
     * @param {object} attributes
     * @param {array} children
     * @returns {HTMLElement}
     */
    el(tagName, attributes = {}, children = []) {
        let el = document.createElement(tagName);
        if (Object.keys(attributes).length) {
            Object.entries(attributes).forEach(([key, value]) => {
                el.setAttribute(key, value);
            })
        }
        if (children.length) {
            el.append(...children);
        }
        return el;
    }
}

customElements.define('shapla-theme-switcher-menu', ThemeSwitcher);
