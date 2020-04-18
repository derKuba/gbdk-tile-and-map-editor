import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { ExportButton } from './export-button';

describe('mvjp-export-button', () => {
    it('builds', () => {
        expect(new ExportButton()).toBeTruthy();
    });
    it('matches snapshot', async () => {
        const page = await newSpecPage({
            components: [ExportButton],
            template: () => {
                return <mvjp-export-button> </mvjp-export-button>;
            },
        });

        expect(page.root).toMatchSnapshot();
    });

    it('should test clickhandler', async () => {
        const setIsModalOpen = jest.fn();

        const page = await newSpecPage({
            components: [ExportButton],
            template: () => {
                return <mvjp-export-button setIsModalOpen={setIsModalOpen}> </mvjp-export-button>;
            },
        });

        page.root.shadowRoot.querySelector('button').click();
        await page.waitForChanges();
        expect(setIsModalOpen).toBeCalled();
    });
});
