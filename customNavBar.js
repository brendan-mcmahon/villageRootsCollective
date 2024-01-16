class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
      <a href="index.html">Home</a>
      <a href="melodle.html">Melodle</a>
      <button>Donate</button>
    </nav>
      `
  }
}
customElements.define('navbar', Navbar)
