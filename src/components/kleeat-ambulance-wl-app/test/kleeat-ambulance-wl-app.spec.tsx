import { newSpecPage } from '@stencil/core/testing';
import { KleeatAmbulanceWlApp } from '../kleeat-ambulance-wl-app';

describe('kleeat-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [KleeatAmbulanceWlApp],
      html: `<kleeat-ambulance-wl-app base-path="/"></kleeat-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("kleeat-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [KleeatAmbulanceWlApp],
      html: `<kleeat-ambulance-wl-app base-path="/ambulance-wl/"></kleeat-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("kleeat-ambulance-wl-list");
  });
});