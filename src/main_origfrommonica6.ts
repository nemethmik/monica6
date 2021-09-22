import "./style.css"
import {html,render,LitElement, TemplateResult} from "lit"
import {customElement} from "lit/decorators.js"

const app = document.querySelector<HTMLDivElement>("#app")!
render(html`<my-app></my-app>`,app)

@customElement("my-app")
class App extends LitElement {
  override render():TemplateResult {
    return html`
      <h1>Hello Lit!</h1>
      <a href="https://lit.dev/" target="_blank">Documentation</a>
    `   
  }
}
declare global { interface HTMLElementTagNameMap { "my-app": App}}