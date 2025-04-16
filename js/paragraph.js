const template = document.createElement('template');
const { content } = template;
template.innerHTML = '<p class="mb-paragraph"><slot></slot></p>';

class ElementParagraph extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'closed' });
  }
  connectedCallback() {
    this.shadowRoot.appendChild(content.cloneNode(true));
  }
}

customElements.define('mb-paragraph', ElementParagraph);
