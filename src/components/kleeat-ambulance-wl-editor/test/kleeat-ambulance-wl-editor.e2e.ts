import { newE2EPage } from '@stencil/core/testing';

describe('kleeat-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kleeat-ambulance-wl-editor></kleeat-ambulance-wl-editor>');

    const element = await page.find('kleeat-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
