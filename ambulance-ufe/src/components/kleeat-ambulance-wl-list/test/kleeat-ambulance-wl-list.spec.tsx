import { newSpecPage } from '@stencil/core/testing';
import { KleeatAmbulanceWlList } from '../kleeat-ambulance-wl-list';

describe('kleeat-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KleeatAmbulanceWlList],
      html: `<kleeat-ambulance-wl-list></kleeat-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <kleeat-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kleeat-ambulance-wl-list>
    `);
  });
});
