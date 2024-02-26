import { newE2EPage } from '@stencil/core/testing';

describe('abl-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<abl-ambulance-wl-editor></abl-ambulance-wl-editor>');

    const element = await page.find('abl-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
