import { newE2EPage } from '@stencil/core/testing';

describe('abl-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<abl-ambulance-wl-app></abl-ambulance-wl-app>');

    const element = await page.find('abl-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
