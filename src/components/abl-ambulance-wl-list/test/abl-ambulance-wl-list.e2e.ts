import { newE2EPage } from '@stencil/core/testing';

describe('abl-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<abl-ambulance-wl-list></abl-ambulance-wl-list>');

    const element = await page.find('abl-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
