import { newSpecPage } from '@stencil/core/testing';
import { KleeatAmbulanceWlList } from '../kleeat-ambulance-wl-list';

describe('kleeat-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KleeatAmbulanceWlList],
      html: `<kleeat-ambulance-wl-list></kleeat-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as KleeatAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
