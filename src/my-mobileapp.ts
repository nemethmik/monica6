import { css, html, LitElement, CSSResult, TemplateResult } from "lit"
import { customElement } from "lit/decorators.js"
import "@vaadin/vaadin-app-layout/vaadin-app-layout"
import "@vaadin/vaadin-app-layout/vaadin-drawer-toggle"
import "@vaadin/vaadin-icon/vaadin-icon"
import "@vaadin/vaadin-icons/vaadin-iconset"
import "@vaadin/vaadin-tabs/vaadin-tab"
import "@vaadin/vaadin-tabs/vaadin-tabs"
//import { applyTheme } from "Frontend/generated/theme"

@customElement("my-mobileapp")
class MobileApp extends LitElement {
//   protected createRenderRoot() {
//     const root = super.createRenderRoot()
//     // Apply custom theme (only supported if your app uses one)
//     applyTheme(root)
//     return root
//   }
  static get styles():CSSResult {
    return css`
      h1 {
        font-size: var(--lumo-font-size-l);
        margin: var(--lumo-space-m) var(--lumo-space-l);
      }
      vaadin-icon {
        height: var(--lumo-icon-size-s);
        margin: auto;
        width: var(--lumo-icon-size-s);
      }
      vaadin-tabs {
        width: 100%;
      }
    `
  }
  render():TemplateResult {
    return html`
      <vaadin-app-layout>
        <h1 slot="navbar">MyApp</h1>
        <vaadin-tabs slot="navbar touch-optimized" theme="minimal equal-width-tabs">
          <vaadin-tab>
            <a tabindex="-1">
              <vaadin-icon icon="vaadin:dashboard"></vaadin-icon>
            </a>
          </vaadin-tab>
          <vaadin-tab>
            <a tabindex="-1">
              <vaadin-icon icon="vaadin:cart"></vaadin-icon>
            </a>
          </vaadin-tab>
          <vaadin-tab>
            <a tabindex="-1">
              <vaadin-icon icon="vaadin:user-heart"></vaadin-icon>
            </a>
          </vaadin-tab>
          <vaadin-tab>
            <a tabindex="-1">
              <vaadin-icon icon="vaadin:package"></vaadin-icon>
            </a>
          </vaadin-tab>
        </vaadin-tabs>
        <div class="content">
          <h2>View title</h2>
          <p>View content</p>
        </div>
      </vaadin-app-layout>
    `
  }
}
declare global { interface HTMLElementTagNameMap { "my-mobileapp": MobileApp}}