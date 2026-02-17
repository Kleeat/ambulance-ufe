import { newE2EPage } from '@stencil/core/testing';

describe('kleeat-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kleeat-ambulance-wl-list></kleeat-ambulance-wl-list>');

    const element = await page.find('kleeat-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
