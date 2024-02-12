import { newSpecPage } from '@stencil/core/testing';
import { AblAmbulanceWlList } from '../abl-ambulance-wl-list';

describe('abl-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AblAmbulanceWlList],
      html: `<abl-ambulance-wl-list></abl-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <abl-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </abl-ambulance-wl-list>
    `);
  });
});
