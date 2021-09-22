//import "./style.css"
import {html,css, CSSResult, render,LitElement, TemplateResult} from "lit"
import {customElement} from "lit/decorators.js"
import "@vaadin/vaadin-app-layout/vaadin-app-layout"
import "@vaadin/vaadin-app-layout/vaadin-drawer-toggle"
import "@vaadin/vaadin-icon/vaadin-icon"
import "@vaadin/vaadin-icons/vaadin-iconset"
import "@vaadin/vaadin-tabs/vaadin-tab"
import "@vaadin/vaadin-tabs/vaadin-tabs"
//import { applyTheme } from 'Frontend/generated/theme';
import "./my-mobileapp"

const app = document.querySelector<HTMLDivElement>("#app")!
//render(html`<my-app></my-app>`,app)
render(html`<my-mobileapp></my-mobileapp>`,app)

@customElement("my-app")
export class App extends LitElement {
  // protected createRenderRoot():Element | ShadowRoot {
  //   const root = super.createRenderRoot()
  //   // Apply custom theme (only supported if your app uses one)
  //   //applyTheme(root);
  //   return root
  // }
  static get styles():CSSResult {
    return css`
      h1 {
        font-size: var(--lumo-font-size-l);
        margin: 0;
      }
      vaadin-icon {
        box-sizing: border-box;
        margin-inline-end: var(--lumo-space-m);
        margin-inline-start: var(--lumo-space-xs);
        padding: var(--lumo-space-xs);
      }
    `
  }
  render():TemplateResult {
    return html`
      <vaadin-app-layout>
        <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
        <h1 slot="navbar">My Vaadin App Layout Sample</h1>
        <vaadin-tabs slot="drawer" orientation="vertical">
          <vaadin-tab>
            <a tabindex="-1">
              <vaadin-icon icon="vaadin:dashboard"></vaadin-icon>
              <span>Dashboard</span>
            </a>
          </vaadin-tab>
          <vaadin-tab>
            <a tabindex="-1">
              <vaadin-icon icon="vaadin:cart"></vaadin-icon>
              <span>Orders</span>
            </a>
          </vaadin-tab>
          <vaadin-tab>
            <a tabindex="-1">
              <vaadin-icon icon="vaadin:user-heart"></vaadin-icon>
              <span>Customers</span>
            </a>
          </vaadin-tab>
          <vaadin-tab>
            <a tabindex="-1">
              <vaadin-icon icon="vaadin:package"></vaadin-icon>
              <span>Products</span>
            </a>
          </vaadin-tab>
          <vaadin-tab>
            <a tabindex="-1">
              <vaadin-icon icon="vaadin:records"></vaadin-icon>
              <span>Documents</span>
            </a>
          </vaadin-tab>
          <vaadin-tab>
            <a tabindex="-1">
              <vaadin-icon icon="vaadin:list"></vaadin-icon>
              <span>Tasks</span>
            </a>
          </vaadin-tab>
          <vaadin-tab>
            <a tabindex="-1">
              <vaadin-icon icon="vaadin:chart"></vaadin-icon>
              <span>Analytics</span>
            </a>
          </vaadin-tab>
        </vaadin-tabs>
      </vaadin-app-layout>
    `
  }
}
declare global { interface HTMLElementTagNameMap { "my-app": App}}