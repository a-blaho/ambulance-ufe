import { newSpecPage } from '@stencil/core/testing';
import { AblAmbulanceWlApp } from '../abl-ambulance-wl-app';

describe('abl-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [AblAmbulanceWlApp],
      html: `<abl-ambulance-wl-app base-path="/"></abl-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('abl-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [AblAmbulanceWlApp],
      html: `<abl-ambulance-wl-app base-path="/ambulance-wl/"></abl-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('abl-ambulance-wl-list');
  });
});
