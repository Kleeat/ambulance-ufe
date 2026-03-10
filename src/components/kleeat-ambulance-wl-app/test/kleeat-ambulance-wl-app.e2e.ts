import { newE2EPage } from '@stencil/core/testing';

describe('kleeat-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kleeat-ambulance-wl-app></kleeat-ambulance-wl-app>');

    const element = await page.find('kleeat-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
