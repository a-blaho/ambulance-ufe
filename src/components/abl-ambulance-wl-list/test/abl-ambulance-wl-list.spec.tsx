import { newSpecPage } from '@stencil/core/testing';
import { AblAmbulanceWlList } from '../abl-ambulance-wl-list';

describe('abl-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AblAmbulanceWlList],
      html: `<abl-ambulance-wl-list></abl-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as AblAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
