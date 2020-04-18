import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { PaintModusSwitcher } from './paint-modus-switcher';

describe('mvjp-paint-modus-switcher', () => {
    it('builds', () => {
        expect(new PaintModusSwitcher()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        const page = await newSpecPage({
            components: [PaintModusSwitcher],
            template: () => {
                return <mvjp-paint-modus-switcher />;
            },
        });

        expect(page.root).toMatchSnapshot();
    });

    it('should test navigate to', async () => {
        const setPaintModusMock = jest.fn();

        const page = await newSpecPage({
            components: [PaintModusSwitcher],
            template: () => {
                return <mvjp-paint-modus-switcher setPaintModus={setPaintModusMock} />;
            },
        });

        page.root.shadowRoot.querySelectorAll('input[name="bucket"]')[0].click();
        await page.waitForChanges();
        expect(setPaintModusMock).toBeCalledWith(1);

        page.root.shadowRoot.querySelectorAll('input[name="brush"]')[0].click();
    });
});
